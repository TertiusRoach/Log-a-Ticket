define(["require", "exports", "tools/events/login-overlay", "tools/events/index-header"], function (require, exports, login_overlay_1, index_header_1) {
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
                            var ticketButtonJQ = $('#index-header .ticket-button div');
                            var loggedButtonJQ = $('#index-header .logged-button div');
                            var manageButtonJQ = $('#index-header .manage-button div');
                            var headerFormJQ = $('#index-header .employee-form');
                            var headerSelectJQ = $('#index-header .employee-select');
                            var loginFormJQ = $('.login-overlay  .employee-form');
                            var loginSelectJQ = $('.login-overlay .employee-select');
                            var ticketButtonJS = document.querySelector('#index-header .ticket-button div');
                            var loggedButtonJS = document.querySelector('#index-header .logged-button div');
                            var manageButtonJS = document.querySelector('#index-header .manage-button div');
                            var headerFormJS = document.querySelector('#index-header .employee-form');
                            var headerSelectJS = document.querySelector('#index-header .employee-select');
                            var loginFormJS = document.querySelector('.login-overlay  .employee-form');
                            var loginSelectJS = document.querySelector('.login-overlay .employee-select');
                            new index_header_1.IndexHeader.initiateEvents(ticketButtonJQ, loggedButtonJQ, manageButtonJQ, headerFormJQ, headerSelectJQ, loginFormJQ, loginSelectJQ, ticketButtonJS, loggedButtonJS, manageButtonJS, headerFormJS, headerSelectJS, loginFormJS, loginSelectJS);
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
