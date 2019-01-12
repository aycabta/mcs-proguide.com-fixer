// ==UserScript==
// @name       MCS-ProGuide.com Fixer
// @license    MIT
// @namespace  https://github.com/aycabta
// @version    0.0.3
// @description  Font size fixing
// @include    /^http:\/\/www.mcs-proguide.com\//
// @copyright  2019+, aycabta
// ==/UserScript==

(function() {
    document.querySelectorAll('td').forEach((item) => {
        item.style.fontSize = '8pt';
        item.style.lineHeight = '1.55em';
        item.style.borderStyle = 'none';
    });
    document.querySelectorAll('table').forEach((item) => {
        item.style.borderStyle = 'none';
    });
    document.querySelectorAll('p').forEach((item) => {
        item.style.fontSize = '8pt';
        item.style.lineHeight = '1.55em';
    });
})();
