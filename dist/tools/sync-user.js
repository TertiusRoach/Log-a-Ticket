define(["require", "exports", "tools/convert-string", "tools/get-elements", "tools/get-array", "tools/get-page"], function (require, exports, convert_string_1, get_elements_1, get_array_1, get_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SyncUser = void 0;
    var SyncUser;
    (function (SyncUser) {
        function toHeader(reference, connectContainer) {
            for (var i = 0; i < reference.length; i++) {
                if (reference.value === connectContainer[i].value) {
                    connectContainer[i].selected = true;
                }
            }
        }
        SyncUser.toHeader = toHeader;
        function toMain(reference, loggedButton, manageButton) {
            var selectedUser = convert_string_1.ConvertString.value('capitalize', '-', reference);
            for (var i = 0; i < get_array_1.GetArray.employeeList().length; i++) {
                var arrayUser = get_array_1.GetArray.employeeList()[i].name + " " + get_array_1.GetArray.employeeList()[i].surname;
                if (selectedUser === arrayUser) {
                    switch (get_array_1.GetArray.employeeList()[i].ticketPage) {
                        case 'Manage':
                            get_elements_1.GetContainer.indexMainJS.classList.remove('logged-main');
                            loggedButton.classList.remove('active-button');
                            loggedButton.classList.add('default-button');
                            manageButton.classList.remove('default-button');
                            manageButton.classList.add('active-button');
                            get_page_1.GetPage.forHTML('index-main', 'manage-main');
                            break;
                        case 'Logged':
                            get_elements_1.GetContainer.indexMainJS.classList.remove('manage-main');
                            manageButton.classList.remove('active-button');
                            manageButton.classList.add('default-button');
                            loggedButton.classList.remove('default-button');
                            loggedButton.classList.add('active-button');
                            get_page_1.GetPage.forHTML('index-main', 'logged-main');
                            break;
                    }
                }
            }
        }
        SyncUser.toMain = toMain;
    })(SyncUser = exports.SyncUser || (exports.SyncUser = {}));
});

//# sourceMappingURL=dist/tools/sync-user.js.map
