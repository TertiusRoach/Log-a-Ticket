define(["require", "exports", "tools/get-pages"], function (require, exports, get_pages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TicketSystem = void 0;
    var TicketSystem;
    (function (TicketSystem) {
        function start() {
            var filename = location.href.split('/')[5];
            get_pages_1.GetPage.forA(filename);
        }
        TicketSystem.start = start;
    })(TicketSystem = exports.TicketSystem || (exports.TicketSystem = {}));
});

//# sourceMappingURL=dist/index.js.map
