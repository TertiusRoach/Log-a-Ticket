define(["require", "exports", "tools/convert-string"], function (require, exports, convert_string_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToggleView = void 0;
    var ToggleView;
    (function (ToggleView) {
        function page(action, containerId, containerClass) {
            var container = document.getElementById("" + containerId);
            switch (action) {
                case 'show':
                    switch (convert_string_1.ConvertString.fetch('latter', containerId)) {
                        case 'header':
                            var header = document.getElementById(containerId);
                            header.style.display = 'grid';
                            break;
                        case 'iframe':
                            var iframe = document.getElementById(containerId);
                            iframe.style.display = 'flex';
                            break;
                        case 'main':
                            var main = document.getElementById(containerId);
                            main.style.display = 'grid';
                            break;
                    }
                    break;
                case 'hide':
                    if (convert_string_1.ConvertString.fetch('latter', containerId) !== 'iframe') {
                        container.innerHTML = '';
                    }
                    container.style.display = 'none';
                    break;
            }
        }
        ToggleView.page = page;
    })(ToggleView = exports.ToggleView || (exports.ToggleView = {}));
});

//# sourceMappingURL=dist/tools/toggle-view.js.map
