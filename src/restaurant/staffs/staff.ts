import { Person } from "./person";
import { Gender } from "./gender";


export abstract class Staff extends Person {

    constructor(protected name:string,gender:Gender,protected address:string){
        super(name,gender)
    }

    // the function to get the all the salary for staff here----

    
}

