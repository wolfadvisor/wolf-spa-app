/* =============================================================
   app.js — Global state, RBAC permissions, showApp / logout
   Wolf Business Advisory
   ============================================================= */

// ---- Global session state ----
var App = {
  currentUser: null,
  currentName: null,
  currentRole: null,
  currentPage: null
};

// ---- RBAC permission map ----
// Mirrors the backend authorizeUser() in Code.gs.
// Used for visual gating only — real auth always happens server-side.
var PERMISSIONS = {
  admin: ['Dashboard', 'Companies', 'ICPO', 'SCO', 'SPA', 'Profile'],
  user:  ['Dashboard', 'ICPO', 'SCO', 'Profile']
};

// ---- Show the app shell after successful login ----
function showApp() {
  $('#login-overlay').addClass('hidden');
  $('#app-shell').addClass('visible');

  var initial = (App.currentName || App.currentUser).charAt(0).toUpperCase();
  $('#sidebarAvatar').text(initial);
  $('#sidebarUserName').text(App.currentName || App.currentUser);
  $('#sidebarUserRole').text(App.currentRole || '');

  applyPermissionsUI();
  navigateTo('Dashboard');
}

// ---- Hide sidebar buttons the current role cannot access ----
function applyPermissionsUI() {
  var allowed  = PERMISSIONS[App.currentRole] || [];
  var allPages = Object.keys(
    Object.values(PERMISSIONS).reduce(function(acc, pages) {
      pages.forEach(function(p) { acc[p] = true; });
      return acc;
    }, {})
  );

  allPages.forEach(function(page) {
    var btn = $('[onclick="navigateTo(\'' + page + '\')"]');
    allowed.includes(page) ? btn.show() : btn.hide();
  });
}

/* =============================================================
   Page Initializer — controla scripts por página
   ============================================================= */

function _initPage(page) {

  console.log('⚙️ Init page:', page);

  switch (page) {

    case 'Profile':
      if (typeof initProfile === 'function') {
        initProfile();
      }
      break;

    case 'ICPO':
      if (typeof initICPO === 'function') {
        initICPO();
      }
      break;

    case 'Dashboard':
      if (typeof initDashboard === 'function') {
        initDashboard();
      }
      break;

    case 'Companies':
      if (typeof initCompanies === 'function') {
        initCompanies();
      }
      break;

    case 'SCO':
      if (typeof initSCO === 'function') {
        initSCO();
      }
      break;

    case 'SPA':
      if (typeof initSPA === 'function') {
        initSPA();
      }
      break;

    default:
      console.log('ℹ️ No initializer for this page');
  }
}

// ---- Logout ----
function logout() {
  // Revoke Google OAuth token on the backend (silent)
  if (typeof google !== 'undefined') {
    google.script.run
      .withSuccessHandler(function () {})
      .withFailureHandler(function () {})
      .logoutOAuth();
  }

  // Clear session
  App.currentUser = null;
  App.currentName = null;
  App.currentRole = null;
  App.currentPage = null;

  $('#content').html('<p>Selecione uma opção no menu.</p>');
  $('#app-shell').removeClass('visible');
  $('#login-overlay').removeClass('hidden');

  // Reset form fields and UI state
  $('#email').val('');
  $('#password').val('');
  switchTab('google');
  $('#errorGoogle').hide();
  $('#errorMessage').hide();

  // Reset the Google button label (auth.js helper)
  if (typeof _googleBtnOriginalHTML !== 'undefined') {
    _googleBtnOriginalHTML = null;
  }
}

// ---- Console-hardening — IIFE wraps navigateTo after definition ----
// Prevents direct calls from DevTools bypassing RBAC.
// Must run AFTER navigation.js is loaded; done via DOMContentLoaded in index.html.
function secureNavigation() {
  var _original = navigateTo;

  navigateTo = function (page) {
    if (!App.currentUser) {
      console.warn('[Wolf] Blocked: no active session.');
      return;
    }
    var allowed = PERMISSIONS[App.currentRole] || [];
    if (!allowed.includes(page)) {
      console.warn('[Wolf] Blocked: role "' + App.currentRole + '" cannot access "' + page + '".');
      return;
    }
    return _original(page);
  };
}