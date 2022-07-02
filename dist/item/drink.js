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
exports.Drink = void 0;
var item_1 = require("./item");
var itemType_1 = require("./itemType");
var Drink = /** @class */ (function (_super) {
    __extends(Drink, _super);
    function Drink(name, price, amountOfDrinks) {
        var _this = _super.call(this, itemType_1.ItemType.DRINK, name, price) || this;
        _this.amountOfDrinks = amountOfDrinks;
        return _this;
    }
    Drink.prototype.getPrice = function () { return this.price; };
    return Drink;
}(item_1.Item));
exports.Drink = Drink;
