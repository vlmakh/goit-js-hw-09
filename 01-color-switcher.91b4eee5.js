!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");e.addEventListener("click",d);var n=null;function d(){e.disabled=!0,e.removeEventListener("click",d),t.disabled=!1,t.addEventListener("click",c),a(),n=setInterval(a,1e3)}function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}function c(){clearInterval(n),e.disabled=!1,e.addEventListener("click",d),t.disabled=!0,t.removeEventListener("click",c)}t.disabled=!0}();
//# sourceMappingURL=01-color-switcher.91b4eee5.js.map
