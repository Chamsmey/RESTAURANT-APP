import { Gender } from "./gender";
import { Staff } from "./staff";


export class Waiter extends Staff{
    constructor( protected name:string,gender:Gender, address:string){
        super(name,gender,address)
    }
    
    // the function to maltiple the salary-----
    
}