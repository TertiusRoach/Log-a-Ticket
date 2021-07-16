define(["require", "exports", "tools/convert-string"], function (require, exports, convert_string_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToggleView = void 0;
    var ToggleView;
    (function (ToggleView) {
        function page(action, containerId) {
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
                        case 'overlay':
                            var overlay = document.getElementById(containerId);
                            overlay.style.display = 'grid';
                            break;
                    }
                    break;
                case 'hide':
                    if (convert_string_1.ConvertString.fetch('latter', containerId) !== 'iframe') {
                        container.innerHTML = '';
                    }
                    container.style.display = 'none';
                    container.classList.remove("" + container.classList[0]);
                    switch (convert_string_1.ConvertString.fetch('latter', containerId)) {
                        case 'header':
                            container.classList.add('default-header');
                            break;
                        case 'iframe':
                            container.classList.add('default-iframe');
                            break;
                        case 'main':
                            container.classList.add('default-main');
                            break;
                        case 'overlay':
                            container.classList.add('default-overlay');
                            break;
                    }
                    break;
            }
        }
        ToggleView.page = page;
        function form(action, formClass) {
            switch (action) {
                case 'show':
                    formClass.style.display = 'flex';
                    break;
                case 'hide':
                    formClass.style.display = 'none';
                    break;
            }
        }
        ToggleView.form = form;
        function indexMain(action) {
            switch (action) {
                case 'show':
                    this.page('show', 'index-main');
                    this.page('show', 'index-iframe');
                    break;
                case 'hide':
                    this.page('hide', 'index-main');
                    this.page('hide', 'index-iframe');
                    break;
            }
        }
        ToggleView.indexMain = indexMain;
    })(ToggleView = exports.ToggleView || (exports.ToggleView = {}));
});

//# sourceMappingURL=dist/tools/toggle-view.js.map
