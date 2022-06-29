"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(name, address) {
        this.name = name;
        this.address = address;
        this.staffs = [];
        this.room = [];
    }
    Restaurant.prototype.addRoom = function (room) { this.room.push(room); };
    Restaurant.prototype.addStaff = function (staff) { this.staffs.push(staff); };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
