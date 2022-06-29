"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(orderNumber, TableOrder, food) {
        this.orderNumber = orderNumber;
        this.TableOrder = TableOrder;
        this.foods = [];
        this.foods = this.foods.concat(food);
    }
    /**
     * @return foods
     * @param food
     */
    Order.prototype.addFood = function (food) {
        this.foods.push(food);
    };
    return Order;
}());
exports.Order = Order;
