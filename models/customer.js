import { Person } from "./person.js";

export class Customer extends Person {
    constructor(type, ma, ten, email, diaChi, tenCT, hoaDon, danhGia ){
        super(type, ma, ten, email, diaChi);
        this.tenCT = tenCT;
        this.hoaDon = hoaDon;
        this.danhGia = danhGia;
    }
}