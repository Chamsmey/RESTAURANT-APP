import { Restaurant } from "./restaurant";
import { Dining } from "./room/dining/dining";
import { Food, FoodType } from "./item/food";
import { Menu } from "./item/menu";
import { Table } from "./room/dining/table";

/**
 * create a restaurant
 */

let narongRTK = new Restaurant("narongKaka", "11,street, Siem Reap");
// dining room

let dining = new Dining("dining room");
// tables

let table1 = new Table(1);
table1.chairs = 5;
let table2 = new Table(1);
table2.chairs = 5;
let table3 = new Table(1);
table3.chairs = 5;

// add tables
dining.addTable(table1, table2, table3);

// menu


// foods 
let chaSagKor = new Food('cha Sag Kor',200);
let kkor = new Food('kkor',200);
let amok = new Food('amok', 200);

let menu = new Menu();
menu.addFood(chaSagKor, kkor, amok);

console.log(menu.getListFoods()[1]);

