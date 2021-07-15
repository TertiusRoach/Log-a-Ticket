define(["require", "exports", "tools/convert-string"], function (require, exports, convert_string_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToggleView = void 0;
    var ToggleView;
    (function (ToggleView) {
        function pageContainer(action, containerId, containerClass) {
            var defaultClass = "default-" + convert_string_1.ConvertString.fetch('latter', containerClass);
            switch (action) {
                case 'show':
                    if (convert_string_1.ConvertString.fetch('latter', containerId) === 'header') {
                        var header = document.getElementById(containerId);
                        header.style.display = 'grid';
                    }
                    if (convert_string_1.ConvertString.fetch('latter', containerId) === 'iframe') {
                        var iframe = document.getElementById(containerId);
                        iframe.style.display = 'flex';
                    }
                    if (convert_string_1.ConvertString.fetch('latter', containerId) === 'main') {
                        var main = document.getElementById(containerId);
                        main.style.display = 'grid';
                    }
                    break;
                case 'hide':
                    var container = document.getElementById("" + containerId);
                    container.innerHTML = '';
                    container.classList.remove(containerClass);
                    container.classList.add(defaultClass);
                    container.style.display = 'none';
                    break;
            }
        }
        ToggleView.pageContainer = pageContainer;
    })(ToggleView = exports.ToggleView || (exports.ToggleView = {}));
});

//# sourceMappingURL=dist/tools/toggle-view.js.map
