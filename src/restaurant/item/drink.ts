import { Item } from "./item";
import { ItemType } from "./itemType";


export class Drink extends Item{
    constructor(name: string, price: number, private amountOfDrinks: number) {
        super(ItemType.DRINK, name, price);
    }
}