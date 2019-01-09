// ==UserScript==
// @name       MCS-ProGuide.com Fixer
// @license    MIT
// @namespace  https://github.com/aycabta
// @version    0.0.1
// @description  Font size fixing
// @include    /^http:\/\/www.mcs-proguide.com\//
// @copyright  2019, aycabta
// ==/UserScript==

(function() {
    Array.prototype.forEach.call(
        document.getElementsByTagName('td'),
        function(div) {
            div.style.fontSize = '8pt';
            div.style.lineHeight = '1.55em';
            div.style.borderStyle = 'none';
        }
    );
    Array.prototype.forEach.call(
        document.getElementsByTagName('table'),
        function(div) {
            div.style.borderStyle = 'none';
        }
    );
    Array.prototype.forEach.call(
        document.getElementsByTagName('p'),
        function(div) {
            div.style.fontSize = '8pt';
            div.style.lineHeight = '1.55em';
        }
    );
})();
