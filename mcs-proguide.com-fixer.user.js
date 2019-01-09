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
        }
    );
})();
