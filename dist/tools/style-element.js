define(["require", "exports", "tools/toggle-view"], function (require, exports, toggle_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StyleElement = void 0;
    var StyleElement;
    (function (StyleElement) {
        function toggleButton(highlight, playdown) {
            playdown.classList.add('default-button');
            playdown.classList.remove('active-button');
            highlight.classList.add('active-button');
            highlight.classList.remove('default-button');
        }
        StyleElement.toggleButton = toggleButton;
        function toggleTab(highlight, tabs) {
            toggle_view_1.ToggleView.tickets('show', highlight);
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active-tab');
                tabs[i].classList.add('default-tab');
            }
            highlight.classList.remove('default-tab');
            highlight.classList.add('active-tab');
        }
        StyleElement.toggleTab = toggleTab;
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
                    element.style.color = '#4c72a4';
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
    })(StyleElement = exports.StyleElement || (exports.StyleElement = {}));
});

//# sourceMappingURL=dist/tools/style-element.js.map
