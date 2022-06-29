import { Room } from "./room/room";
import { Staff } from "./staffs/staff";

export class Restaurant{
    private staffs: Staff[]=[];
    private room: Room[] = [];
    constructor(private name: string, private address: string) { }
    addRoom(room: Room) { this.room.push(room); }
    addStaff(staff: Staff) {this.staffs.push(staff); }
    // getRoom(room: any) { }
    // getStaff(room: any) { }
 
}

