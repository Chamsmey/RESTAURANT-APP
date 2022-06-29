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
var Dining = /** @class */ (function (_super) {
    __extends(Dining, _super);
    function Dining(name) {
        var _this = _super.call(this, name) || this;
        _this.tables = [];
        return _this;
    }
    Dining.prototype.addTable = function () {
        var _a;
        var table = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            table[_i] = arguments[_i];
        }
        this.tables = (_a = this.tables).concat.apply(_a, table);
    };
    return Dining;
}(room_1.Room));
exports.Dining = Dining;
