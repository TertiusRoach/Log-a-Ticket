define(["require", "exports", "../index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuildBody = void 0;
    var BuildBody;
    (function (BuildBody) {
        var forID = (function () {
            function forID(id) {
                this.id = id;
                switch (id) {
                    case 'index-body':
                        this.buildHTML(id);
                        break;
                    case 'tickets-body':
                        this.buildHTML(id);
                        break;
                }
            }
            forID.prototype.buildHTML = function (id) {
                var container = id;
                var build = id;
                switch (id) {
                    case 'index-body':
                        index_1.Tools.clearPage(container);
                        this.indexBody(build);
                        break;
                    case 'tickets-body':
                        index_1.Tools.clearPage(container);
                        this.ticketsBody(build);
                        break;
                }
            };
            forID.prototype.indexBody = function (id) {
                var indexBody = document.getElementById(id);
                function appendHeader() {
                    var header = document.createElement('header');
                    header.id = 'index-header';
                    header.className = 'default-header';
                    header.style.display = 'grid';
                    indexBody.append(header);
                    this.getHeader('index-header');
                }
                appendHeader();
                function appendIframe() {
                    var iframe = document.createElement('div');
                    iframe.id = 'index-iframe';
                    iframe.className = 'default-iframe';
                    iframe.style.display = 'flex';
                    indexBody.append(iframe);
                    this.getIframe('index-iframe');
                }
                appendIframe();
                function appendMain() {
                    var main = document.createElement('main');
                    main.id = 'index-main';
                    main.className = 'default-main';
                    main.style.display = 'grid';
                    indexBody.append(main);
                    this.getMain('index-main');
                }
                appendMain();
                function appendOverlay() {
                    var overlay = document.createElement('section');
                    overlay.id = 'index-overlay';
                    overlay.className = 'overlay-login';
                    overlay.style.display = 'none';
                    indexBody.append(overlay);
                    this.getOverlay('index-overlay');
                }
                appendOverlay();
            };
            forID.prototype.ticketsBody = function (id) {
                var ticketsBody = document.getElementById(id);
                function appendHeader() {
                    var header = document.createElement('header');
                    header.id = 'tickets-header';
                    header.className = 'default-header';
                    header.style.display = 'grid';
                    ticketsBody.append(header);
                    this.getHeader('tickets-header');
                }
                appendHeader();
                function appendMain() {
                    var main = document.createElement('main');
                    main.id = 'tickets-main';
                    main.className = 'tab-everything';
                    main.style.display = 'grid';
                    ticketsBody.append(main);
                    this.getMain('tickets-main');
                }
                appendMain();
            };
            forID.prototype.getHeader = function (id) {
                index_1.Tools.clearPage(id);
                index_1.Tools.getPage(id);
            };
            forID.prototype.getIframe = function (id) {
                index_1.Tools.clearPage(id);
                index_1.Tools.getPage(id);
            };
            forID.prototype.getMain = function (id) {
                index_1.Tools.clearPage(id);
                index_1.Tools.getPage(id);
            };
            forID.prototype.getOverlay = function (id) {
                index_1.Tools.clearPage(id);
                index_1.Tools.getPage(id);
            };
            return forID;
        }());
        BuildBody.forID = forID;
    })(BuildBody = exports.BuildBody || (exports.BuildBody = {}));
});

//# sourceMappingURL=dist/tools/build-body.js.map
