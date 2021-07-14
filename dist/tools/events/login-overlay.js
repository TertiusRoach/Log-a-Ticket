define(["require", "exports", "tools/build-dropdown"], function (require, exports, build_dropdown_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginOverlay = void 0;
    var LoginOverlay;
    (function (LoginOverlay) {
        function initiateEvents(loginLogoJQ, employeeFormJQ, employeeSelectJQ, informationTextJQ, loginButtonJQ, overlayCanvasJQ, overlayBackgroundJQ, loginLogoJS, employeeFormJS, employeeSelectJS, informationTextJS, loginButtonJS, overlayCanvasJS, overlayBackgroundJS) {
            console.log('--login-overlay.ts');
            loginButtonJQ.on('click', function () {
                if (employeeSelectJS.value === 'pick-employee') {
                    employeeSelectJS.style.border = '2px solid #f8af58';
                }
            });
            employeeFormJQ.on('click', function () {
                if (employeeSelectJS.value === 'pick-employee') {
                    employeeSelectJS.style.border = '2px solid #084887';
                    loginButtonJS.style.cursor = 'pointer';
                    loginButtonJS.style.color = '#f8af58';
                    build_dropdown_1.BuildDropdown.assemble(employeeSelectJS, 'employees');
                }
            });
        }
        LoginOverlay.initiateEvents = initiateEvents;
    })(LoginOverlay = exports.LoginOverlay || (exports.LoginOverlay = {}));
});

//# sourceMappingURL=dist/tools/events/login-overlay.js.map
