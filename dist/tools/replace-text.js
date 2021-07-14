define(["require", "exports", "tools/convert-string", "tools/get-array"], function (require, exports, convert_string_1, get_array_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReplaceText = void 0;
    var ReplaceText;
    (function (ReplaceText) {
        function loginOverlay(reference, replace) {
            for (var i = 0; i < get_array_1.GetArray.employeeList().length; i++) {
                var selectedUser = convert_string_1.ConvertString.value('capitalize', '-', reference);
                var selectedArray = get_array_1.GetArray.employeeList()[i].name + " " + get_array_1.GetArray.employeeList()[i].surname;
                var selectedInfo = get_array_1.GetArray.employeeList()[i].department + ": " + get_array_1.GetArray.employeeList()[i].occupation;
                if (selectedUser === selectedArray) {
                    replace.innerHTML = selectedInfo;
                }
            }
        }
        ReplaceText.loginOverlay = loginOverlay;
    })(ReplaceText = exports.ReplaceText || (exports.ReplaceText = {}));
});

//# sourceMappingURL=dist/tools/replace-text.js.map
