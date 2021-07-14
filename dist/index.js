define(["require", "exports", "tools/get-page"], function (require, exports, get_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TicketSystem = void 0;
    var TicketSystem;
    (function (TicketSystem) {
        function startProgram() {
            var filename = location.href.split('/')[5];
            get_page_1.GetPage.forHTML(filename, 'index-overlay', 'login-overlay');
            get_page_1.GetPage.forHTML(filename, 'index-header', 'default-header');
        }
        TicketSystem.startProgram = startProgram;
    })(TicketSystem = exports.TicketSystem || (exports.TicketSystem = {}));
});

//# sourceMappingURL=dist/index.js.map
