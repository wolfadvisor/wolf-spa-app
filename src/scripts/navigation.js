/* =============================================================
   navigation.js — SPA Navigation (Pure JS)
   ============================================================= */

window.navigateTo = async function (page) {

  const content = document.getElementById('content');

  // 🔐 AUTH CHECK
  if (!App.currentUser) {
    content.innerHTML = '<p style="color:red">Not authenticated</p>';
    return;
  }

  // 🔐 RBAC CHECK (FRONT)
  const allowed = PERMISSIONS[App.currentRole] || [];

  if (!allowed.includes(page)) {
    content.innerHTML = '<p style="color:red">Access denied</p>';
    return;
  }

  // 🔁 Evita reload da mesma página
  if (App.currentPage === page) return;

  App.currentPage = page;

  // ⏳ Loading UI
  content.innerHTML = '<p>Loading...</p>';

  try {
    // 📡 Chamada para backend
    const response = await fetch(`/api/pages/${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: App.currentUser
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();

    content.innerHTML = html;

    _initPage(page);

  } catch (err) {
    content.innerHTML =
      `<p style="color:red">Error: ${err.message}</p>`;
  }
};