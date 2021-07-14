define(["require", "exports", "tools/events/login-overlay"], function (require, exports, login_overlay_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetElements = void 0;
    var GetElements;
    (function (GetElements) {
        var initiateCode = (function () {
            function initiateCode(activeHTML, selectPage) {
                switch (activeHTML) {
                    case 'index.html':
                        if (selectPage === 'default-header') {
                            var ticketButtonJQ = $('.ticket-button div');
                            var loggedButtonJQ = $('.logged-button div');
                            var manageButtonJQ = $('.manage-button div');
                            var employeeFormJQ = $('.employee-form');
                            var employeeSelectJQ = $('.employee-select');
                            var ticketButtonJS = document.querySelector('.ticket-button div');
                            var loggedButtonJS = document.querySelector('.logged-button div');
                            var manageButtonJS = document.querySelector('.manage-button div');
                            var employeeFormJS = document.querySelector('.employee-form');
                            var employeeSelectJS = document.querySelector('.employee-select');
                        }
                        if (selectPage === 'login-overlay') {
                            var loginLogoJQ = $('.login-overlay .login-logo');
                            var employeeFormJQ = $('.login-overlay  .employee-form');
                            var employeeSelectJQ = $('.login-overlay  .employee-select');
                            var informationTextJQ = $('.login-overlay  .information-text');
                            var loginButtonJQ = $('.login-overlay  .login-button div');
                            var overlayCanvasJQ = $('.login-overlay  .overlay-canvas');
                            var overlayBackgroundJQ = $('.login-overlay  .overlay-background');
                            var loginLogoJS = document.querySelector('.login-overlay  .login-logo');
                            var employeeFormJS = document.querySelector('.login-overlay  .employee-form');
                            var employeeSelectJS = document.querySelector('.login-overlay  .employee-select');
                            var informationTextJS = document.querySelector('.login-overlay  .information-text');
                            var loginButtonJS = document.querySelector('.login-overlay  .login-button div');
                            var overlayCanvasJS = document.querySelector('.login-overlay  .overlay-canvas');
                            var overlayBackgroundJS = document.querySelector('.login-overlay  .overlay-background');
                            new login_overlay_1.LoginOverlay.initiateEvents(loginLogoJQ, employeeFormJQ, employeeSelectJQ, informationTextJQ, loginButtonJQ, overlayCanvasJQ, overlayBackgroundJQ, loginLogoJS, employeeFormJS, employeeSelectJS, informationTextJS, loginButtonJS, overlayCanvasJS, overlayBackgroundJS);
                        }
                        break;
                    case 'tickets.html':
                        if (selectPage === 'default-header') {
                        }
                        break;
                }
            }
            return initiateCode;
        }());
        GetElements.initiateCode = initiateCode;
    })(GetElements = exports.GetElements || (exports.GetElements = {}));
});

//# sourceMappingURL=dist/tools/get-elements.js.map
