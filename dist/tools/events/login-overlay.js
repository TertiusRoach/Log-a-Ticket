define(["require", "exports", "tools/build-dropdown", "tools/style-element", "tools/replace-text", "tools/toggle-view"], function (require, exports, build_dropdown_1, style_element_1, replace_text_1, toggle_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginOverlay = void 0;
    var LoginOverlay;
    (function (LoginOverlay) {
        function initiateEvents(loginLogoJQ, employeeFormJQ, employeeSelectJQ, informationTextJQ, loginButtonJQ, overlayCanvasJQ, overlayBackgroundJQ, loginLogoJS, employeeFormJS, employeeSelectJS, informationTextJS, loginButtonJS, overlayCanvasJS, overlayBackgroundJS) {
            employeeSelectJQ.on('change', function () {
                replace_text_1.ReplaceText.loginOverlay(employeeSelectJS, informationTextJS);
            });
            loginButtonJQ.on('click', function () {
                if (employeeSelectJS.value === 'pick-employee') {
                    style_element_1.StyleElement.highlight('select', employeeSelectJS);
                }
                else {
                    toggle_view_1.ToggleView.pageContainer('hide', 'index-overlay', 'login-overlay');
                }
            });
            employeeFormJQ.on('click', function () {
                if (employeeSelectJS.value === 'pick-employee') {
                    style_element_1.StyleElement.highlight('button', loginButtonJS);
                    style_element_1.StyleElement.playdown('select', employeeSelectJS);
                    build_dropdown_1.BuildDropdown.assemble(employeeSelectJS, 'employees');
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
