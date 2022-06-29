"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var order_1 = require("./order");
var Menu = /** @class */ (function () {
    function Menu() {
        this.foods = [];
    }
    Menu.prototype.addFood = function () {
        var _a;
        var food = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            food[_i] = arguments[_i];
        }
        this.foods = (_a = this.foods).concat.apply(_a, food);
    };
    Menu.prototype.getListFoods = function () {
        return this.foods;
    };
    Menu.prototype.CustomerOrder = function (tableNumber) {
        var food = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            food[_i - 1] = arguments[_i];
        }
        var newOrder = new order_1.Order(1, tableNumber, food);
    };
    return Menu;
}());
exports.Menu = Menu;
