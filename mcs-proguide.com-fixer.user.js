// ==UserScript==
// @name       MCS-ProGuide.com Fixer
// @license    MIT
// @namespace  https://github.com/aycabta
// @version    0.0.2
// @description  Font size fixing
// @include    /^http:\/\/www.mcs-proguide.com\//
// @copyright  2019+, aycabta
// ==/UserScript==

(function() {
    document.querySelectorAll('td').forEach((div) => {
        div.style.fontSize = '8pt';
        div.style.lineHeight = '1.55em';
        div.style.borderStyle = 'none';
    });
    document.querySelectorAll('table').forEach((div) => {
        div.style.borderStyle = 'none';
    });
    document.querySelectorAll('p').forEach((div) => {
        div.style.fontSize = '8pt';
        div.style.lineHeight = '1.55em';
    });
})();
