import { Room } from "./room/room";
import { Staff } from "./staffs/staff";

export class Restaurant{
    private staffs: Staff[]=[];
    private rooms: Room[] = [];
    constructor(private name: string, private address: string) { }
    addRoom(room: Room) { this.rooms.push(room); }
    addStaff(staff: Staff) {this.staffs.push(staff); }
    getRoom() {return this.rooms}
    getStaff() { return this.staffs}
 
}

