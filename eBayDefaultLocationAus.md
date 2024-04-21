# Australia as eBay Australia default location

For anyone wanting to set Australia as the default on the Ebay Australia website (not the app) you can do the following:

Go to your browsers extensions and search for Greasemonkey and add it. Greasemonkey allows you to customize the way a website behaves.

Once Greasemonkey is installed:

    Click on the Greasemonkey icon in your browser toolbar.
    Choose “New User Script…”.
    Copy and paste the below code:


```js
// ==UserScript==
// @name         Ebay Australia Default Location
// @namespace    ebayausdefloc
// @version      0.1
// @description  Sets the default location to Australia on ebay.com.au
// @author       DeviousD4n
// @match        https://www.ebay.com.au/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() {
        var button = document.getElementById('gh-btn');
        if (button) {
            button.addEventListener('click', function(event) {
                var form = document.getElementById('gh-f');
                var field = document.getElementById('ausDefault');
                if (!field) {
                    field = document.createElement('input');
                    field.type = 'hidden';
                    field.id = 'ausDefault';
                    field.name = 'LH_PrefLoc';
                    form.appendChild(field);
                }
                field.value = '1'; 
            });
        } 
    });
})();
```
