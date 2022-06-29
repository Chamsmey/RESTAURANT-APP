import { Drink } from "../../item/drink";
import { Food } from "../../item/food";
import { Item } from "../../item/item";
import { Menu } from "../../item/menu";
import { Cashier } from "../../staffs/cashier";
import { Customer } from "../../staffs/customer";
import { Room } from "../room";
import { Order } from "./order";
import { Table } from "./table";

export class Dining extends Room {
  private tables: Table[] = [];
  private menu: Item[] = [];
  private orders: Order[] = [];
  constructor(name: string, private cashier: Cashier) {
    super(name);
  }
  setCashier(cashier: Cashier) {
    this.cashier = cashier;
  }
  addTable(...table: Table[]) {
    this.tables = this.tables.concat(...table);
  }
  customerOrder(
    customerName: string,
    tableId: number,
    orderDate: string,
    ...items: Item[]
  ) {
    this.orders.push(new Order(tableId, orderDate, customerName, items));
    }
    addFood(other: Drink|Food) {
        let item = other as Item;   
        this.menu.push(item);
    }
    getMenu() {
        return this.menu;
    }
    getTable() {
        return this.tables;
    }
    getOrder() {
        return this.orders;
    }
    getItemBy(name:string){
        for (let order of this.orders) {
            if (order.getCustomer() === name) {
                 return order;
            }
        }
      }
}
