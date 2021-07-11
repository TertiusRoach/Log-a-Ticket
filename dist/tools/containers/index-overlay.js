define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexOverlay = void 0;
    var IndexOverlay;
    (function (IndexOverlay) {
        var loginPage = (function () {
            function loginPage(loginLogo, employeeForm, employeeSelect, informationText, loginButton, overlayCanvas, overlayBackground) {
                var logo = loginLogo;
                var eForm = employeeForm;
                var eSelect = employeeSelect;
                var text = informationText;
                var button = loginButton;
                var canvas = overlayCanvas;
                var background = overlayBackground;
                button.on('click', function () {
                });
            }
            return loginPage;
        }());
        IndexOverlay.loginPage = loginPage;
        var overlayLog = (function () {
            function overlayLog() {
            }
            return overlayLog;
        }());
        IndexOverlay.overlayLog = overlayLog;
    })(IndexOverlay = exports.IndexOverlay || (exports.IndexOverlay = {}));
});

//# sourceMappingURL=dist/tools/containers/index-overlay.js.map
