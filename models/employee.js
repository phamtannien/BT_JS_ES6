import { Person } from "./person.js";

export class Employee extends Person {
    constructor(type, ma, ten, email, diaChi, ngayLam, luong ){
        super(type, ma, ten, email, diaChi);
        this.ngayLam = ngayLam;
        this.luong = luong;
        
    }
    tinhLuong = () => {
        this.tongLuong = this.ngayLam * this.luong;
    }
}