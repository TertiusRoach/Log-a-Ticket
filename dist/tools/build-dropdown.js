define(["require", "exports", "tools/get-array"], function (require, exports, get_array_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuildDropdown = void 0;
    var BuildDropdown;
    (function (BuildDropdown) {
        function assemble(build, selectContainer, referenceContainer) {
            switch (build) {
                case 'employees':
                    selectContainer.innerHTML = '';
                    for (var i = 0; i < get_array_1.GetArray.employeeList().length; i++) {
                        var optionElement = document.createElement('option');
                        optionElement.text = get_array_1.GetArray.employeeList()[i].name + " " + get_array_1.GetArray.employeeList()[i].surname;
                        optionElement.value = optionElement.text.replace(' ', '-').toLowerCase();
                        selectContainer.add(optionElement);
                    }
                    break;
                case 'departments':
                    selectContainer.innerHTML = '';
                    for (var i = 0; i < get_array_1.GetArray.departmentList().length; i++) {
                        var optionElement = document.createElement('option');
                        optionElement.text = "" + get_array_1.GetArray.departmentList()[i].department;
                        optionElement.value = ("" + get_array_1.GetArray.departmentList()[i].department).replace(' ', '-').toLowerCase();
                        selectContainer.add(optionElement);
                    }
                    break;
                case 'coworkers':
                    console.log(referenceContainer.value);
                    break;
            }
        }
        BuildDropdown.assemble = assemble;
    })(BuildDropdown = exports.BuildDropdown || (exports.BuildDropdown = {}));
});

//# sourceMappingURL=dist/tools/build-dropdown.js.map
