define(["require", "exports", "tools/build-body"], function (require, exports, build_body_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetPage = void 0;
    var GetPage;
    (function (GetPage) {
        function forHTML(filename) {
            var page = filename.split('.')[0];
            switch (page) {
                case 'index':
                    new build_body_1.BuildBody.forID('index-body');
                    break;
                case 'tickets':
                    new build_body_1.BuildBody.forID('tickets-body');
                    break;
            }
        }
        GetPage.forHTML = forHTML;
    })(GetPage = exports.GetPage || (exports.GetPage = {}));
});

//# sourceMappingURL=dist/tools/get-page.js.map
