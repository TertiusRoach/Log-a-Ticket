define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetElements = void 0;
    var GetElements;
    (function (GetElements) {
        function fromHTML(page) {
            console.log(page);
            if (page + "-body" === 'index-body') {
                var indexElements = function () {
                    var headerElement = document.getElementById('page-header');
                    var headerSelect = document.querySelector('#page-header .employee-select');
                    var loggedButton = document.querySelector('#page-header .logged-button div');
                    var manageButton = document.querySelector('#page-header .manage-button div');
                    console.log(headerElement);
                    console.log('#tickets-header <Header>');
                    console.log('#tickets-main <Main>');
                };
                indexElements();
            }
            if (page + "-body" === 'tickets-body') {
                var ticketsElements = function () {
                    console.log('#tickets-header <Header>');
                    console.log('#tickets-main <Main>');
                };
                ticketsElements();
            }
        }
        GetElements.fromHTML = fromHTML;
    })(GetElements = exports.GetElements || (exports.GetElements = {}));
});

//# sourceMappingURL=dist/tools/get-elements.js.map
