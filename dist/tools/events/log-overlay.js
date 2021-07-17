define(["require", "exports", "tools/replace-dropdown", "tools/style-element", "tools/replace-text", "tools/toggle-view"], function (require, exports, replace_dropdown_1, style_element_1, replace_text_1, toggle_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogOverlay = void 0;
    var LogOverlay;
    (function (LogOverlay) {
        function initiateEvents(overlayHeaderJQ, closeButtonJQ, logButtonJQ, ticketSubjectJQ, ticketDescriptionJQ, departmentFormJQ, departmentSelectJQ, coworkerFormJQ, coworkerSelectJQ, emailTextJQ, numberTextJQ, overlayCanvasJQ, overlayBackgroundJQ, headerButtonJQ, headerSelectJQ, overlayHeaderJS, closeButtonJS, logButtonJS, ticketSubjectJS, ticketDescriptionJS, departmentFormJS, departmentSelectJS, coworkerFormJS, coworkerSelectJS, emailTextJS, numberTextJS, overlayCanvasJS, overlayBackgroundJS, headerButtonJS, headerSelectJS) {
            replace_text_1.ReplaceText.date('long', overlayHeaderJS);
            logButtonJQ.on('click', function () {
                if (ticketSubjectJS.value === '') {
                    style_element_1.StyleElement.highlight('input', ticketSubjectJS);
                }
                if (ticketDescriptionJS.value === '') {
                    style_element_1.StyleElement.highlight('textarea', ticketDescriptionJS);
                }
                if (departmentSelectJS.value === 'select-department') {
                    style_element_1.StyleElement.highlight('select', departmentSelectJS);
                }
                if (coworkerSelectJS.value === '') {
                    style_element_1.StyleElement.highlight('select', coworkerSelectJS);
                }
            });
            ticketSubjectJQ.on('keydown keyup', function () {
                if (ticketSubjectJS.value !== '' && ticketDescriptionJS.value !== '' && departmentSelectJS.value !== 'select-department' && coworkerSelectJS.value !== '') {
                    style_element_1.StyleElement.highlight('button', logButtonJS);
                }
                if (ticketSubjectJS.value !== '') {
                    style_element_1.StyleElement.playdown('input', ticketSubjectJS);
                }
            });
            ticketDescriptionJQ.on('keydown keyup', function () {
                if (ticketSubjectJS.value !== '' && ticketDescriptionJS.value !== '' && departmentSelectJS.value !== 'select-department' && coworkerSelectJS.value !== '') {
                    style_element_1.StyleElement.highlight('button', logButtonJS);
                }
                if (ticketDescriptionJS.value !== '') {
                    style_element_1.StyleElement.playdown('textarea', ticketDescriptionJS);
                }
            });
            departmentSelectJQ
                .on('click', function () {
                if (departmentSelectJS.value === 'select-department') {
                    style_element_1.StyleElement.playdown('select', departmentSelectJS);
                    replace_dropdown_1.ReplaceDropdown.assemble('departments', departmentSelectJS);
                    toggle_view_1.ToggleView.form('show', coworkerFormJS);
                }
            })
                .on('change', function () {
                if (ticketSubjectJS.value !== '' && ticketDescriptionJS.value !== '' && departmentSelectJS.value !== 'select-department' && coworkerSelectJS.value !== '') {
                    style_element_1.StyleElement.highlight('button', logButtonJS);
                }
                replace_dropdown_1.ReplaceDropdown.revert('coworker', coworkerSelectJS);
                if (coworkerSelectJS.value !== '') {
                    style_element_1.StyleElement.playdown('select', coworkerSelectJS);
                }
            });
            coworkerSelectJQ.on('click', function () {
                if (coworkerSelectJS.value === 'select-coworker') {
                    replace_dropdown_1.ReplaceDropdown.assemble('coworkers', coworkerSelectJS, departmentSelectJS, headerSelectJS);
                }
                if (coworkerSelectJS.value === '') {
                    style_element_1.StyleElement.playdown('button', logButtonJS);
                }
            });
            closeButtonJQ.on('click', function () {
                if (headerButtonJS.classList[0] === 'active-button') {
                    toggle_view_1.ToggleView.page('hide', 'index-overlay');
                    style_element_1.StyleElement.toggleClass('disable', headerButtonJS);
                }
            });
            overlayBackgroundJQ.on('click', function () {
                if (headerButtonJS.classList[0] === 'active-button') {
                    toggle_view_1.ToggleView.page('hide', 'index-overlay');
                    style_element_1.StyleElement.toggleClass('disable', headerButtonJS);
                }
            });
        }
        LogOverlay.initiateEvents = initiateEvents;
    })(LogOverlay = exports.LogOverlay || (exports.LogOverlay = {}));
});

//# sourceMappingURL=dist/tools/events/log-overlay.js.map
