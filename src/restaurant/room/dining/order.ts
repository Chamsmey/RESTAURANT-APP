import { Drink } from "../../item/drink";
import { Food } from "../../item/food";
import { Item } from "../../item/item";
import { Table } from "./table";

export class Order {
  private items: Item[] = [];

  constructor(
    private table: Table,
    private orderDate: String,
    private customer: any
  ) {
  }

  /**
   * add item to order
   * @param other 
   */
  addItem(other: Food|Drink) {
    let  item= other as Item;
    this.items.push(item);
  }
}
