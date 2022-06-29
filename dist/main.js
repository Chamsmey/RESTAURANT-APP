"use strict";
exports.__esModule = true;
var restaurant_1 = require("./restaurant");
var dining_1 = require("./room/dining/dining");
var food_1 = require("./room/dining/food");
var menu_1 = require("./room/dining/menu");
var table_1 = require("./room/dining/table");
/**
 * create a restaurant
 */
var narongRTK = new restaurant_1.Restaurant("narongKaka", "11,street, Siem Reap");
// dining room
var dining = new dining_1.Dining("dining room");
// tables
var table1 = new table_1.Table(1);
table1.chairs = 5;
var table2 = new table_1.Table(1);
table2.chairs = 5;
var table3 = new table_1.Table(1);
table3.chairs = 5;
// add tables
dining.addTable(table1, table2, table3);
// menu
// foods 
var chaSagKor = new food_1.Food('cha Sag Kor', 200, food_1.FoodType.FRY);
var kkor = new food_1.Food('kkor', 200, food_1.FoodType.SOUP);
var amok = new food_1.Food('amok', 200, food_1.FoodType.DESSERT);
var menu = new menu_1.Menu();
menu.addFood(chaSagKor, kkor, amok);
console.log(menu.getListFoods()[1]);
