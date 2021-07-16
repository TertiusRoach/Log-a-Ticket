define(["require", "exports", "tools/events/index-header", "tools/events/login-overlay", "tools/events/log-overlay"], function (require, exports, index_header_1, login_overlay_1, log_overlay_1) {
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
                        if (selectClass === 'log-overlay') {
                            var closeButtonJQ = $('.log-overlay .close-button div');
                            var logButtonJQ = $('.log-overlay .log-button div');
                            var ticketSubjectJQ = $('.log-overlay .ticket-subject');
                            var ticketDescriptionJQ = $('.log-overlay .ticket-description');
                            var departmentFormJQ = $('.log-overlay .department-form');
                            var departmentSelectJQ = $('.log-overlay .department-select');
                            var coworkerFormJQ = $('.log-overlay .coworker-form');
                            var coworkerSelectJQ = $('.log-overlay .coworker-select');
                            var emailTextJQ = $('.log-overlay .email-text');
                            var numberTextJQ = $('.log-overlay .number-text');
                            var overlayCanvasJQ = $('.log-overlay .overlay-canvas');
                            var overlayBackgroundJQ = $('.log-overlay .overlay-background');
                            var ticketButtonJQ = $('#index-header .ticket-button div');
                            var headerSelectJQ = $('#index-header .employee-select');
                            var closeButtonJS = document.querySelector('.log-overlay .close-button div');
                            var logButtonJS = document.querySelector('.log-overlay .log-button div');
                            var ticketSubjectJS = document.querySelector('.log-overlay .ticket-subject');
                            var ticketDescriptionJS = document.querySelector('.log-overlay .ticket-description');
                            var departmentFormJS = document.querySelector('.log-overlay .department-form');
                            var departmentSelectJS = document.querySelector('.log-overlay .department-select');
                            var coworkerFormJS = document.querySelector('.log-overlay .coworker-form');
                            var coworkerSelectJS = document.querySelector('.log-overlay .coworker-select');
                            var emailTextJS = document.querySelector('.log-overlay .email-text');
                            var numberTextJS = document.querySelector('.log-overlay .number-text');
                            var overlayCanvasJS = document.querySelector('.log-overlay .overlay-canvas');
                            var overlayBackgroundJS = document.querySelector('.log-overlay .overlay-background');
                            var ticketButtonJS = document.querySelector('#index-header .ticket-button div');
                            var headerSelectJS = document.querySelector('#index-header .employee-select');
                            new log_overlay_1.LogOverlay.initiateEvents(closeButtonJQ, logButtonJQ, ticketSubjectJQ, ticketDescriptionJQ, departmentFormJQ, departmentSelectJQ, coworkerFormJQ, coworkerSelectJQ, emailTextJQ, numberTextJQ, overlayCanvasJQ, overlayBackgroundJQ, ticketButtonJQ, headerSelectJQ, closeButtonJS, logButtonJS, ticketSubjectJS, ticketDescriptionJS, departmentFormJS, departmentSelectJS, coworkerFormJS, coworkerSelectJS, emailTextJS, numberTextJS, overlayCanvasJS, overlayBackgroundJS, ticketButtonJS, headerSelectJS);
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
