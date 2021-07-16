define(["require", "exports", "tools/replace-dropdown", "tools/sync-user", "tools/style-element", "tools/get-page", "tools/toggle-view"], function (require, exports, replace_dropdown_1, sync_user_1, style_element_1, get_page_1, toggle_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexHeader = void 0;
    var IndexHeader;
    (function (IndexHeader) {
        function initiateEvents(ticketButtonJQ, loggedButtonJQ, manageButtonJQ, headerFormJQ, headerSelectJQ, loginFormJQ, loginSelectJQ, loginButtonJQ, ticketButtonJS, loggedButtonJS, manageButtonJS, headerFormJS, headerSelectJS, loginFormJS, loginSelectJS, loginButtonJS) {
            headerSelectJQ.on('change', function () {
                toggle_view_1.ToggleView.indexMain('hide');
                sync_user_1.SyncUser.toMain(headerSelectJS, loggedButtonJS, manageButtonJS);
                toggle_view_1.ToggleView.indexMain('show');
            });
            loginSelectJQ.on('click', function () {
                if (headerSelectJS.value === 'pick-employee') {
                    replace_dropdown_1.ReplaceDropdown.assemble('employees', headerSelectJS);
                }
            });
            loginFormJQ.on('change', function () {
                sync_user_1.SyncUser.toMain(loginSelectJS, loggedButtonJS, manageButtonJS);
            });
            ticketButtonJQ.on('click', function () {
                if (ticketButtonJS.classList[0] === 'default-button') {
                    get_page_1.GetPage.forHTML('index-overlay', 'log-overlay');
                    toggle_view_1.ToggleView.page('show', 'index-overlay');
                    style_element_1.StyleElement.toggleClass('activate', ticketButtonJS);
                }
            });
            loggedButtonJQ.on('click', function () {
                if (loggedButtonJS.classList[0] === 'default-button') {
                    toggle_view_1.ToggleView.indexMain('hide');
                    style_element_1.StyleElement.toggleButton(loggedButtonJS, manageButtonJS);
                    get_page_1.GetPage.forHTML('index-main', 'logged-main');
                    toggle_view_1.ToggleView.indexMain('show');
                }
            });
            manageButtonJQ.on('click', function () {
                if (manageButtonJS.classList[0] === 'default-button') {
                    toggle_view_1.ToggleView.indexMain('hide');
                    style_element_1.StyleElement.toggleButton(manageButtonJS, loggedButtonJS);
                    get_page_1.GetPage.forHTML('index-main', 'manage-main');
                    toggle_view_1.ToggleView.indexMain('show');
                }
            });
        }
        IndexHeader.initiateEvents = initiateEvents;
    })(IndexHeader = exports.IndexHeader || (exports.IndexHeader = {}));
});

//# sourceMappingURL=dist/tools/events/index-header.js.map
