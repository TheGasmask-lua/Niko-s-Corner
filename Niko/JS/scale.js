// my site is made for 1920 width so on other screens i just scale the whole page like the browser zoom does

function rescale() {
  document.body.style.zoom = window.innerWidth / 1920;
}

rescale();
window.onresize = rescale;
