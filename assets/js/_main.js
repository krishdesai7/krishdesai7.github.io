let determineThemeSetting=()=>{let e=localStorage.getItem("theme");return"dark"!=e&&"light"!=e&&"system"!=e?"system":e},determineComputedTheme=()=>{let e=determineThemeSetting();return"system"!=e?e:userPref&&userPref("(prefers-color-scheme: dark)").matches?"dark":"light"};const browserPref=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";let setTheme=e=>{const t=e||localStorage.getItem("theme")||$("html").attr("data-theme")||browserPref;"dark"===t?($("html").attr("data-theme","dark"),$("#theme-icon").removeClass("fa-solid fa-moon").addClass("fa-solid fa-sun")):"light"===t&&($("html").removeAttr("data-theme"),$("#theme-icon").removeClass("fa-solid fa-sun").addClass("fa-solid fa-moon"))};var toggleTheme=()=>{const e="dark"===$("html").attr("data-theme")?"light":"dark";localStorage.setItem("theme",e),setTheme(e)};

window.copyToClipboard = function(btn) {
  const citation = btn.getAttribute('data-citation');
  const citationText = citation.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

  const markCopied = () => {
    btn.classList.add('copied');
    setTimeout(() => {
      btn.classList.remove('copied');
    }, 2000);
  };

  const fallbackCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = citationText;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(citationText).then(markCopied).catch(() => {
      fallbackCopy();
      markCopied();
    });
  } else {
    fallbackCopy();
    markCopied();
  }
}

// BibTeX Modal functionality
let currentBibtexUrl = '';
let currentBibtexContent = '';

window.showBibtexModal = async function(bibtexUrl) {
  const modal = document.getElementById('bibtex-modal');
  const bibtexContent = document.getElementById('bibtex-content');

  currentBibtexUrl = bibtexUrl;

  // Fetch BibTeX content
  try {
    const response = await fetch(bibtexUrl);
    currentBibtexContent = await response.text();
    bibtexContent.textContent = currentBibtexContent;
  } catch (error) {
    bibtexContent.textContent = 'Error loading BibTeX content';
    console.error('Error fetching BibTeX:', error);
  }

  modal.classList.add('show');
}

function closeBibtexModal() {
  const modal = document.getElementById('bibtex-modal');
  modal.classList.remove('show');
}

function downloadBibtex() {
  if (currentBibtexUrl) {
    // Extract filename from URL or use default
    const urlParts = currentBibtexUrl.split('/');
    const filename = urlParts[urlParts.length - 1] || 'citation.bib';

    // Create blob and download
    const blob = new Blob([currentBibtexContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}

function copyBibtexToClipboard() {
  const fallbackCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = currentBibtexContent;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const markCopied = () => {
    const btn = document.getElementById('bibtex-copy');
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  };

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(currentBibtexContent).then(markCopied).catch(() => {
      fallbackCopy();
      markCopied();
    });
  } else {
    fallbackCopy();
    markCopied();
  }
}

$(document).ready(function(){
  setTheme();

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{
    localStorage.getItem("theme")||setTheme(e.matches?"dark":"light")
  });

  $("#theme-toggle").on("click",toggleTheme);

  // BibTeX Modal Event Listeners
  $('.modal-close').on('click', closeBibtexModal);
  $('#bibtex-download').on('click', downloadBibtex);
  $('#bibtex-copy').on('click', copyBibtexToClipboard);

  // Close modal when clicking outside
  $('#bibtex-modal').on('click', function(e) {
    if (e.target === this) {
      closeBibtexModal();
    }
  });

  // Close modal with Escape key
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      closeBibtexModal();
    }
  });
  $(".author__urls-wrapper button").on("click",function(){
    $(".author__urls").fadeToggle("fast",function(){});
    $(".author__urls-wrapper button").toggleClass("open")
  });
  
  jQuery(window).on("resize",function(){
    "none"==$(".author__urls.social-icons").css("display")&&$(window).width()>=925&&$(".author__urls").css("display","block")
  });
  
  $("a").smoothScroll({offset:-70,preventDefault:!1})
});
