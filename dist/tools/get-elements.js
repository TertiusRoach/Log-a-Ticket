define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.obtain = exports.Elements = void 0;
    var Elements;
    (function (Elements) {
        function body(distPage) {
            return {
                bodyContainer: document.getElementById(distPage + "-body"),
            };
        }
        Elements.body = body;
    })(Elements = exports.Elements || (exports.Elements = {}));
    function obtain() {
        Elements.body;
    }
    exports.obtain = obtain;
});

//# sourceMappingURL=dist/tools/get-elements.js.map
