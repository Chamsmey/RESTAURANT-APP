"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(tableId, orderDate, customerName, items) {
        this.tableId = tableId;
        this.orderDate = orderDate;
        this.customerName = customerName;
        this.items = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var i = items_1[_i];
            var item = i;
            this.items.push(item);
        }
    }
    Order.prototype.getCustomer = function () {
        return this.customerName;
    };
    return Order;
}());
exports.Order = Order;
