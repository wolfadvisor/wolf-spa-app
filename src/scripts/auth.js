/* =============================================================
   auth.js — Frontend Auth (LOCAL / API READY)
   Wolf Business Advisory
   ============================================================= */

var _googleBtnOriginalHTML = null;

var Auth = {

  init: function () {
    Auth._initAccordion();
    Auth._bindEmailForm();
    Auth._bindGoogleButton();
  },

  // ============================================================
  // UI
  // ============================================================
  _initAccordion: function () {
    if ($('#sidebar-accordion').length) {
      $('#sidebar-accordion').accordion({
        collapsible: true,
        heightStyle: 'content'
      });
    }
  },

  // ============================================================
  // EMAIL LOGIN (MOCK / API READY)
  // ============================================================
  _bindEmailForm: function () {

    $('#submitBtn').on('click', async function () {

      var email = $('#email').val().trim();
      var pass  = $('#password').val();
      var btn   = $(this);

      if (!email || !pass) {
        $('#errorMessage').text('Please enter your email and password.').show();
        return;
      }

      btn.prop('disabled', true).text('Signing in...');
      $('#errorMessage').hide();

      try {

        // 🔥 MOCK (substituir por API depois)
        await new Promise(resolve => setTimeout(resolve, 800));

        // Simulação de usuário
        var user = {
          email: email,
          name: "Carlos Ribeiro",
          role: email.includes("admin") ? "admin" : "user"
        };

        // Salva estado
        App.currentUser = user.email;
        App.currentName = user.name;
        App.currentRole = user.role;

        showApp();

      } catch (err) {
        $('#errorMessage').text('Error: ' + err.message).show();
      }

      btn.prop('disabled', false).text('Sign In');

    });

    $('#email, #password').on('keypress', function (e) {
      if (e.which === 13) $('#submitBtn').click();
    });
  },

  // ============================================================
  // GOOGLE LOGIN (MOCK)
  // ============================================================
  _bindGoogleButton: function () {
    $('#googleSignInBtn').on('click', Auth._handleGoogleLogin);
  },

  _handleGoogleLogin: async function () {

    Auth._setGoogleBtnLoading(true);
    $('#errorGoogle').hide();

    try {

      // 🔥 MOCK GOOGLE LOGIN
      await new Promise(resolve => setTimeout(resolve, 1000));

      var user = {
        email: "user@gmail.com",
        name: "Google User",
        role: "admin"
      };

      App.currentUser = user.email;
      App.currentName = user.name;
      App.currentRole = user.role;

      showApp();

    } catch (err) {
      $('#errorGoogle').text('Error: ' + err.message).show();
    }

    Auth._setGoogleBtnLoading(false);
  },

  // ============================================================
  // READY FOR FUTURE API
  // ============================================================

  /*
  // 🔌 EXEMPLO FUTURO (quando tiver backend)
  async loginWithAPI(email, pass) {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, pass })
    });

    return await res.json();
  }
  */

  // ============================================================
  // UI HELPERS
  // ============================================================
  _setGoogleBtnLoading: function (isLoading) {
    var btn = $('#googleSignInBtn');

    if (isLoading) {
      if (!_googleBtnOriginalHTML) {
        _googleBtnOriginalHTML = btn.html();
      }

      btn.prop('disabled', true).html(
        '<span class="btn-spinner">' +
          '<span></span><span></span><span></span>' +
        '</span> Connecting...'
      );

    } else {
      btn.prop('disabled', false);

      if (_googleBtnOriginalHTML) {
        btn.html(_googleBtnOriginalHTML);
      }
    }
  }
};

// ============================================================
// TAB SWITCH (GLOBAL)
// ============================================================
function switchTab(tab) {

  if (tab === 'google') {
    $('#panelGoogle').show();
    $('#panelEmail').hide();

    $('#tabGoogle').addClass('active').removeClass('inactive');
    $('#tabEmail').addClass('inactive').removeClass('active');

    $('#errorMessage').hide();

  } else {
    $('#panelGoogle').hide();
    $('#panelEmail').show();

    $('#tabEmail').addClass('active').removeClass('inactive');
    $('#tabGoogle').addClass('inactive').removeClass('active');

    $('#errorGoogle').hide();
  }
}