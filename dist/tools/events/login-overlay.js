define(["require", "exports", "tools/replace-dropdown", "tools/style-element", "tools/replace-text", "tools/replace-tickets", "tools/toggle-view", "tools/sync-user"], function (require, exports, replace_dropdown_1, style_element_1, replace_text_1, replace_tickets_1, toggle_view_1, sync_user_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginOverlay = void 0;
    var LoginOverlay;
    (function (LoginOverlay) {
        function initiateEvents(loginLogoJQ, employeeFormJQ, employeeSelectJQ, informationTextJQ, loginButtonJQ, overlayCanvasJQ, overlayBackgroundJQ, loggedButtonJQ, manageButtonJQ, headerSelectJQ, loginLogoJS, employeeFormJS, employeeSelectJS, informationTextJS, loginButtonJS, overlayCanvasJS, overlayBackgroundJS, loggedButtonJS, manageButtonJS, headerSelectJS) {
            employeeSelectJQ
                .on('click', function () {
                if (employeeSelectJS.value === 'pick-employee') {
                    replace_dropdown_1.ReplaceDropdown.assemble('employees', employeeSelectJS);
                    style_element_1.StyleElement.highlight('button', loginButtonJS);
                    style_element_1.StyleElement.playdown('select', employeeSelectJS);
                }
            })
                .on('change', function () {
                toggle_view_1.ToggleView.indexMain('hide');
                new replace_tickets_1.GetTickets.initiateCode();
                replace_dropdown_1.ReplaceDropdown.assemble('employees', headerSelectJS);
                sync_user_1.SyncUser.toHeader(employeeSelectJS, headerSelectJS);
                replace_text_1.ReplaceText.loginOverlay(employeeSelectJS, informationTextJS);
                sync_user_1.SyncUser.toMain(headerSelectJS, loggedButtonJS, manageButtonJS);
            });
            loginButtonJQ.on('click', function () {
                if (employeeSelectJS.value === 'pick-employee') {
                    style_element_1.StyleElement.highlight('select', employeeSelectJS);
                }
                else {
                    toggle_view_1.ToggleView.page('hide', 'index-overlay');
                    toggle_view_1.ToggleView.page('show', 'index-header');
                    toggle_view_1.ToggleView.page('show', 'index-iframe');
                    toggle_view_1.ToggleView.page('show', 'index-main');
                    toggle_view_1.ToggleView.indexMain('show');
                }
            });
            overlayCanvasJQ.on('click', function () {
                if (employeeSelectJS.value === 'pick-employee') {
                    style_element_1.StyleElement.highlight('select', employeeSelectJS);
                }
            });
            overlayBackgroundJQ.on('click', function () {
                if (employeeSelectJS.value === 'pick-employee') {
                    style_element_1.StyleElement.highlight('select', employeeSelectJS);
                }
            });
        }
        LoginOverlay.initiateEvents = initiateEvents;
    })(LoginOverlay = exports.LoginOverlay || (exports.LoginOverlay = {}));
});

//# sourceMappingURL=dist/tools/events/login-overlay.js.map
