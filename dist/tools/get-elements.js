define(["require", "exports", "tools/events/login-overlay", "tools/events/index-header"], function (require, exports, login_overlay_1, index_header_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetElements = void 0;
    var GetElements;
    (function (GetElements) {
        GetElements.indexBodyJQ = $('#index-body');
        GetElements.IndexHeaderJQ = $('#index-header');
        GetElements.indexIframeJQ = $('#index-iframe');
        GetElements.indexMainJQ = $('#index-main');
        GetElements.indexOverlayJQ = $('#index-overlay');
        GetElements.indexBodyJS = document.querySelector('#index-body');
        GetElements.IndexHeaderJS = document.querySelector('#index-header');
        GetElements.indexIframeJS = document.querySelector('#index-iframe');
        GetElements.indexMainJS = document.querySelector('#index-main');
        GetElements.indexOverlayJS = document.querySelector('#index-overlay');
        var initiateCode = (function () {
            function initiateCode(activeHTML, selectClass) {
                switch (activeHTML) {
                    case 'index.html':
                        if (selectClass === 'default-header') {
                            var ticketButtonJQ = $('#index-header .ticket-button div');
                            var loggedButtonJQ = $('#index-header .logged-button div');
                            var manageButtonJQ = $('#index-header .manage-button div');
                            var headerFormJQ = $('#index-header .employee-form');
                            var headerSelectJQ = $('#index-header .employee-select');
                            var loginFormJQ = $('.login-overlay  .employee-form');
                            var loginSelectJQ = $('.login-overlay .employee-select');
                            var loginButtonJQ = $('.login-overlay  .login-button div');
                            var ticketButtonJS = document.querySelector('#index-header .ticket-button div');
                            var loggedButtonJS = document.querySelector('#index-header .logged-button div');
                            var manageButtonJS = document.querySelector('#index-header .manage-button div');
                            var headerFormJS = document.querySelector('#index-header .employee-form');
                            var headerSelectJS = document.querySelector('#index-header .employee-select');
                            var loginFormJS = document.querySelector('.login-overlay  .employee-form');
                            var loginSelectJS = document.querySelector('.login-overlay .employee-select');
                            var loginButtonJS = document.querySelector('.login-overlay  .login-button div');
                            new index_header_1.IndexHeader.initiateEvents(ticketButtonJQ, loggedButtonJQ, manageButtonJQ, headerFormJQ, headerSelectJQ, loginFormJQ, loginSelectJQ, loginButtonJQ, ticketButtonJS, loggedButtonJS, manageButtonJS, headerFormJS, headerSelectJS, loginFormJS, loginSelectJS, loginButtonJS);
                        }
                        if (selectClass === 'login-overlay') {
                            var loginLogoJQ = $('.login-overlay .login-logo');
                            var employeeFormJQ = $('.login-overlay  .employee-form');
                            var employeeSelectJQ = $('.login-overlay  .employee-select');
                            var informationTextJQ = $('.login-overlay  .information-text');
                            var loginButtonJQ = $('.login-overlay  .login-button div');
                            var overlayCanvasJQ = $('.login-overlay  .overlay-canvas');
                            var overlayBackgroundJQ = $('.login-overlay  .overlay-background');
                            var loggedButtonJQ = $('#index-header .logged-button div');
                            var manageButtonJQ = $('#index-header .manage-button div');
                            var headerSelectJQ = $('#index-header .employee-select');
                            var loginLogoJS = document.querySelector('.login-overlay  .login-logo');
                            var employeeFormJS = document.querySelector('.login-overlay  .employee-form');
                            var employeeSelectJS = document.querySelector('.login-overlay  .employee-select');
                            var informationTextJS = document.querySelector('.login-overlay  .information-text');
                            var loginButtonJS = document.querySelector('.login-overlay  .login-button div');
                            var overlayCanvasJS = document.querySelector('.login-overlay  .overlay-canvas');
                            var overlayBackgroundJS = document.querySelector('.login-overlay  .overlay-background');
                            var loggedButtonJS = document.querySelector('#index-header .logged-button div');
                            var manageButtonJS = document.querySelector('#index-header .manage-button div');
                            var headerSelectJS = document.querySelector('#index-header .employee-select');
                            new login_overlay_1.LoginOverlay.initiateEvents(loginLogoJQ, employeeFormJQ, employeeSelectJQ, informationTextJQ, loginButtonJQ, overlayCanvasJQ, overlayBackgroundJQ, loggedButtonJQ, manageButtonJQ, headerSelectJQ, loginLogoJS, employeeFormJS, employeeSelectJS, informationTextJS, loginButtonJS, overlayCanvasJS, overlayBackgroundJS, loggedButtonJS, manageButtonJS, headerSelectJS);
                        }
                        break;
                    case 'tickets.html':
                        if (selectClass === 'default-header') {
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
