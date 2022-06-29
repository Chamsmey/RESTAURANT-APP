import { ItemType } from "./itemType";

export abstract class Item{
    constructor(itemType: ItemType,name:string,price:number){}
}