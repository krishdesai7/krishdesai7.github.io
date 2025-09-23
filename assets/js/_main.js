let determineThemeSetting=()=>{let e=localStorage.getItem("theme");return"dark"!=e&&"light"!=e&&"system"!=e?"system":e},determineComputedTheme=()=>{let e=determineThemeSetting();return"system"!=e?e:userPref&&userPref("(prefers-color-scheme: dark)").matches?"dark":"light"};const browserPref=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";let setTheme=e=>{const t=e||localStorage.getItem("theme")||$("html").attr("data-theme")||browserPref;"dark"===t?($("html").attr("data-theme","dark"),$("#theme-icon").removeClass("fa-solid fa-moon").addClass("fa-solid fa-sun")):"light"===t&&($("html").removeAttr("data-theme"),$("#theme-icon").removeClass("fa-solid fa-sun").addClass("fa-solid fa-moon"))};var toggleTheme=()=>{const e="dark"===$("html").attr("data-theme")?"light":"dark";localStorage.setItem("theme",e),setTheme(e)};

window.copyToClipboard = function(btn) {
  const citation = btn.getAttribute('data-citation');
  const citationText = citation.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

  navigator.clipboard.writeText(citationText).then(() => {
    btn.classList.add('copied');
    setTimeout(() => {
      btn.classList.remove('copied');
    }, 2000);
  }).catch(err => {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = citationText;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    btn.classList.add('copied');
    setTimeout(() => {
      btn.classList.remove('copied');
    }, 2000);
  });
}

$(document).ready(function(){
  setTheme();
  
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{
    localStorage.getItem("theme")||setTheme(e.matches?"dark":"light")
  });
  
  $("#theme-toggle").on("click",toggleTheme);
  
  // Improved footer positioning
  var bumpIt=function(){
    $("body").css("margin-bottom",$(".page__footer").outerHeight(!0))
  };
  
  // Delay initial bump to ensure content is rendered
  setTimeout(bumpIt, 100);
  
  // Also bump when images load (they might change height)
  $(window).on('load', bumpIt);
  
  var didResize=!1;
  $(window).resize(function(){didResize=!0});
  setInterval(function(){didResize&&(didResize=!1,bumpIt())},250);
  
  $(".author__urls-wrapper button").on("click",function(){
    $(".author__urls").fadeToggle("fast",function(){});
    $(".author__urls-wrapper button").toggleClass("open")
  });
  
  jQuery(window).on("resize",function(){
    "none"==$(".author__urls.social-icons").css("display")&&$(window).width()>=925&&$(".author__urls").css("display","block")
  });
  
  $("a").smoothScroll({offset:-70,preventDefault:!1})
});