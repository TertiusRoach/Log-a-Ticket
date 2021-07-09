define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Divs = exports.iframes = void 0;
    var iframes;
    (function (iframes) {
        function iGet(commonDescriptor) {
            return {
                iframeContainer: document.getElementById(commonDescriptor + '-iframe'),
                iframeElement: document.querySelector('#' + commonDescriptor + '-iframe iframe'),
            };
        }
        iframes.iGet = iGet;
    })(iframes = exports.iframes || (exports.iframes = {}));
    var Divs;
    (function (Divs) {
        function iGet() { }
        Divs.iGet = iGet;
    })(Divs = exports.Divs || (exports.Divs = {}));
});

//# sourceMappingURL=dist/tools/get-elements.js.map
