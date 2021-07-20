define(["require", "exports", "tools/events/index-header", "tools/events/logged-main", "tools/events/manage-main", "tools/events/login-overlay", "tools/events/log-overlay", "tools/events/tickets-header", "tools/events/tickets-main"], function (require, exports, index_header_1, logged_main_1, manage_main_1, login_overlay_1, log_overlay_1, tickets_header_1, tickets_main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetContainer = exports.GetElements = void 0;
    var GetElements;
    (function (GetElements) {
        var initiateCode = (function () {
            function initiateCode(activeHTML, selectClass) {
                switch (activeHTML) {
                    case 'index.html':
                        var indexHeader = 'default-header';
                        var loggedMain = 'logged-main';
                        var manageMain = 'manage-main';
                        var employeeMain = 'employee-main';
                        var coworkerMain = 'coworker-main';
                        var loginOverlay = 'login-overlay';
                        var logOverlay = 'log-overlay';
                        if (indexHeader === selectClass) {
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
                        if ('default-iframe' === selectClass) {
                        }
                        if (loggedMain === selectClass) {
                            var pendingTabJQ = $('.logged-main #pending-tab');
                            var pendingTextJQ = $('.logged-main #pending-tab h3');
                            var assignedTabJQ = $('.logged-main #assigned-tab');
                            var assignedTextJQ = $('.logged-main #assigned-tab h3');
                            var resolvedTabJQ = $('.logged-main #resolved-tab');
                            var resolvedTextJQ = $('.logged-main #resolved-tab h3');
                            var deletedTabJQ = $('.logged-main #deleted-tab');
                            var deletedTextJQ = $('.logged-main #deleted-tab h3');
                            var everythingTabJQ = $('.logged-main #everything-tab');
                            var everythingTextJQ = $('.logged-main #everything-tab h3');
                            var activeTabJQ = $('.logged-main .active-tab');
                            var defaultTabsJQ = $('.logged-main .default-tab');
                            var allTabsJQ = $('.logged-main [id*="-tab"');
                            var notificationContainerJQ = $('.logged-main .notification');
                            var notificationTextJQ = $('.logged-main .notification .badge');
                            var pendingTabJS = document.querySelector('.logged-main #pending-tab');
                            var pendingTextJS = document.querySelector('.logged-main #pending-tab h3');
                            var assignedTabJS = document.querySelector('.logged-main #assigned-tab');
                            var assignedTextJS = document.querySelector('.logged-main #assigned-tab h3');
                            var resolvedTabJS = document.querySelector('.logged-main #resolved-tab');
                            var resolvedTextJS = document.querySelector('.logged-main #resolved-tab h3');
                            var deletedTabJS = document.querySelector('.logged-main #deleted-tab');
                            var deletedTextJS = document.querySelector('.logged-main #deleted-tab h3');
                            var everythingTabJS = document.querySelector('.logged-main #everything-tab');
                            var everythingTextJS = document.querySelector('.logged-main #everything-tab h3');
                            var activeTabJS = document.querySelector('.logged-main .active-tab');
                            var defaultTabsJS = document.querySelectorAll('.logged-main .default-tab');
                            var allTabsJS = document.querySelectorAll('.logged-main [id*="-tab"');
                            var notificationContainerJS = document.querySelector('.logged-main .notification');
                            var notificationTextJS = document.querySelector('.logged-main .notification .badge');
                            new logged_main_1.LoggedMain.initiateEvents(pendingTabJQ, pendingTextJQ, assignedTabJQ, assignedTextJQ, resolvedTabJQ, resolvedTextJQ, deletedTabJQ, deletedTextJQ, everythingTabJQ, everythingTextJQ, activeTabJQ, defaultTabsJQ, allTabsJQ, notificationContainerJQ, notificationTextJQ, pendingTabJS, pendingTextJS, assignedTabJS, assignedTextJS, resolvedTabJS, resolvedTextJS, deletedTabJS, deletedTextJS, everythingTabJS, everythingTextJS, activeTabJS, defaultTabsJS, allTabsJS, notificationContainerJS, notificationTextJS);
                        }
                        if (manageMain === selectClass) {
                            var pendingTabJQ = $('.manage-main #pending-tab');
                            var pendingTextJQ = $('.manage-main #pending-tab h3');
                            var deletedTabJQ = $('.manage-main #deleted-tab');
                            var deletedTextJQ = $('.manage-main #deleted-tab h3');
                            var everythingTabJQ = $('.manage-main #everything-tab');
                            var everythingTextJQ = $('.manage-main #everything-tab h3');
                            var activeTabJQ = $('.manage-main .active-tab');
                            var defaultTabsJQ = $('.manage-main .default-tab');
                            var allTabsJQ = $('.manage-main [id*="-tab"');
                            var notificationContainerJQ = $('.manage-main .notification');
                            var notificationTextJQ = $('.manage-main .notification .badge');
                            var pendingTabJS = document.querySelector('.manage-main #pending-tab');
                            var pendingTextJS = document.querySelector('.manage-main #pending-tab h3');
                            var deletedTabJS = document.querySelector('.manage-main #deleted-tab');
                            var deletedTextJS = document.querySelector('.manage-main #deleted-tab h3');
                            var everythingTabJS = document.querySelector('.manage-main #everything-tab');
                            var everythingTextJS = document.querySelector('.manage-main #everything-tab h3');
                            var activeTabJS = document.querySelector('.manage-main .active-tab');
                            var defaultTabsJS = document.querySelectorAll('.manage-main .default-tab');
                            var allTabsJS = document.querySelectorAll('.manage-main [id*="-tab"');
                            var notificationContainerJS = document.querySelector('.manage-main .notification');
                            var notificationTextJS = document.querySelector('.manage-main .notification .badge');
                            new manage_main_1.ManageMain.initiateEvents(pendingTabJQ, pendingTextJQ, deletedTabJQ, deletedTextJQ, everythingTabJQ, everythingTextJQ, activeTabJQ, defaultTabsJQ, allTabsJQ, notificationContainerJQ, notificationTextJQ, pendingTabJS, pendingTextJS, deletedTabJS, deletedTextJS, everythingTabJS, everythingTextJS, activeTabJS, defaultTabsJS, allTabsJS, notificationContainerJS, notificationTextJS);
                        }
                        if (employeeMain === selectClass) {
                        }
                        if (coworkerMain === selectClass) {
                        }
                        if (loginOverlay === selectClass) {
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
                        if (logOverlay === selectClass) {
                            var overlayHeaderJQ = $('.log-overlay .overlay-header');
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
                            var overlayHeaderJS = document.querySelector('.log-overlay .overlay-header');
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
                            new log_overlay_1.LogOverlay.initiateEvents(overlayHeaderJQ, closeButtonJQ, logButtonJQ, ticketSubjectJQ, ticketDescriptionJQ, departmentFormJQ, departmentSelectJQ, coworkerFormJQ, coworkerSelectJQ, emailTextJQ, numberTextJQ, overlayCanvasJQ, overlayBackgroundJQ, ticketButtonJQ, headerSelectJQ, overlayHeaderJS, closeButtonJS, logButtonJS, ticketSubjectJS, ticketDescriptionJS, departmentFormJS, departmentSelectJS, coworkerFormJS, coworkerSelectJS, emailTextJS, numberTextJS, overlayCanvasJS, overlayBackgroundJS, ticketButtonJS, headerSelectJS);
                        }
                        break;
                    case 'tickets.html':
                        var ticketsHeader = 'default-header';
                        var ticketsMain = 'login-overlay';
                        if (ticketsHeader === selectClass) {
                            var loggedHeaderJQ = $('#tickets-body .logged-header');
                            var manageHeaderJQ = $('#tickets-body .manage-header');
                            var dateAscendingJQ = $('#tickets-header .date-button .ascending-order');
                            var dateDescendingJQ = $('#tickets-header .date-button .descending-order');
                            var subjectButtonJQ = $('#tickets-header .subject-button');
                            var recipientAscendingJQ = $('#tickets-header .recipient-button .ascending-order');
                            var recipientDescendingJQ = $('#tickets-header .recipient-button .descending-order');
                            var loggedHeaderJS = document.querySelector('#tickets-body .logged-header');
                            var manageHeaderJS = document.querySelector('#tickets-body .manage-header');
                            var dateAscendingJS = document.querySelector('#tickets-header .date-button .ascending-order');
                            var dateDescendingJS = document.querySelector('#tickets-header .date-button .descending-order');
                            var subjectButtonJS = document.querySelector('#tickets-header .subject-button');
                            var recipientAscendingJS = document.querySelector('#tickets-header .recipient-button .ascending-order');
                            var recipientDescendingJS = document.querySelector('#tickets-header .recipient-button .descending-order');
                            new tickets_header_1.TicketsHeader.initiateEvents(loggedHeaderJQ, manageHeaderJQ, dateAscendingJQ, dateDescendingJQ, subjectButtonJQ, recipientAscendingJQ, recipientDescendingJQ, loggedHeaderJS, manageHeaderJS, dateAscendingJS, dateDescendingJS, subjectButtonJS, recipientAscendingJS, recipientDescendingJS);
                        }
                        if (ticketsMain === selectClass) {
                            var tabPendingJQ = $('#tickets-body .tab-pending');
                            var tabAssignedJQ = $('#tickets-body .tab-assigned');
                            var tabResolvedJQ = $('#tickets-body .tab-resolved');
                            var tabDeletedJQ = $('#tickets-body .tab-deleted');
                            var tabEverythingJQ = $('#tickets-body .tab-everything');
                            var loggedMainJQ = $('#tickets-body .logged-main');
                            var manageMainJQ = $('#tickets-body .manage-main');
                            var ticketsJQ = $('#tickets-main article');
                            var pendingTicketsJQ = $('#tickets-main .pending');
                            var assignedTicketsJQ = $('#tickets-main .assigned');
                            var resolvedTicketsJQ = $('#tickets-main .resolved');
                            var deletedTicketsJQ = $('#tickets-main .deleted');
                            var shortDateJQ = $('#tickets-main article .shortdate-text');
                            var longDateJQ = $('#tickets-main article .reference-container .longdate-text');
                            var senderJQ = $('#tickets-main article .recipient-container .sender-text');
                            var receiverJQ = $('#tickets-main article .recipient-container .receiver-text');
                            var assignedDateJQ = $('#tickets-main article .reference-container .assigned-date');
                            var resolvedDateJQ = $('#tickets-main article .reference-container .resolved-date');
                            var deletedDateJQ = $('#tickets-main article .reference-container .deleted-date');
                            var deletedNoteJQ = $('#tickets-main article .reference-container .deleted-note');
                            var subjectTextJQ = $('#tickets-main article .subject-text');
                            var descriptionTextJQ = $('#tickets-main article .reference-container .description-text');
                            var recipientContainerJQ = $('#tickets-main article .recipient-container');
                            var referenceContainerJQ = $('#tickets-main article .reference-container');
                            var loggedButtonJQ = $('#index-header .logged-button div');
                            var manageButtonJQ = $('#index-header .manage-button div');
                            var headerFormJQ = $('#index-header .employee-form');
                            var headerSelectJQ = $('#index-header .employee-select');
                            var tabPendingJS = document.querySelector('#tickets-body .tab-pending');
                            var tabAssignedJS = document.querySelector('#tickets-body .tab-assigned');
                            var tabResolvedJS = document.querySelector('#tickets-body .tab-resolved');
                            var tabDeletedJS = document.querySelector('#tickets-body .tab-deleted');
                            var tabEverythingJS = document.querySelector('#tickets-body .tab-everything');
                            var loggedMainJS = document.querySelector('#tickets-body .logged-main');
                            var manageMainJS = document.querySelector('#tickets-body .manage-main');
                            var ticketsJS = document.querySelector('#tickets-main article');
                            var pendingTicketsJS = document.querySelector('#tickets-main .pending');
                            var assignedTicketsJS = document.querySelector('#tickets-main .assigned');
                            var resolvedTicketsJS = document.querySelector('#tickets-main .resolved');
                            var deletedTicketsJS = document.querySelector('#tickets-main .deleted');
                            var shortDateJS = document.querySelector('#tickets-main article .shortdate-text');
                            var longDateJS = document.querySelector('#tickets-main article .reference-container .longdate-text');
                            var senderJS = document.querySelector('#tickets-main article .recipient-container .sender-text');
                            var receiverJS = document.querySelector('#tickets-main article .recipient-container .receiver-text');
                            var assignedDateJS = document.querySelector('#tickets-main article .reference-container .assigned-date');
                            var resolvedDateJS = document.querySelector('#tickets-main article .reference-container .resolved-date');
                            var deletedDateJS = document.querySelector('#tickets-main article .reference-container .deleted-date');
                            var deletedNoteJS = document.querySelector('#tickets-main article .reference-container .deleted-note');
                            var subjectTextJS = document.querySelector('#tickets-main article .subject-text');
                            var descriptionTextJS = document.querySelector('#tickets-main article .reference-container .description-text');
                            var recipientContainerJS = document.querySelector('#tickets-main article .recipient-container');
                            var referenceContainerJS = document.querySelector('#tickets-main article .reference-container');
                            var loggedButtonJS = document.querySelector('#index-header .logged-button div');
                            var manageButtonJS = document.querySelector('#index-header .manage-button div');
                            var headerFormJS = document.querySelector('#index-header .employee-form');
                            var headerSelectJS = document.querySelector('#index-header .employee-select');
                            new tickets_main_1.TicketsMain.initiateEvents(tabPendingJQ, tabAssignedJQ, tabResolvedJQ, tabDeletedJQ, tabEverythingJQ, loggedMainJQ, manageMainJQ, ticketsJQ, pendingTicketsJQ, assignedTicketsJQ, resolvedTicketsJQ, deletedTicketsJQ, shortDateJQ, longDateJQ, senderJQ, receiverJQ, assignedDateJQ, resolvedDateJQ, deletedDateJQ, deletedNoteJQ, subjectTextJQ, descriptionTextJQ, recipientContainerJQ, referenceContainerJQ, tabPendingJS, tabAssignedJS, tabResolvedJS, tabDeletedJS, tabEverythingJS, loggedMainJS, manageMainJS, ticketsJS, pendingTicketsJS, assignedTicketsJS, resolvedTicketsJS, deletedTicketsJS, shortDateJS, longDateJS, senderJS, receiverJS, assignedDateJS, resolvedDateJS, deletedDateJS, deletedNoteJS, subjectTextJS, descriptionTextJS, recipientContainerJS, referenceContainerJS);
                        }
                        break;
                }
            }
            return initiateCode;
        }());
        GetElements.initiateCode = initiateCode;
    })(GetElements = exports.GetElements || (exports.GetElements = {}));
    var GetContainer;
    (function (GetContainer) {
        GetContainer.indexBodyJQ = $('#index-body');
        GetContainer.indexHeaderJQ = $('#index-header');
        GetContainer.indexIframeJQ = $('#index-iframe iframe');
        GetContainer.indexMainJQ = $('#index-main');
        GetContainer.indexOverlayJQ = $('#index-overlay');
        GetContainer.indexBodyJS = document.querySelector('#index-body');
        GetContainer.indexHeaderJS = document.querySelector('#index-header');
        GetContainer.indexIframeJS = document.querySelector('#index-iframe iframe');
        GetContainer.indexMainJS = document.querySelector('#index-main');
        GetContainer.indexOverlayJS = document.querySelector('#index-overlay');
        GetContainer.ticketsBodyJQ = GetContainer.indexIframeJQ.contents().children();
    })(GetContainer = exports.GetContainer || (exports.GetContainer = {}));
});

//# sourceMappingURL=dist/tools/get-elements.js.map
