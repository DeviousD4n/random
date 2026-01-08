// ==UserScript==
// @name        eBay Dark Mode
// @namespace   ebay-dark
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
#mainContent,
.seo-breadcrumbs-container,
.vim,
.tabs__content,
.srp-river,
.srp-river-main,
.srp-results,
srp-river-main {
    background-color: rgb(235,235,235) !important;
}
`;
document.documentElement.appendChild(style);
