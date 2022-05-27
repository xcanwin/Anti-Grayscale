// ==UserScript==
// @name         Anti-Grayscale
// @description  移除页面的灰色模式 (恢复页面的彩色模式). Remove grayscale of html page (Restore color mode of html page).
// @version      1.0
// @author       xcanwin
// @namespace    https://github.com/xcanwin/Anti-Grayscale/
// @supportURL   https://github.com/xcanwin/Anti-Grayscale/
// @license      AGPL-3.0-only
// @updateURL    https://raw.githubusercontent.com/xcanwin/Anti-Grayscale/main/Anti-Grayscale.user.js
// @downloadURL  https://raw.githubusercontent.com/xcanwin/Anti-Grayscale/main/Anti-Grayscale.user.js
// @run-at       document-end
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let main = function(){
        Array.prototype.forEach.call(document.getElementsByTagName("*"), function(el) {
            [
                "filter", "-webkit-filter", "-moz-filter", "-ms-filter", "-o-filter",
            ].forEach(xcanwin => {
                let re = /grayscale\(.*?\)/gi;
                let style = document.defaultView.getComputedStyle(el, null)[xcanwin];
                if (style && style.match(re)) {
                    el.style.setProperty(xcanwin, style.replace(re, "grayscale(0)"), "important");
                }
            });
        });
    };

    main();
})();
