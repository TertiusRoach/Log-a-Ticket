define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StyleElement = void 0;
    var StyleElement;
    (function (StyleElement) {
        function highlight(type, element) {
            element.style.cursor = 'pointer';
            switch (type) {
                case 'button':
                    element.style.color = '#f8af58';
                    break;
                case 'select':
                    element.style.border = '2px solid #f8af58';
                    break;
            }
        }
        StyleElement.highlight = highlight;
        function playdown(type, element) {
            switch (type) {
                case 'button':
                    element.style.color = '#084887';
                    break;
                case 'select':
                    element.style.border = '2px solid #084887';
                    break;
            }
        }
        StyleElement.playdown = playdown;
    })(StyleElement = exports.StyleElement || (exports.StyleElement = {}));
});

//# sourceMappingURL=dist/tools/style-element.js.map
