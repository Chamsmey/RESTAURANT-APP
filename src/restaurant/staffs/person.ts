
import { Gender } from "./gender";

export abstract class Person {
    constructor(protected name:string,protected gender:Gender){
    }
}