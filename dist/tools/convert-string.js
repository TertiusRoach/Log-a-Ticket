define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConvertString = void 0;
    var ConvertString;
    (function (ConvertString) {
        function value(convertString, removeCharacter, referenceElement) {
            var element = referenceElement;
            var array = element.value.split(removeCharacter);
            switch (convertString) {
                case 'capitalize':
                    for (var i = 0; i < array.length; i++) {
                        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
                    }
                    var capitalized = array.join(' ');
                    return capitalized;
                    break;
                case 'lowercase':
                    break;
            }
        }
        ConvertString.value = value;
        function fetch(action, pageClass) {
            var separate = pageClass.split('-');
            var fetched;
            switch (action) {
                case 'former':
                    fetched = "" + separate[0];
                    break;
                case 'latter':
                    fetched = "" + separate[1];
                    break;
            }
            return fetched;
        }
        ConvertString.fetch = fetch;
    })(ConvertString = exports.ConvertString || (exports.ConvertString = {}));
});

//# sourceMappingURL=dist/tools/convert-string.js.map
