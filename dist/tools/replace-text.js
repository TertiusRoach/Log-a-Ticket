define(["require", "exports", "tools/convert-string", "tools/get-array"], function (require, exports, convert_string_1, get_array_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReplaceText = void 0;
    var ReplaceText;
    (function (ReplaceText) {
        function date(type, replaceElement) {
            var date = new Date();
            var year = date.getFullYear();
            var day = date.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            switch (type) {
                case 'short':
                    var shortMonth = date.getMonth() + 1;
                    if (shortMonth < 10) {
                        shortMonth = "0" + shortMonth;
                    }
                    replaceElement.innerHTML = year + "-" + shortMonth + "-" + day;
                    break;
                case 'long':
                    var weekday = date.getDay();
                    var longMonth = date.getMonth();
                    var weekName = void 0;
                    (function (weekName) {
                        weekName[weekName["Sunday"] = 0] = "Sunday";
                        weekName[weekName["Monday"] = 1] = "Monday";
                        weekName[weekName["Tuesday"] = 2] = "Tuesday";
                        weekName[weekName["Wednesday"] = 3] = "Wednesday";
                        weekName[weekName["Thursday"] = 4] = "Thursday";
                        weekName[weekName["Friday"] = 5] = "Friday";
                        weekName[weekName["Saturday"] = 6] = "Saturday";
                    })(weekName || (weekName = {}));
                    var monthName = void 0;
                    (function (monthName) {
                        monthName[monthName["January"] = 0] = "January";
                        monthName[monthName["February"] = 1] = "February";
                        monthName[monthName["March"] = 2] = "March";
                        monthName[monthName["April"] = 3] = "April";
                        monthName[monthName["May"] = 4] = "May";
                        monthName[monthName["June"] = 5] = "June";
                        monthName[monthName["July"] = 6] = "July";
                        monthName[monthName["August"] = 7] = "August";
                        monthName[monthName["September"] = 8] = "September";
                        monthName[monthName["October"] = 9] = "October";
                        monthName[monthName["November"] = 10] = "November";
                        monthName[monthName["December"] = 11] = "December";
                    })(monthName || (monthName = {}));
                    replaceElement.innerHTML = weekName[weekday] + ", " + day + " " + monthName[longMonth] + " " + year;
                    break;
            }
        }
        ReplaceText.date = date;
        function loginOverlay(referenceElement, replaceElement) {
            for (var i = 0; i < get_array_1.GetArray.employeeList().length; i++) {
                var selectedUser = convert_string_1.ConvertString.value('capitalize', '-', referenceElement);
                var selectedArray = get_array_1.GetArray.employeeList()[i].name + " " + get_array_1.GetArray.employeeList()[i].surname;
                var selectedInfo = get_array_1.GetArray.employeeList()[i].department + ": " + get_array_1.GetArray.employeeList()[i].occupation;
                if (selectedUser === selectedArray) {
                    replaceElement.innerHTML = selectedInfo;
                }
            }
        }
        ReplaceText.loginOverlay = loginOverlay;
    })(ReplaceText = exports.ReplaceText || (exports.ReplaceText = {}));
});

//# sourceMappingURL=dist/tools/replace-text.js.map
