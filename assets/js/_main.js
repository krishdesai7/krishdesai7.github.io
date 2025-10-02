// ===== THEME =====
(function () {
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');

  function setTheme(mode) {
    const next = mode || localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (next === 'dark') {
      html.setAttribute('data-theme', 'dark');
      icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); 
    } else {
      html.removeAttribute('data-theme');
      icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); 
    }
  }

  function toggleTheme() {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    setTheme(next);
  }

  window.addEventListener('DOMContentLoaded', () => {
    setTheme();

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);

    // Honor OS theme changes unless user explicitly chose a theme
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) setTheme(e.matches ? 'dark' : 'light');
    });
  });
})();

// ===== CLIPBOARD =====
async function copyText(text) {
  await navigator.clipboard.writeText(text);
}

function decodeEntitiesAndStripTags(htmlish) {
  // Decode common entities then strip HTML tags
  let s = htmlish
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  return s.replace(/<[^>]*>/g, '');
}

function markCopied(btn, ms = 2000) {
  if (!btn) return;
  const original = btn.textContent;
  btn.classList.add('copied');

  // If the button has text, briefly swap it to a confirmation
  if (original && original.trim().length) btn.textContent = 'Copied!';
  setTimeout(() => {
    btn.classList.remove('copied');
    if (original && original.trim().length) btn.textContent = original;
  }, ms);
}

// Copy citation buttons: expects data-citation on the button
window.copyToClipboard = async function (btn) {
  const raw = btn?.getAttribute('data-citation') || '';
  const text = decodeEntitiesAndStripTags(raw);
  await copyText(text);
  markCopied(btn, 1000);
};

// ===== BIBTEX MODAL =====
let currentBibtexUrl = '';
let currentBibtexContent = '';

window.showBibtexModal = async function (bibtexUrl) {
  const modal = document.getElementById('bibtex-modal');
  const contentEl = document.getElementById('bibtex-content');
  if (!modal || !contentEl) return;

  currentBibtexUrl = bibtexUrl;

  try {
    const res = await fetch(bibtexUrl);
    currentBibtexContent = await res.text();
    contentEl.textContent = currentBibtexContent;
  } catch (err) {
    currentBibtexContent = '';
    contentEl.textContent = 'Error loading BibTeX content';
    console.error('Error fetching BibTeX:', err);
  }

  modal.classList.add('show');
};

function closeBibtexModal() {
  const modal = document.getElementById('bibtex-modal');
  if (modal) modal.classList.remove('show');
}

function downloadBibtex() {
  if (!currentBibtexContent) return;
  const filename = (currentBibtexUrl?.split('/')?.pop()) || 'citation.bib';
  const blob = new Blob([currentBibtexContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

window.addEventListener('DOMContentLoaded', () => {
  // Modal buttons
  const btnClose = document.querySelector('.modal-close');
  const btnDownload = document.getElementById('bibtex-download');
  const btnCopy = document.getElementById('bibtex-copy');
  const modal = document.getElementById('bibtex-modal');

  if (btnClose) btnClose.addEventListener('click', closeBibtexModal);
  if (btnDownload) btnDownload.addEventListener('click', downloadBibtex);
  if (btnCopy) btnCopy.addEventListener('click', async () => {
    if (!currentBibtexContent) return;
    await copyText(currentBibtexContent);
    markCopied(btnCopy, 2000);
  });

  // Close when clicking backdrop
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeBibtexModal();
    });
  }

  // Close with Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeBibtexModal();
  });
});