/* =============================================================
   icpo.js — ICPO page: form init, history table, SCO request
   Wolf Business Advisory
   ============================================================= */

/**
 * Called by navigation.js after the ICPO HTML fragment is injected.
 */

function initICPO() {
  console.log('📄 ICPO page loaded');
}

function initIcpoForm() {
  var form = document.getElementById('icpoForm');
  if (!form) return;

  // Populate the validity deadline field
  google.script.run
    .withSuccessHandler(function (deadline) {
      var field = document.getElementById('icpoValidity');
      if (field) field.value = deadline;
    })
    .getBusinessDeadline();

  // Load existing records into the history table
  loadIcpoHistory();

  // Re-clone to strip any stale event listeners
  var newForm = form.cloneNode(true);
  form.parentNode.replaceChild(newForm, form);

  // Re-attach the SCO button handler after the clone
  var scoBtn = document.getElementById('requestScoBtn');
  if (scoBtn) scoBtn.onclick = requestSCO;

  // ---- Submit handler ----
  newForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var validityEl = document.getElementById('icpoValidity');

    var formData = {
      email:          App.currentUser,
      company:        this.company.value,
      address:        this.address.value,
      representative: this.representative.value,
      designation:    this.designation.value,
      cargo:          this.cargo.value,
      origin:         this.origin.value,
      icumsa:         this.icumsa.value,
      packaging:      this.packaging.value,
      qty:            this.qty.value,
      incoterm:       this.incoterm.value,
      portLoading:    this.portLoading.value,
      portDest:       this.portDest.value,
      shipment:       this.shipment.value,
      contractPeriod: this.contractPeriod.value,
      price:          this.price.value,
      payment:        this.payment.value,
      bankName:       this.bankName.value,
      bankAddress:    this.bankAddress.value,
      swift:          this.swift.value,
      validity:       validityEl ? validityEl.value : ''
    };

    var submitBtn = newForm.querySelector('[type="submit"]');
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Saving…';

    google.script.run
      .withSuccessHandler(function () {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Save ICPO';
        loadIcpoHistory();
      })
      .withFailureHandler(function (err) {
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Save ICPO';
        var errEl = document.getElementById('icpoError');
        if (errEl) {
          errEl.textContent    = err.message;
          errEl.style.display  = 'block';
        }
      })
      .saveIcpo(formData);
  });
}

/**
 * Fetches ICPO records for the current user and renders them
 * in the history table, updating summary counters and the SCO button.
 */
function loadIcpoHistory() {
  if (!App.currentUser) return;

  google.script.run
    .withSuccessHandler(function (rows) {
      var tbody  = document.getElementById('icpoHistoryBody');
      var wrap   = document.getElementById('icpoHistory');
      var scoBtn = document.getElementById('requestScoBtn');

      if (!rows || rows.length === 0) {
        if (tbody)  tbody.innerHTML = '<tr><td colspan="7" class="home__table-empty">No records yet.</td></tr>';
        if (scoBtn) scoBtn.style.display = 'none';
        return;
      }

      var latest = rows[0];

      // SCO button visibility
      if (scoBtn) {
        scoBtn.style.display    = latest.status === 'SCO Requested' ? 'none' : 'block';
        scoBtn.dataset.rowIndex = latest.rowIndex;
      }

      // Summary stats
      var totalRequested = rows.filter(function (r) { return r.status === 'SCO Requested'; }).length;
      var totalEl        = document.getElementById('icpoTotal');
      var pendingEl      = document.getElementById('icpoPending');
      if (totalEl)   totalEl.innerText   = rows.length;
      if (pendingEl) pendingEl.innerText = totalRequested;

      // Company avatar / name
      var avatarEl = document.getElementById('icpoAvatar');
      var nameEl   = document.getElementById('icpoCompanyName');
      if (avatarEl) avatarEl.innerText = latest.company.charAt(0).toUpperCase();
      if (nameEl)   nameEl.innerText   = latest.company;

      // Table rows
      if (tbody) {
        tbody.innerHTML = rows.map(function (r) {
          var dateStr     = r.date ? new Date(r.date).toLocaleDateString() : '—';
          var statusStyle = r.status === 'SCO Requested'
            ? 'color:#e74c3c;font-weight:700;'
            : 'color:var(--text-muted);';
          return '<tr>'
            + '<td>' + dateStr          + '</td>'
            + '<td>' + r.company        + '</td>'
            + '<td>' + r.qty + ' MT'    + '</td>'
            + '<td>' + r.incoterm       + '</td>'
            + '<td>USD ' + r.price      + '</td>'
            + '<td>' + r.validity       + '</td>'
            + '<td style="' + statusStyle + '">' + r.status + '</td>'
            + '</tr>';
        }).join('');
      }

      if (wrap) wrap.style.display = 'block';
    })
    .withFailureHandler(function (err) {
      console.error('Error loading ICPO history:', err.message);
    })
    .getIcpoHistory(App.currentUser);
}

/**
 * Sends an SCO request to the admin for the latest ICPO record.
 */
function requestSCO() {
  var scoBtn = document.getElementById('requestScoBtn');
  if (!scoBtn) return;

  var rowIndex = parseInt(scoBtn.dataset.rowIndex, 10);
  if (!rowIndex) return;

  if (!confirm('Send SCO request to the admin for your latest ICPO?')) return;

  scoBtn.disabled    = true;
  scoBtn.textContent = 'Sending…';

  google.script.run
    .withSuccessHandler(function () {
      scoBtn.style.display = 'none';
      loadIcpoHistory();
      alert('SCO request sent successfully!');
    })
    .withFailureHandler(function (err) {
      scoBtn.disabled    = false;
      scoBtn.textContent = '🚀 Request SCO for this ICPO';
      alert('Error sending request: ' + err.message);
    })
    .requestScoFromIcpo(App.currentUser, rowIndex);
}