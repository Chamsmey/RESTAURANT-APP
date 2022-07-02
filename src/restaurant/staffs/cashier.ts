import { Gender } from "./gender";
import { Staff } from "./staff";

export class Cashier extends Staff{
    constructor( protected name:string,gender:Gender, address:string){
        super(name,gender,address)
    }
}