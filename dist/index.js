define(["require", "exports", "tools/dist-pages"], function (require, exports, dist_pages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ticketSystem = void 0;
    var ticketSystem;
    (function (ticketSystem) {
        function Start() {
            var filename = location.href.split('/')[5];
            dist_pages_1.DistPages.getPage(filename);
        }
        ticketSystem.Start = Start;
    })(ticketSystem = exports.ticketSystem || (exports.ticketSystem = {}));
});

//# sourceMappingURL=dist/index.js.map
