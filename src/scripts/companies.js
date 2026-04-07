function renderCompanies(data) {
  const tbody = document.getElementById('companiesTableBody');
  tbody.innerHTML = '';

  if (!data || data.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding:20px; color:var(--text-muted);">
          No companies found
        </td>
      </tr>
    `;
    return;
  }

  data.forEach(c => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${c.name}</td>
      <td>${formatDate(c.date)}</td>
      <td>${formatCurrency(c.value)}</td>
      <td>${c.port}</td>
      <td>
        <span class="status ${getStatusClass(c.status)}">
          ${c.status}
        </span>
      </td>
      <td>${c.notes || '-'}</td>
    `;

    tbody.appendChild(tr);
  });
}

function getStatusClass(status) {
  if (!status) return 'status-pending';

  switch (status.toLowerCase()) {
    case 'approved': return 'status-approved';
    case 'rejected': return 'status-rejected';
    default: return 'status-pending';
  }
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function formatCurrency(value) {
  if (!value) return '-';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
}