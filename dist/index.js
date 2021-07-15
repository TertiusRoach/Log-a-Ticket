define(["require", "exports", "tools/get-page"], function (require, exports, get_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TicketSystem = void 0;
    var TicketSystem;
    (function (TicketSystem) {
        function startProgram() {
            get_page_1.GetPage.forHTML('index-header', 'default-header');
            get_page_1.GetPage.forHTML('index-overlay', 'login-overlay');
        }
        TicketSystem.startProgram = startProgram;
    })(TicketSystem = exports.TicketSystem || (exports.TicketSystem = {}));
});

//# sourceMappingURL=dist/index.js.map
