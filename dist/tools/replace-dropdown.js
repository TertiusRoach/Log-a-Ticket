define(["require", "exports", "tools/get-array", "tools/convert-string"], function (require, exports, get_array_1, convert_string_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReplaceDropdown = void 0;
    var ReplaceDropdown;
    (function (ReplaceDropdown) {
        function assemble(build, selectContainer, referenceDepartment, referenceUser) {
            selectContainer.innerHTML = '';
            switch (build) {
                case 'employees':
                    for (var i = 0; i < get_array_1.GetArray.employeeList().length; i++) {
                        var optionElement = document.createElement('option');
                        optionElement.text = get_array_1.GetArray.employeeList()[i].name + " " + get_array_1.GetArray.employeeList()[i].surname;
                        optionElement.value = optionElement.text.replace(' ', '-').toLowerCase();
                        selectContainer.add(optionElement);
                    }
                    break;
                case 'departments':
                    for (var i = 0; i < get_array_1.GetArray.departmentList().length; i++) {
                        var optionElement = document.createElement('option');
                        optionElement.text = "" + get_array_1.GetArray.departmentList()[i].department;
                        optionElement.value = ("" + get_array_1.GetArray.departmentList()[i].department).replace(' ', '-').toLowerCase();
                        selectContainer.add(optionElement);
                    }
                    break;
                case 'coworkers':
                    for (var i = 0; i < get_array_1.GetArray.employeeList().length; i++) {
                        if (convert_string_1.ConvertString.value('capitalize', '-', referenceDepartment) === "" + get_array_1.GetArray.employeeList()[i].department) {
                            var optionElement = document.createElement('option');
                            optionElement.text = get_array_1.GetArray.employeeList()[i].name + " " + get_array_1.GetArray.employeeList()[i].surname;
                            optionElement.value = (get_array_1.GetArray.employeeList()[i].name + "-" + get_array_1.GetArray.employeeList()[i].surname).toLowerCase();
                            if (convert_string_1.ConvertString.value('capitalize', '-', referenceUser) === get_array_1.GetArray.employeeList()[i].name + " " + get_array_1.GetArray.employeeList()[i].surname) {
                                optionElement.disabled = true;
                            }
                            selectContainer.add(optionElement);
                        }
                    }
                    break;
            }
        }
        ReplaceDropdown.assemble = assemble;
        function revert(build, selectContainer) {
            selectContainer.innerHTML = '';
            switch (build) {
                case 'employee':
                    for (var i = 0; i < 1; i++) {
                        var optionElement = document.createElement('option');
                        optionElement.text = 'Select Employee';
                        optionElement.value = 'select-employee';
                        selectContainer.add(optionElement);
                    }
                    break;
                case 'department':
                    for (var i = 0; i < 1; i++) {
                        var optionElement = document.createElement('option');
                        optionElement.text = 'Select Department';
                        optionElement.value = 'select-department';
                        selectContainer.add(optionElement);
                    }
                    break;
                case 'coworker':
                    for (var i = 0; i < 1; i++) {
                        var optionElement = document.createElement('option');
                        optionElement.text = 'Select Coworker';
                        optionElement.value = 'select-coworker';
                        selectContainer.add(optionElement);
                    }
                    break;
            }
        }
        ReplaceDropdown.revert = revert;
    })(ReplaceDropdown = exports.ReplaceDropdown || (exports.ReplaceDropdown = {}));
});

//# sourceMappingURL=dist/tools/replace-dropdown.js.map
