define(["require", "exports", "tools/get-page", "tools/convert-string"], function (require, exports, get_page_1, convert_string_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToggleView = void 0;
    var ToggleView;
    (function (ToggleView) {
        function pageContainer(action, containerId, pageClass) {
            switch (action) {
                case 'show':
                    get_page_1.GetPage.forHTML(containerId, pageClass);
                    break;
                case 'hide':
                    var container = document.getElementById("" + containerId);
                    var defaultClass = "default-" + convert_string_1.ConvertString.fetch('latter', pageClass);
                    container.innerHTML = '';
                    container.classList.remove(pageClass);
                    container.classList.add(defaultClass);
                    container.style.display = 'none';
                    break;
            }
        }
        ToggleView.pageContainer = pageContainer;
    })(ToggleView = exports.ToggleView || (exports.ToggleView = {}));
});

//# sourceMappingURL=dist/tools/toggle-view.js.map
