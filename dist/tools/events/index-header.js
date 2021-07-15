define(["require", "exports", "tools/build-dropdown", "tools/sync-user", "tools/style-element", "tools/get-page", "tools/toggle-view"], function (require, exports, build_dropdown_1, sync_user_1, style_element_1, get_page_1, toggle_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexHeader = void 0;
    var IndexHeader;
    (function (IndexHeader) {
        function initiateEvents(ticketButtonJQ, loggedButtonJQ, manageButtonJQ, headerFormJQ, headerSelectJQ, loginFormJQ, loginSelectJQ, loginButtonJQ, ticketButtonJS, loggedButtonJS, manageButtonJS, headerFormJS, headerSelectJS, loginFormJS, loginSelectJS, loginButtonJS) {
            headerSelectJQ.on('change', function () {
                toggle_view_1.ToggleView.page('hide', 'index-main', 'manage-main');
                toggle_view_1.ToggleView.page('hide', 'index-main', 'logged-main');
                toggle_view_1.ToggleView.page('hide', 'index-iframe', 'default-iframe');
                sync_user_1.SyncUser.toMain(headerSelectJS, loggedButtonJS, manageButtonJS);
                toggle_view_1.ToggleView.page('show', 'index-main', 'manage-main');
                toggle_view_1.ToggleView.page('show', 'index-main', 'logged-main');
                toggle_view_1.ToggleView.page('show', 'index-iframe', 'default-iframe');
            });
            loginSelectJQ.on('click', function () {
                if (headerSelectJS.value === 'pick-employee') {
                    build_dropdown_1.BuildDropdown.assemble(headerSelectJS, 'employees');
                }
            });
            loginFormJQ.on('change', function () {
                sync_user_1.SyncUser.toMain(loginSelectJS, loggedButtonJS, manageButtonJS);
            });
            loggedButtonJQ.on('click', function () {
                if (loggedButtonJS.classList[0] === 'default-button') {
                    toggle_view_1.ToggleView.page('hide', 'index-main', 'logged-main');
                    toggle_view_1.ToggleView.page('hide', 'index-iframe', 'default-iframe');
                    style_element_1.StyleElement.button(loggedButtonJS, manageButtonJS);
                    get_page_1.GetPage.forHTML('index-main', 'logged-main');
                    toggle_view_1.ToggleView.page('show', 'index-main', 'logged-main');
                    toggle_view_1.ToggleView.page('show', 'index-iframe', 'default-iframe');
                }
            });
            manageButtonJQ.on('click', function () {
                if (manageButtonJS.classList[0] === 'default-button') {
                    toggle_view_1.ToggleView.page('hide', 'index-main', 'manage-main');
                    toggle_view_1.ToggleView.page('hide', 'index-iframe', 'default-iframe');
                    style_element_1.StyleElement.button(manageButtonJS, loggedButtonJS);
                    get_page_1.GetPage.forHTML('index-main', 'manage-main');
                    toggle_view_1.ToggleView.page('show', 'index-main', 'manage-main');
                    toggle_view_1.ToggleView.page('show', 'index-iframe', 'default-iframe');
                }
            });
        }
        IndexHeader.initiateEvents = initiateEvents;
    })(IndexHeader = exports.IndexHeader || (exports.IndexHeader = {}));
});

//# sourceMappingURL=dist/tools/events/index-header.js.map
