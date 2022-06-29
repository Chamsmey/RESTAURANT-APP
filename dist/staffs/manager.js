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
exports.Manager = void 0;
var staff_1 = require("./staff");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, gender, address, workDay) {
        var _this = _super.call(this, firstName, lastName, gender) || this;
        _this.workDay = workDay;
        _this.staffs = [];
        return _this;
    }
    // the function to maltiple the salary-----
    Manager.prototype.getSalary = function () {
        return this.workDay * 12;
    };
    // add all staffs to the manager --------------
    Manager.prototype.addStaff = function (staff) {
        this.staffs.push(staff);
    };
    return Manager;
}(staff_1.Staff));
exports.Manager = Manager;
