/* =============================================================
   profile.js — Profile page: load data & save form
   Wolf Business Advisory
   ============================================================= */

/**
 * Called by navigation.js after the Profile HTML fragment is injected.
 * Clones the form to remove stale event listeners, then re-attaches them.
 */

function initProfile() {
  console.log('👤 Profile page loaded');
}

function initProfileForm() {
  var form = document.getElementById('profileForm');
  if (!form) return;

  // Pre-fill form with current user data
  loadProfileData();

  // Re-attach submit handler on a clean clone (prevents duplicate binds)
  var newForm = form.cloneNode(true);
  form.parentNode.replaceChild(newForm, form);

  newForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var formData = {
      name:    this.name.value.trim(),
      email:   this.email.value.trim(),
      company: this.company.value.trim(),
      country: this.country.value.trim()
    };

    var submitBtn = newForm.querySelector('[type="submit"]');
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Saving…';

    google.script.run
      .withSuccessHandler(function () {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Save Profile';
        alert('Profile updated!');
        loadProfileData();
      })
      .withFailureHandler(function (err) {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Save Profile';
        alert('Error saving profile: ' + err.message);
      })
      .saveProfile(formData);
  });
}

/**
 * Fetches profile data from the backend and populates the form fields
 * and the profile card header elements.
 */
function loadProfileData() {
  if (!App.currentUser) return;

  google.script.run
    .withSuccessHandler(function (data) {
      if (!data) return;

      var form = document.getElementById('profileForm');
      if (!form) return;

      form.name.value    = data.name    || '';
      form.email.value   = data.email   || '';
      form.company.value = data.company || '';
      form.country.value = data.country || '';

      var nameEl   = document.getElementById('profileName');
      var emailEl  = document.getElementById('profileEmail');
      var avatarEl = document.getElementById('profileAvatar');

      if (nameEl)   nameEl.innerText   = data.name  || '—';
      if (emailEl)  emailEl.innerText  = data.email || '—';
      if (avatarEl) avatarEl.innerText = data.name
        ? data.name.charAt(0).toUpperCase()
        : '--';
    })
    .withFailureHandler(function (err) {
      console.error('Error loading profile data:', err.message);
    })
    .getProfile(App.currentUser);
}