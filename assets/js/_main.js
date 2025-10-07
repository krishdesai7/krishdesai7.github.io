// ===== THEME =====
(function () {
  const html = document.documentElement;

  function setTheme(mode) {
    const icon = document.getElementById('theme-icon');
    const next = mode || localStorage.getItem('theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    if (next === 'dark') {
      html.setAttribute('data-theme', 'dark');
      if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
    } else {
      html.removeAttribute('data-theme');
      if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
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

    // Respect OS changes unless the user pinned a choice
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

// ===== BIBLATEX MODAL =====
let currentBiblatexUrl = '';
let currentBiblatexContent = '';

window.showBiblatexModal = async function (biblatexUrl) {
  const modal = document.getElementById('bibla  tex-modal');
  const contentEl = document.getElementById('biblatex-content');
  if (!modal || !contentEl) return;

  currentBiblatexUrl = biblatexUrl;

  try {
    const res = await fetch(biblatexUrl);
    currentBiblatexContent = await res.text();
    contentEl.textContent = currentBiblatexContent;
  } catch (err) {
    currentBiblatexContent = '';
    contentEl.textContent = 'Error loading BibLaTeX content';
    console.error('Error fetching BibLaTeX:', err);
  }

  modal.classList.add('show');
};

function closeBiblatexModal() {
  const modal = document.getElementById('biblatex-modal');
  if (modal) modal.classList.remove('show');
}

function downloadBiblatex() {
  if (!currentBiblatexContent) return;
  const filename = (currentBiblatexUrl?.split('/')?.pop()) || 'citation.bib';
  const blob = new Blob([currentBiblatexContent], { type: 'text/plain' });
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
  const btnDownload = document.getElementById('biblatex-download');
  const btnCopy = document.getElementById('biblatex-copy');
  const modal = document.getElementById('biblatex-modal');

  if (btnClose) btnClose.addEventListener('click', closeBiblatexModal);
  if (btnDownload) btnDownload.addEventListener('click', downloadBiblatex);
  if (btnCopy) btnCopy.addEventListener('click', async () => {
    if (!currentBiblatexContent) return;
    await copyText(currentBiblatexContent);
    markCopied(btnCopy, 2000);
  });

  // Close when clicking backdrop
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeBiblatexModal();
    });
  }

  // Close with Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeBiblatexModal();
  });
});