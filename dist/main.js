"use strict";
exports.__esModule = true;
var restaurant_1 = require("./restaurant");
var dining_1 = require("./room/dining/dining");
var food_1 = require("./item/food");
var table_1 = require("./room/dining/table");
var cashier_1 = require("./staffs/cashier");
var gender_1 = require("./staffs/gender");
var waiter_1 = require("./staffs/waiter");
/**
 * create a restaurant
 */
var narongRTK = new restaurant_1.Restaurant("narongKaka", "11,street, Siem Reap");
// dining room
// cashier
var koko = new cashier_1.Cashier("koko", gender_1.Gender.Male, "1 street, khmer krom");
var dining = new dining_1.Dining("dining room", koko);
narongRTK.addRoom(dining);
narongRTK.addStaff(koko);
// waiter
var chma = new waiter_1.Waiter("chma", gender_1.Gender.Male, "1 street, khmer krom");
var kao = new waiter_1.Waiter("kao", gender_1.Gender.Male, "1 street, phom penh");
var koduko = new waiter_1.Waiter("koduko", gender_1.Gender.Male, "1 street, seim reap");
narongRTK.addStaff(koko);
narongRTK.addStaff(chma);
narongRTK.addStaff(koduko);
// tables
var table1 = new table_1.Table(1, 4, chma);
table1.chairs = 5;
var table2 = new table_1.Table(2, 4, kao);
table2.chairs = 5;
var table3 = new table_1.Table(3, 4, koduko);
dining.addTable(table1, table2);
// // add tables
// dining.addTable(table1, table2, table3);
// menu
// foods 
var chaSagKor = new food_1.Food('cha Sag Kor', 200);
var kkor = new food_1.Food('kkor', 200);
var amok = new food_1.Food('amok', 200);
// order items to
dining.customerOrder("cham psn", 1, "29,june,2022", kkor, amok);
dining.addFood(chaSagKor);
dining.addFood(amok);
dining.addFood(kkor);
// console.log(narongRTK);
// console.log(dining.getMenu());
// console.log(dining.getTable());
console.log(dining.getItemBy("cham psn"));
