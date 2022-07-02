import { Drink } from "../../item/drink";
import { Food } from "../../item/food";
import { Item } from "../../item/item";
import { Customer } from "../../staffs/customer";
import { Table } from "./table";

export class Order {
  private items: Item[] = [];

  constructor(
    private tableId: number,
    private orderDate: String,
    private customerName: string,
    items: Item[]
    
  ) {
    for (let i of items) {
      let item = i as Item;
      this.items.push(item);
    }
  }

  getCustomer(){
    return this.customerName;
  }
  getTotal() {
    let total: number = 0;
    for (let item of this.items) {
      total += item.getPrice();
    }
    return total;
  }
  /**
   * add item to order
   * @param other 
   */
}
