// ==UserScript==
// @name         Anti-Grayscale
// @namespace    https://github.com/xcanwin/
// @version      0.3.4
// @description  移除页面的灰色模式 (恢复页面的彩色模式). Remove grayscale of html page (Restore color mode of html page).
// @author       xcanwin
// @license      MIT
// @updateURL    https://raw.githubusercontent.com/xcanwin/Anti-Grayscale/master/Anti-Grayscale.user.js
// @supportURL   https://github.com/xcanwin/Anti-Grayscale/
// @match        *://*/*
// @grant        all
// ==/UserScript==

(function() {
	'use strict';
	var filterstyle, re = /grayscale\(.*?\)/gi;
	["filter", "-webkit-filter", "-moz-filter", "-ms-filter", "-o-filter"].forEach(xcanwin => {
		Array.prototype.forEach.call(document.getElementsByTagName("*"), function(el) {
			filterstyle = document.defaultView.getComputedStyle(el, null)[xcanwin];
			if (filterstyle.match(re)){
				el.style = xcanwin + ": " + filterstyle.replace(re, "grayscale(0) !important");
			}
		});
	});
})();
