define(["require", "exports", "tools/get-elements"], function (require, exports, get_elements_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetPage = void 0;
    var GetPage;
    (function (GetPage) {
        function forHTML(activeHTML, selectId, selectPage) {
            var container = $("#" + selectId);
            $(container)
                .removeClass("default-" + selectPage.split('-')[1])
                .addClass("" + selectPage);
            switch (activeHTML) {
                case 'index.html':
                    $.get(selectPage + ".html", function (data) {
                        $(container).html(data);
                        new get_elements_1.GetElements.initiateCode(activeHTML, selectPage);
                    });
                    break;
                case 'tickets.html':
                    $.get(selectPage + ".html", function (data) {
                        $(container).html(data);
                        new get_elements_1.GetElements.initiateCode(activeHTML, selectPage);
                    });
                    break;
            }
        }
        GetPage.forHTML = forHTML;
    })(GetPage = exports.GetPage || (exports.GetPage = {}));
});

//# sourceMappingURL=dist/tools/get-page.js.map
