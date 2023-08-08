import { Person } from "./person.js";

export class Student extends Person{
    constructor(type, ma, ten, email, diaChi, diemToan, diemLy, diemHoa ){
        super(type, ma, ten, email, diaChi);
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    tinhDTB = () => {
        this.dtb = (parseFloat(this.diemToan) +
            parseFloat(this.diemLy) +
            parseFloat(this.diemHoa)) /
            3;
    };
       
}