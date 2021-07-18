define(["require", "exports", "tools/get-elements", "tools/convert-string"], function (require, exports, get_elements_1, convert_string_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetPage = void 0;
    var GetPage;
    (function (GetPage) {
        function forHTML(selectId, selectClass) {
            var container = document.getElementById("" + selectId);
            this.deleteClass(container, selectClass);
            $(container).addClass("" + selectClass);
            switch (checkNetwork()) {
                case 'index.html':
                    if (convert_string_1.ConvertString.fetch('former', '-', selectClass) === 'default') {
                        $.get(selectId + ".html", function (data) {
                            $(container).html(data);
                            new get_elements_1.GetElements.initiateCode('index.html', selectClass);
                        });
                    }
                    else {
                        $.get(selectClass + ".html", function (data) {
                            $(container).html(data);
                            new get_elements_1.GetElements.initiateCode('index.html', selectClass);
                        });
                    }
                    break;
                case 'tickets.html':
                    if (convert_string_1.ConvertString.fetch('former', '-', selectClass) === 'default') {
                        $.get(selectId + ".html", function (data) {
                            $(container).html(data);
                            new get_elements_1.GetElements.initiateCode('tickets.html', selectClass);
                        });
                    }
                    else {
                        $.get(selectClass + ".html", function (data) {
                            $(container).html(data);
                            new get_elements_1.GetElements.initiateCode('tickets.html', selectClass);
                        });
                    }
                    break;
            }
        }
        GetPage.forHTML = forHTML;
        function checkNetwork() {
            var filename;
            switch (location.href.split('/')[0]) {
                case 'https:':
                    filename = location.href.split('/')[6];
                    break;
                case 'http:':
                    filename = location.href.split('/')[5];
                    break;
            }
            return filename;
        }
        GetPage.checkNetwork = checkNetwork;
        function deleteClass(container, selectClass) {
            $(container)
                .removeClass("default-" + selectClass.split('-')[1])
                .removeClass('logged-main')
                .removeClass('manage-main')
                .removeClass('login-overlay')
                .removeClass('log-overlay');
        }
        GetPage.deleteClass = deleteClass;
    })(GetPage = exports.GetPage || (exports.GetPage = {}));
});

//# sourceMappingURL=dist/tools/get-page.js.map
