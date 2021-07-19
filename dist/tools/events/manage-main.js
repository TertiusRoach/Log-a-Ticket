define(["require", "exports", "tools/style-element", "tools/toggle-view"], function (require, exports, style_element_1, toggle_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ManageMain = void 0;
    var ManageMain;
    (function (ManageMain) {
        function initiateEvents(pendingTabJQ, pendingTextJQ, deletedTabJQ, deletedTextJQ, everythingTabJQ, everythingTextJQ, activeTabJQ, defaultTabsJQ, allTabsJQ, notificationContainerJQ, notificationTextJQ, pendingTabJS, pendingTextJS, deletedTabJS, deletedTextJS, everythingTabJS, everythingTextJS, activeTabJS, defaultTabsJS, allTabsJS, notificationContainerJS, notificationTextJS) {
            pendingTabJQ.on('click', function () {
                if (pendingTabJS.classList[0] !== 'active-tab') {
                    style_element_1.StyleElement.toggleTab(pendingTabJS, allTabsJS);
                }
            });
            deletedTabJQ.on('click', function () {
                if (deletedTabJS.classList[0] !== 'active-tab') {
                    style_element_1.StyleElement.toggleTab(deletedTabJS, allTabsJS);
                }
            });
            everythingTabJQ.on('click', function () {
                if (everythingTabJS.classList[0] !== 'active-tab') {
                    style_element_1.StyleElement.toggleTab(everythingTabJS, allTabsJS);
                }
            });
            pendingTextJQ
                .on('mouseenter', function () {
                toggle_view_1.ToggleView.tickets('show', pendingTabJS);
            })
                .on('mouseleave', function () {
                toggle_view_1.ToggleView.tickets('hide', pendingTabJS);
            });
            deletedTextJQ
                .on('mouseenter', function () {
                toggle_view_1.ToggleView.tickets('show', deletedTabJS);
            })
                .on('mouseleave', function () {
                toggle_view_1.ToggleView.tickets('hide', deletedTabJS);
            });
            everythingTextJQ
                .on('mouseenter', function () {
                toggle_view_1.ToggleView.tickets('show', everythingTabJS);
            })
                .on('mouseleave', function () {
                toggle_view_1.ToggleView.tickets('hide', everythingTabJS);
            });
        }
        ManageMain.initiateEvents = initiateEvents;
    })(ManageMain = exports.ManageMain || (exports.ManageMain = {}));
});

//# sourceMappingURL=dist/tools/events/manage-main.js.map
