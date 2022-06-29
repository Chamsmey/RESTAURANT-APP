import { Waiter } from "../../staffs/waiter";

export class Table {
  constructor(public tableId: number, public chairs: number,private waiter: Waiter) {}
}
