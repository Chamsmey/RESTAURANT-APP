import { Gender } from "./gender";
import { Person } from "./person";

export class Customer extends Person{
   constructor(protected name :string,gender:Gender,address:string){
    super(name,gender)
   }
}