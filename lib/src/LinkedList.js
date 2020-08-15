"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinkedList = (function () {
    function LinkedList(items) {
        if (items === void 0) { items = null; }
        this._head = null;
        this._count = 0;
        if (items !== null) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                this.push(item);
            }
        }
    }
    Object.defineProperty(LinkedList.prototype, "head", {
        get: function () {
            return this._head;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.setHead = function (item) {
        if (item === null)
            throw new Error('Invalid value');
        this._head = item;
    };
    Object.defineProperty(LinkedList.prototype, "tail", {
        get: function () {
            var node = this._head;
            while (node !== null && node.next !== null)
                node = node.next;
            return node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "size", {
        get: function () {
            return this._count;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.clear = function () {
        this._count = 0;
        this._head = null;
    };
    LinkedList.prototype.push = function (item) {
        var node = {
            value: item,
            next: null
        };
        if (this.tail !== null) {
            this.tail.next = node;
        }
        else {
            this.setHead(node);
        }
        this._count++;
        return this;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList.js.map