define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SyncUser = void 0;
    var SyncUser;
    (function (SyncUser) {
        function toHeader(reference, connect) {
            for (var i = 0; i < reference.length; i++) {
                if (reference.value === connect[i].value) {
                    connect[i].selected = true;
                }
            }
        }
        SyncUser.toHeader = toHeader;
    })(SyncUser = exports.SyncUser || (exports.SyncUser = {}));
});

//# sourceMappingURL=dist/tools/sync-user.js.map
