define(["require", "exports", "tools/build-dropdown", "tools/sync-user"], function (require, exports, build_dropdown_1, sync_user_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexHeader = void 0;
    var IndexHeader;
    (function (IndexHeader) {
        function initiateEvents(ticketButtonJQ, loggedButtonJQ, manageButtonJQ, headerFormJQ, headerSelectJQ, loginFormJQ, loginSelectJQ, ticketButtonJS, loggedButtonJS, manageButtonJS, headerFormJS, headerSelectJS, loginFormJS, loginSelectJS) {
            loginFormJQ.on('click', function () {
                if (headerSelectJS.value === 'pick-employee') {
                    build_dropdown_1.BuildDropdown.assemble(headerSelectJS, 'employees');
                }
            });
            loginSelectJQ.on('change', function () {
                sync_user_1.SyncUser.toHeader(loginSelectJS, headerSelectJS);
            });
        }
        IndexHeader.initiateEvents = initiateEvents;
    })(IndexHeader = exports.IndexHeader || (exports.IndexHeader = {}));
});

//# sourceMappingURL=dist/tools/events/index-header.js.map
