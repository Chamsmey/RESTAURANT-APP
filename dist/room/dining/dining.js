"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dining = void 0;
var room_1 = require("../room");
var order_1 = require("./order");
var Dining = /** @class */ (function (_super) {
    __extends(Dining, _super);
    function Dining(name, cashier) {
        var _this = _super.call(this, name) || this;
        _this.cashier = cashier;
        _this.tables = [];
        _this.menu = [];
        _this.orders = [];
        return _this;
    }
    Dining.prototype.setCashier = function (cashier) {
        this.cashier = cashier;
    };
    Dining.prototype.addTable = function () {
        var _a;
        var table = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            table[_i] = arguments[_i];
        }
        this.tables = (_a = this.tables).concat.apply(_a, table);
    };
    Dining.prototype.customerOrder = function (customerName, tableId, orderDate) {
        var items = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            items[_i - 3] = arguments[_i];
        }
        this.orders.push(new order_1.Order(tableId, orderDate, customerName, items));
    };
    Dining.prototype.addFood = function (other) {
        var item = other;
        this.menu.push(item);
    };
    Dining.prototype.getMenu = function () {
        return this.menu;
    };
    Dining.prototype.getTable = function () {
        return this.tables;
    };
    Dining.prototype.getOrder = function () {
        return this.orders;
    };
    Dining.prototype.getItemBy = function (name) {
        var orders = [];
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var order = _a[_i];
            if (order.getCustomer() === name) {
                orders.push(order);
            }
        }
        return orders;
    };
    Dining.prototype.avoid = function (name) {
        var orders = this.getItemBy(name);
        var total = 0;
        for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
            var order = orders_1[_i];
            total += order.getTotal();
        }
        return total;
    };
    return Dining;
}(room_1.Room));
exports.Dining = Dining;
