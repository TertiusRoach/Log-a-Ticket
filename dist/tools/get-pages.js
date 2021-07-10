define(["require", "exports", "tools/get-elements"], function (require, exports, get_elements_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetPage = void 0;
    var GetPage;
    (function (GetPage) {
        function forA(filename) {
            var pagename = filename.split('.')[0];
            switch (pagename) {
                case 'index':
                    get_elements_1.GetElements.fromHTML(pagename);
                    break;
                case 'tickets':
                    get_elements_1.GetElements.fromHTML(pagename);
                    break;
            }
        }
        GetPage.forA = forA;
    })(GetPage = exports.GetPage || (exports.GetPage = {}));
});

//# sourceMappingURL=dist/tools/get-pages.js.map
