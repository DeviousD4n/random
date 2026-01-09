// ==UserScript==
// @name        eBay Dark Mode
// @namespace   ebay-dark-mode
// @include     https://*.ebay.*/*
// @match       https://itm.ebaydesc.com/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

const style = document.createElement("style");

if (location.hostname === "itm.ebaydesc.com") {

    style.textContent = `
        img, picture, video, canvas, image,
        *[style*="background-image"] {
            filter: invert(1) hue-rotate(180deg) saturate(1.12) contrast(1.05) !important;
        }
    `;
} else {

    style.textContent = `
        html {
            filter: invert(1) hue-rotate(180deg) saturate(1.12) contrast(1.05) !important;
        }

        img, picture, video, canvas, image, .gh-logo {
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
        }
    `;
}

document.documentElement.appendChild(style);
