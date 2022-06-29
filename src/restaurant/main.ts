import { Restaurant } from "./restaurant";
import { Dining } from "./room/dining/dining";
import { Food, FoodType } from "./item/food";
import { Menu } from "./item/menu";
import { Table } from "./room/dining/table";
import { Cashier } from "./staffs/cashier";
import { Gender } from "./staffs/gender";
import { Waiter } from "./staffs/waiter";

/**
 * create a restaurant
 */

let narongRTK = new Restaurant("narongKaka", "11,street, Siem Reap");
// dining room
// cashier
let koko = new Cashier("koko", Gender.Male, "1 street, khmer krom");
let dining = new Dining("dining room", koko);
narongRTK.addRoom(dining);
narongRTK.addStaff(koko);
// waiter
let chma = new Waiter("chma", Gender.Male, "1 street, khmer krom");
let kao = new Waiter("kao", Gender.Male, "1 street, phom penh");
let koduko = new Waiter("koduko", Gender.Male, "1 street, seim reap");

narongRTK.addStaff(koko);
narongRTK.addStaff(chma);
narongRTK.addStaff(koduko);

// tables
let table1 = new Table(1,4,chma);
table1.chairs = 5;
let table2 = new Table(2,4,kao);
table2.chairs = 5;
let table3 = new Table(3,4,koduko);
dining.addTable(table1, table2);

// // add tables
// dining.addTable(table1, table2, table3);

// menu


// foods 
let chaSagKor = new Food('cha Sag Kor',200);
let kkor = new Food('kkor',200);
let amok = new Food('amok', 200);

// order items to

dining.customerOrder("cham psn",1, "29,june,2022", kkor, amok);

dining.addFood(chaSagKor);
dining.addFood(amok);
dining.addFood(kkor);
// console.log(narongRTK);
// console.log(dining.getMenu());
// console.log(dining.getTable());
console.log(dining.getItemBy("cham psn"));

