"use strict";
/**
 *  food classs
 */
exports.__esModule = true;
exports.FoodType = exports.Food = void 0;
var Food = /** @class */ (function () {
    function Food(name, price, foodType) {
        this.name = name;
        this.price = price;
        this.foodType = foodType;
    }
    return Food;
}());
exports.Food = Food;
/**
 * food type
 */
var FoodType;
(function (FoodType) {
    FoodType["SOUP"] = "SOUP";
    FoodType["FRY"] = "FRY";
    FoodType["DESSERT"] = "DESSERT";
    FoodType["GRILL"] = "GRILL";
})(FoodType = exports.FoodType || (exports.FoodType = {}));
