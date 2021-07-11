define(["require", "exports", "tools/get-page"], function (require, exports, get_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tools = exports.TicketSystem = void 0;
    var TicketSystem;
    (function (TicketSystem) {
        function startProgram() {
            var filename = location.href.split('/')[5];
            get_page_1.GetPage.forHTML(filename);
        }
        TicketSystem.startProgram = startProgram;
    })(TicketSystem = exports.TicketSystem || (exports.TicketSystem = {}));
    var Tools;
    (function (Tools) {
        function clearPage(id) {
            var container = document.getElementById(id);
            container.innerHTML = '';
        }
        Tools.clearPage = clearPage;
        function getPage(id) {
            var element = document.getElementById(id);
            var filename = id + ".html";
            $.get(filename, function (data) {
                $(element).html(data);
            });
        }
        Tools.getPage = getPage;
    })(Tools = exports.Tools || (exports.Tools = {}));
});

//# sourceMappingURL=dist/index.js.map
