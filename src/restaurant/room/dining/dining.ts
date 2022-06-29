import { Room } from "../room";
import { Order } from "./order";
import { Table } from "./table";


export class Dining extends Room {
    private tables: Table[]=[];
    private cashier: any;
    private orders : Order[] = [];
    constructor(name:string) {
        super(name);
    }
    addTable(...table: Table[]) {
        this.tables = this.tables.concat(...table);
    }
}