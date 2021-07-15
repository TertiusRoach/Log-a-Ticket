define(["require", "exports", "tools/get-array", "tools/convert-string"], function (require, exports, get_array_1, convert_string_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SyncUser = void 0;
    var SyncUser;
    (function (SyncUser) {
        function toHeader(reference, connect) {
            for (var i = 0; i < reference.length; i++) {
                if (reference.value === connect[i].value) {
                    connect[i].selected = true;
                }
            }
        }
        SyncUser.toHeader = toHeader;
        function toMain(loginSelect, loggedButton, manageButton) {
            var selectedUser = convert_string_1.ConvertString.value('capitalize', '-', loginSelect);
            for (var i = 0; i < get_array_1.GetArray.employeeList().length; i++) {
                var arrayUser = get_array_1.GetArray.employeeList()[i].name + " " + get_array_1.GetArray.employeeList()[i].surname;
                if (selectedUser === arrayUser) {
                    switch (get_array_1.GetArray.employeeList()[i].ticketPage) {
                        case 'Manage':
                            manageButton.classList.remove('default-button');
                            manageButton.classList.add('active-button');
                            break;
                        case 'Logged':
                            loggedButton.classList.remove('default-button');
                            loggedButton.classList.add('active-button');
                            break;
                    }
                }
            }
        }
        SyncUser.toMain = toMain;
    })(SyncUser = exports.SyncUser || (exports.SyncUser = {}));
});

//# sourceMappingURL=dist/tools/sync-user.js.map
