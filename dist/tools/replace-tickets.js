define(["require", "exports", "tools/convert-string", "tools/get-elements", "tools/get-array"], function (require, exports, convert_string_1, get_elements_1, get_array_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReplaceTickets = void 0;
    var ReplaceTickets;
    (function (ReplaceTickets) {
        var assemble = (function () {
            function assemble(action, referenceUser) {
                var ticketsMainJQ = get_elements_1.GetContainer.ticketsBodyJQ.contents().children('#tickets-main')[0];
                var user = convert_string_1.ConvertString.value('capitalize', '-', referenceUser);
                var department = this.get('department', referenceUser);
                this.actionFilter = action;
                ticketsMainJQ.innerHTML = '';
                switch (action) {
                    case 'change':
                        var page = this.get('page', referenceUser);
                        if (page === 'Logged') {
                            this.senderTickets(user, ticketsMainJQ);
                        }
                        else if (page === 'Manage') {
                            this.departmentTickets(department, ticketsMainJQ);
                        }
                        break;
                    case 'logged':
                        this.senderTickets(user, ticketsMainJQ);
                        break;
                    case 'manage':
                        this.departmentTickets(department, ticketsMainJQ);
                        break;
                    case 'employee':
                        break;
                    case 'coworker':
                        break;
                }
            }
            assemble.prototype.senderTickets = function (sender, container) {
                for (var i = 0; i < get_array_1.GetArray.ticketList().length; i++) {
                    if (sender === get_array_1.GetArray.ticketList()[i].sender) {
                        $(container).append("\n          <article style=\"display: grid\" class=\"ticket " + get_array_1.GetArray.ticketList()[i].ticketStatus.toLowerCase() + "\">\n            <p style=\"display: flex\" class=\"shortdate-text\">" + get_array_1.GetArray.ticketList()[i].shortDate + "</p>\n            <p style=\"display: flex\" class=\"subject-text\">" + get_array_1.GetArray.ticketList()[i].subjectText + "</p>\n            <div class=\"recipient-container\">\n              <p class=\"sender-text\">" + get_array_1.GetArray.ticketList()[i].sender + "</p>\n              <p class=\"receiver-text\">" + get_array_1.GetArray.ticketList()[i].receiver + "</p>\n            </div>\n            <div class=\"reference-container\">\n              <p class=\"longdate-text\">" + get_array_1.GetArray.ticketList()[i].longDate + "</p>\n              <p class=\"description-text\">" + get_array_1.GetArray.ticketList()[i].descriptionText + "</p>\n              <p class=\"assigned-date\">" + get_array_1.GetArray.ticketList()[i].assignedDate + "</p>\n              <p class=\"resolved-date\">" + get_array_1.GetArray.ticketList()[i].resolvedDate + "</p>\n              <p class=\"deleted-date\">" + get_array_1.GetArray.ticketList()[i].deletedDate + "</p>\n              <p class=\"deleted-note\">" + get_array_1.GetArray.ticketList()[i].deletedNote + "</p>\n            </div>\n          </article>");
                    }
                }
            };
            assemble.prototype.departmentTickets = function (department, container) {
                for (var i = 0; i < get_array_1.GetArray.ticketList().length; i++) {
                    if (department === get_array_1.GetArray.ticketList()[i].receiver) {
                        $(container).append("\n          <article style=\"display: grid\" class=\"ticket " + get_array_1.GetArray.ticketList()[i].ticketStatus.toLowerCase() + "\">\n            <p style=\"display: flex\" class=\"shortdate-text\">" + get_array_1.GetArray.ticketList()[i].shortDate + "</p>\n            <p style=\"display: flex\" class=\"subject-text\">" + get_array_1.GetArray.ticketList()[i].subjectText + "</p>\n            <div class=\"recipient-container\">\n              <p class=\"sender-text\">" + get_array_1.GetArray.ticketList()[i].sender + "</p>\n              <p class=\"receiver-text\">" + get_array_1.GetArray.ticketList()[i].receiver + "</p>\n            </div>\n            <div class=\"reference-container\">\n              <p class=\"longdate-text\">" + get_array_1.GetArray.ticketList()[i].longDate + "</p>\n              <p class=\"description-text\">" + get_array_1.GetArray.ticketList()[i].descriptionText + "</p>\n              <p class=\"assigned-date\">" + get_array_1.GetArray.ticketList()[i].assignedDate + "</p>\n              <p class=\"resolved-date\">" + get_array_1.GetArray.ticketList()[i].resolvedDate + "</p>\n              <p class=\"deleted-date\">" + get_array_1.GetArray.ticketList()[i].deletedDate + "</p>\n              <p class=\"deleted-note\">" + get_array_1.GetArray.ticketList()[i].deletedNote + "</p>\n            </div>\n          </article>");
                    }
                }
            };
            assemble.prototype.get = function (action, referenceUser) {
                switch (action) {
                    case 'page':
                        for (var i = 0; i < get_array_1.GetArray.employeeList().length; i++) {
                            var employeeName = get_array_1.GetArray.employeeList()[i].name + " " + get_array_1.GetArray.employeeList()[i].surname;
                            var userName = convert_string_1.ConvertString.value('capitalize', '-', referenceUser);
                            if (employeeName === userName) {
                                return get_array_1.GetArray.employeeList()[i].ticketPage;
                            }
                        }
                        break;
                    case 'department':
                        for (var i = 0; i < get_array_1.GetArray.employeeList().length; i++) {
                            var employeeName = get_array_1.GetArray.employeeList()[i].name + " " + get_array_1.GetArray.employeeList()[i].surname;
                            var userName = convert_string_1.ConvertString.value('capitalize', '-', referenceUser);
                            if (employeeName === userName) {
                                return get_array_1.GetArray.employeeList()[i].department;
                            }
                        }
                        break;
                }
            };
            return assemble;
        }());
        ReplaceTickets.assemble = assemble;
    })(ReplaceTickets = exports.ReplaceTickets || (exports.ReplaceTickets = {}));
});

//# sourceMappingURL=dist/tools/replace-tickets.js.map
