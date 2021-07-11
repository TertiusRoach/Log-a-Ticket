define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BuildBody = void 0;
    var BuildBody;
    (function (BuildBody) {
        var forID = (function () {
            function forID(id) {
                this.idSelect = id;
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
                var build = id;
                switch (id) {
                    case 'index-body':
                        this.indexBody(build);
                        break;
                    case 'tickets-body':
                        this.ticketsBody(id);
                        break;
                }
            };
            forID.prototype.clearContainer = function (id) {
                var container = document.getElementById(id);
                container.innerHTML = '';
            };
            forID.prototype.getPage = function (id) {
                $.get(id + ".html", function (data) {
                    $(document.getElementById(id)).html(data);
                });
            };
            forID.prototype.indexBody = function (id) {
                this.clearContainer(id);
                var indexBody = document.getElementById(id);
                var header = document.createElement('header');
                header.id = 'index-header';
                header.className = '';
                header.style.display = 'grid';
                indexBody.append(header);
                this.getHeader('index-header');
                var iframe = document.createElement('div');
                iframe.id = 'index-iframe';
                iframe.className = 'iframe-container';
                iframe.style.display = 'flex';
                indexBody.append(iframe);
                this.getIframe('index-iframe');
                var main = document.createElement('main');
                main.id = 'index-main';
                main.className = '';
                main.style.display = 'grid';
                indexBody.append(main);
                this.getMain('index-main');
                var overlay = document.createElement('section');
                overlay.id = 'index-overlay';
                overlay.className = '';
                overlay.style.display = 'none';
                indexBody.append(overlay);
                this.getOverlay('index-overlay');
            };
            forID.prototype.ticketsBody = function (id) {
                this.clearContainer(id);
                var ticketsBody = document.getElementById(id);
                var header = document.createElement('header');
                header.id = 'tickets-header';
                header.className = '';
                header.style.display = 'grid';
                ticketsBody.append(header);
                this.getHeader('tickets-header');
                var main = document.createElement('main');
                main.id = 'tickets-main';
                main.className = 'tab-everything';
                main.style.display = 'grid';
                ticketsBody.append(main);
                this.getMain('tickets-main');
            };
            forID.prototype.getHeader = function (id) {
                this.clearContainer(id);
                this.getPage(id);
            };
            forID.prototype.getIframe = function (id) {
                this.clearContainer(id);
                this.getPage(id);
            };
            forID.prototype.getMain = function (id) {
                this.clearContainer(id);
                this.getPage(id);
            };
            forID.prototype.getOverlay = function (id) {
                this.clearContainer(id);
                this.getPage(id);
            };
            return forID;
        }());
        BuildBody.forID = forID;
    })(BuildBody = exports.BuildBody || (exports.BuildBody = {}));
});

//# sourceMappingURL=dist/tools/build-body.js.map
