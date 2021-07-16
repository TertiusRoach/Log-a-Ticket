define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StyleElement = void 0;
    var StyleElement;
    (function (StyleElement) {
        function highlight(type, element) {
            switch (type) {
                case 'button':
                    element.style.cursor = 'pointer';
                    element.style.color = '#f8af58';
                    break;
                case 'select':
                    element.style.border = '2px solid #f8af58';
                    break;
                case 'input':
                    element.style.border = '2px solid #f8af58';
                    break;
                case 'textarea':
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
                    element.style.removeProperty('border');
                    break;
                case 'input':
                    element.style.removeProperty('border');
                    break;
                case 'textarea':
                    element.style.removeProperty('border');
                    break;
            }
        }
        StyleElement.playdown = playdown;
        function toggleButton(highlight, playdown) {
            playdown.classList.remove('active-button');
            highlight.classList.remove('default-button');
            highlight.classList.add('active-button');
            playdown.classList.add('default-button');
        }
        StyleElement.toggleButton = toggleButton;
        function toggleClass(action, element) {
            element.classList.remove("" + element.classList[0]);
            switch (action) {
                case 'activate':
                    element.classList.add('active-button');
                    break;
                case 'disable':
                    element.classList.add('default-button');
                    break;
            }
        }
        StyleElement.toggleClass = toggleClass;
    })(StyleElement = exports.StyleElement || (exports.StyleElement = {}));
});

//# sourceMappingURL=dist/tools/style-element.js.map
