!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.2825f6fc.js.map
