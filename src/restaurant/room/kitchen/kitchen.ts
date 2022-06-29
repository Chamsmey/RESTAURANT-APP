import { Food } from "../../item/food";
import { Room } from "../room";
import { Meat } from "./meat";
import { Vigatable } from "./vigatable";

class Kitchen extends Room {
  vigatable: Vigatable[];
  meats: Meat[];
  constructor(name: string) {
    super(name);
  }
  cookFood(food: Food) {}
  getFood(food: Food) {}
}
