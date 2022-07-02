import { Item } from "./item";
import { ItemType } from "./itemType";

/**
 *  food classs
 */
export class Food extends Item {
  constructor(name: string, price: number) {
    super(ItemType.FOOD, name, price);
  }
  getPrice(): number { return this.price;}
}
/**
 * food type
 */
export enum FoodType {
  SOUP = "SOUP",
  FRY = "FRY",
  DESSERT = "DESSERT",
  GRILL = "GRILL",
}
