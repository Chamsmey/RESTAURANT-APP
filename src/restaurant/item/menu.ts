import { Food } from "./food";
import { Order } from "../room/dining/order";
import { Drink } from "./drink";

export class Menu {
  public items: (Food | Drink)[] = [];
  addFood(...item: (Food | Drink)[]) {
    this.items = this.items.concat(...item);
  }
  /**
   *
   * @returns items
   */

  getListitems() {
    return this.items;
  }

  /**
   *
   * @param tableNumber
   * @param food
   */
  CustomerOrder(tableNumber: number, ...food: Food[]) {
   
  }
}
