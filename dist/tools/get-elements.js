define(["require", "exports", "./containers/index-body", "./containers/index-overlay", "./containers/tickets-body", "./containers/tickets-header", "./containers/tickets-main"], function (require, exports, index_body_1, index_overlay_1, tickets_body_1, tickets_header_1, tickets_main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetElements = void 0;
    var GetElements;
    (function (GetElements) {
        function fromHTML(page) {
            switch (page + "-body") {
                case 'index-body':
                    var indexBody = $('#index-body');
                    var indexHeader = $('#index-header');
                    var indexIframe = $('#index-iframe');
                    var indexMain = $('#index-main');
                    var indexOverlay = $('#index-overlay');
                    index_body_1.IndexBody.pushElements(indexBody, indexHeader, indexIframe, indexMain, indexOverlay);
                    var logButton = $('#index-header .ticket-button div');
                    var loggedButton = $('#index-header .logged-button div');
                    var manageButton = $('#index-header .manage-button div');
                    var headerForm = $('#index-header .employee-form');
                    var headerSelect = $('#index-header .employee-select');
                    var iframeContainer = $('#index-iframe iframe');
                    var mainElements = function (classname) {
                        switch (classname) {
                            case 'main-logged':
                                break;
                            case 'main-manage':
                                break;
                        }
                    };
                    mainElements('main-logged');
                    var overlayElements = function (classname) {
                        switch (classname) {
                            case 'overlay-login':
                                var loginLogo = $('.login-overlay .login-logo');
                                var employeeForm = $('.login-overlay .employee-form');
                                var employeeSelect = $('.login-overlay .employee-select');
                                var informationText = $('.login-overlay .information-text');
                                var loginButton = $('.login-overlay .login-button div');
                                var overlayCanvas = $('.login-overlay .overlay-canvas');
                                var overlayBackground = $('.login-overlay .overlay-background');
                                new index_overlay_1.IndexOverlay.loginPage(loginLogo, employeeForm, employeeSelect, informationText, loginButton, overlayCanvas, overlayBackground);
                                break;
                            case 'overlay-log':
                                break;
                        }
                    };
                    overlayElements('overlay-login');
                    break;
                case 'tickets-body':
                    var ticketsBody = $('#tickets-body');
                    var ticketsHeader = $('#tickets-header');
                    var ticketsMain = $('#tickets-main');
                    new tickets_body_1.TicketsBody.pushElements(ticketsBody, ticketsHeader, ticketsMain);
                    var loggedHeader = $('.logged-header');
                    var manageHeader = $('.manage-header');
                    var dateButton = $('.date-button div');
                    var subjectButton = $('.subject-button div');
                    var recipientButton = $('.recipient-button div');
                    new tickets_header_1.TicketsHeader.pushElements(loggedHeader, manageHeader, dateButton, subjectButton, recipientButton);
                    var loggedMain = $('.logged-main');
                    var manageMain = $('.manage-main');
                    var tabPending = $('.tab-pending');
                    var tabAssigned = $('.tab-assigned');
                    var tabResolved = $('.tab-resolved');
                    var tabDeleted = $('.tab-deleted');
                    var tabEverything = $('.tab-everything');
                    new tickets_main_1.TicketsMain.pushElements(loggedMain, manageMain, tabPending, tabAssigned, tabResolved, tabDeleted, tabEverything);
                    break;
            }
        }
        GetElements.fromHTML = fromHTML;
    })(GetElements = exports.GetElements || (exports.GetElements = {}));
});

//# sourceMappingURL=dist/tools/get-elements.js.map
