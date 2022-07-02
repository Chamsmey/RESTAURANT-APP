import { ItemType } from "./itemType";

export abstract class Item{
    constructor(protected itemType: ItemType, protected name: string, protected price: number) { }
    abstract getPrice(): number;
}