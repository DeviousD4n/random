// ==UserScript==
// @name        eBay Dark Mode
// @namespace   ebay-dark
// @include     *://*.ebay.*/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

const darkStyles = `
html {
    filter: invert(1) hue-rotate(180deg) contrast(1.05) !important;
}

img, picture, video, canvas, .gh-logo, .boltHeader__ebayLogo {
    filter: invert(1) hue-rotate(180deg) !important;
}

body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: rgba(16,18,22,0.083);
    mix-blend-mode: screen;
    z-index: 2147483647;
}

html, body,
#mainContent,
.seo-breadcrumbs-container,
.listGroup--primary,
.vim,
.tabs__content,
.srp-river,
.srp-river-main,
.srp-results,
srp-river-main {
    background-color: rgb(235,235,235) !important;
}
`;

const style = document.createElement("style");
style.textContent = darkStyles;
document.documentElement.appendChild(style);

