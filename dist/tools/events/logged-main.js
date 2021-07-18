define(["require", "exports", "tools/style-element", "tools/toggle-view"], function (require, exports, style_element_1, toggle_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggedMain = void 0;
    var LoggedMain;
    (function (LoggedMain) {
        function initiateEvents(pendingTabJQ, pendingTextJQ, assignedTabJQ, assignedTextJQ, resolvedTabJQ, resolvedTextJQ, deletedTabJQ, deletedTextJQ, everythingTabJQ, everythingTextJQ, activeTabJQ, defaultTabsJQ, allTabsJQ, notificationContainerJQ, notificationTextJQ, pendingTabJS, pendingTextJS, assignedTabJS, assignedTextJS, resolvedTabJS, resolvedTextJS, deletedTabJS, deletedTextJS, everythingTabJS, everythingTextJS, activeTabJS, defaultTabsJS, allTabsJS, notificationContainerJS, notificationTextJS) {
            pendingTabJQ.on('click', function () {
                if (pendingTabJS.classList[0] !== 'active-tab') {
                    style_element_1.StyleElement.toggleTab(pendingTabJS, allTabsJS);
                }
            });
            assignedTabJQ.on('click', function () {
                if (assignedTabJS.classList[0] !== 'active-tab') {
                    style_element_1.StyleElement.toggleTab(assignedTabJS, allTabsJS);
                }
            });
            resolvedTabJQ.on('click', function () {
                if (resolvedTabJS.classList[0] !== 'active-tab') {
                    style_element_1.StyleElement.toggleTab(resolvedTabJS, allTabsJS);
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
            assignedTextJQ
                .on('mouseenter', function () {
                toggle_view_1.ToggleView.tickets('show', assignedTabJS);
            })
                .on('mouseleave', function () {
                toggle_view_1.ToggleView.tickets('hide', assignedTabJS);
            });
            resolvedTextJQ
                .on('mouseenter', function () {
                toggle_view_1.ToggleView.tickets('show', resolvedTabJS);
            })
                .on('mouseleave', function () {
                toggle_view_1.ToggleView.tickets('hide', resolvedTabJS);
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
        LoggedMain.initiateEvents = initiateEvents;
    })(LoggedMain = exports.LoggedMain || (exports.LoggedMain = {}));
});

//# sourceMappingURL=dist/tools/events/logged-main.js.map
