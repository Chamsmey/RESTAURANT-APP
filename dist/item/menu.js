"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu() {
        this.items = [];
    }
    Menu.prototype.addFood = function () {
        var _a;
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        this.items = (_a = this.items).concat.apply(_a, item);
    };
    /**
     *
     * @returns items
     */
    Menu.prototype.getListitems = function () {
        return this.items;
    };
    /**
     *
     * @param tableNumber
     * @param food
     */
    Menu.prototype.CustomerOrder = function (tableNumber) {
        var food = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            food[_i - 1] = arguments[_i];
        }
    };
    return Menu;
}());
exports.Menu = Menu;
