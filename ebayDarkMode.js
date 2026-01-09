// ==UserScript==
// @name        eBay Dark Mode
// @namespace   ebay-dark-mode
// @include     *://*.ebay.*/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

const style = document.createElement("style");
style.textContent = `
html {
    filter: invert(1) hue-rotate(180deg) contrast(1.05) !important;
}

img, picture, video, canvas, .gh-logo {
    filter: invert(1) hue-rotate(180deg) !important;
}

html, body,
.srp-river,
#mainContent {
    background-color: rgb(235,235,235) !important;
}

.vim,
.ux-navigator__container,
.seo-interlink {
    background: transparent !important;
}`;
document.documentElement.appendChild(style);
