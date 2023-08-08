import { Customer } from "../models/customer.js";
import { Employee } from "../models/employee.js";
import { Student } from "../models/student.js";
import { PersonService } from "../services/listperson.js";

const domId = (id) => document.getElementById(id);

const personService = new PersonService();
var validation = new Validation();

domId("ModalSD").onclick = () => {
    domId("header-title").innerHTML = "ADD STUDENT";
    domId("btnStudent").disabled = false;
    domId("btnUpdateSt").disabled = true;
    domId("maSD").disabled = false;
}
domId("ModalEP").onclick = () => {
    domId("header-title-2").innerHTML = "ADD EMPLOYEE";
    domId("btnEmployee").disabled = false;
    domId("BtnUpdateEp").disabled = true;
    domId("maEP").disabled = false;
}
domId("ModalCT").onclick = () => {
    domId("header-title-3").innerHTML = "ADD CUSTOMER";
    domId("btnCustomer").disabled = false;
    domId("BtnUpdateKH").disabled = true;
    domId("maCT").disabled = false;
}
/** 
 * thêm
*/
//student
const getInfoStudent = (isAdd) => {
    const type = domId("typeSD").value;
    const ma = domId("maSD").value;
    const ten = domId("tenSD").value;
    const email = domId("emailSD").value;
    const diaChi = domId("diaChiSD").value;
    const diemToan = domId("diemToan").value;
    const diemLy = domId("diemLy").value;
    const diemHoa = domId("diemHoa").value;

    let isValid = true;
    if (isAdd) {
        isValid &= validation.checkEmpty(ma, "tbMaSD", "(*)Vui lòng điền mã số ")
            && validation.check(ma, "tbMaSD", "(*)Vui lòng số mã !!!", /^[0-9]+$/)
            && validation.checkDuplicate(ma, "tbMaSD", "mã số đã tồn tại !!!", personService.personList);
            isValid &= validation.checkEmpty(ten, "tbTenSD", "(*)Vui lòng điền họ tên ")
            && validation.check(ten, "tbTenSD", "(*)Vui lòng điền họ tên !!!", "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
    
        isValid &= validation.checkEmpty(diaChi, "tbDCSD", "(*)Vui lòng điền địa chỉ ");
    
        isValid &= validation.checkEmpty(email, "tbEmailSD", "(*)Vui lòng điền email ")
            && validation.check(email, "tbEmailSD", "(*)Vui lòng điền đúng định dạng email !!!", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    
        isValid &= validation.checkEmpty(diemToan, "tbToan", "(*)Vui lòng điền điểm toán ")
            && validation.check(diemToan, "tbToan", "(*)Vui lòng điền số điểm toán !!!", /^[0-9]+$/)
            && validation.kiemTraFromTo(diemToan, "tbToan", "Nhập số từ 1 đến 10 !!!", 1, 10);
    
    
        isValid &= validation.checkEmpty(diemLy, "tbLy", "(*)Vui lòng điền điểm lý ")
            && validation.check(diemLy, "tbLy", "(*)Vui lòng điền số điểm lý !!!", /^[0-9]+$/)
            && validation.kiemTraFromTo(diemLy, "tbLy", "Nhập số từ 1 đến 10 !!!", 1, 10);
    
        isValid &= validation.checkEmpty(diemHoa, "tbHoa", "(*)Vui lòng điền điểm hóa ")
            && validation.check(diemHoa, "tbHoa", "(*)Vui lòng điền số điểm hóa !!!", /^[0-9]+$/)
            && validation.kiemTraFromTo(diemHoa, "tbHoa", "Nhập số từ 1 đến 10 !!!", 1, 10);
    
    }
 if (isValid) {
        const student = new Student(type, ma, ten, email, diaChi, diemToan, diemLy, diemHoa);
        student.tinhDTB();
        return student;
    }
    return null;

        
}
domId("btnStudent").onclick = () => {
    
    const student = getInfoStudent(true);
    if (student) {
        domId("close").click();
         personService.add(student);
        renderTable(personService.personList);
        setLocalStorage();
    }

};
//employee
const getInfoEnployee = (isAdd) => {
    const type = domId("typeEP").value;
    const ma = domId("maEP").value;
    const ten = domId("tenEP").value;
    const email = domId("emailEP").value;
    const diaChi = domId("diaChiEP").value;
    const ngayLam = domId("ngayLam").value;
    const luong = domId("luongCB").value;
    
    let isValid = true;
    if (isAdd) {
        isValid &= validation.checkEmpty(ma, "tbMaEP", "(*)Vui lòng điền mã số")
            && validation.check(ma, "tbMaEP", "Vui lòng số mã ", /^[0-9]+$/)
            && validation.checkDuplicate(ma, "tbMaEP", "mã số đã tồn tại", personService.personList);
            isValid &= validation.checkEmpty(ten, "tbTenEP", "Vui lòng điền họ tên")
        && validation.check(ten, "tbTenEP", "Vui lòng điền họ tên", "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

    isValid &= validation.checkEmpty(diaChi, "tbDiaChiEP", "Vui lòng điền địa chỉ");

    isValid &= validation.checkEmpty(email, "tbEmailEP", "Vui lòng điền email")
        && validation.check(email, "tbEmailEP", "Vui lòng điền đúng định dạng email", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    isValid &= validation.checkEmpty(ngayLam, "tbNgayLam", "Vui lòng điền ngày làm")
        && validation.check(ngayLam, "tbNgayLam", "Vui lòng điền số ngày làm", /^[0-9]+$/);

        isValid &= validation.checkEmpty(luong, "tbLuong", "Vui lòng điền ngày lương")
        && validation.check(luong, "tbLuong", "Vui lòng điền kí tự số", /^[0-9]+$/);
    }
    

    if (isValid) {
        const employee = new Employee(type, ma, ten, email, diaChi, ngayLam, luong);
    employee.tinhLuong();
    return employee;
    }
    return null;

}
domId("btnEmployee").onclick = () => {
    const employee = getInfoEnployee(true);
    if (employee) {
        domId("close2").click();
        personService.add(employee);
        renderTable(personService.personList);
        setLocalStorage();
    }
};
//customer
const getInfoCustomer = (isAdd) => {
    const type = domId("typeCT").value;
    const ma = domId("maCT").value;
    const ten = domId("tenCT").value;
    const email = domId("emailCT").value;
    const diaChi = domId("diaChiCT").value;
    const tenCT = domId("tenCongTy").value;
    const hoaDon = domId("hoaDon").value;
    const danhGia = domId("danhGia").value;
    
    let isValid = true;
    if (isAdd) {
        isValid &= validation.checkEmpty(ma, "tbMaCT", "Vui lòng điền mã số")
            && validation.check(ma, "tbMaCT", "Vui lòng số mã ", /^[0-9]+$/)
            && validation.checkDuplicate(ma, "tbMaCT", "mã số đã tồn tại", personService.personList);
            isValid &= validation.checkEmpty(ten, "tbTenCT", "Vui lòng điền họ tên")
        && validation.check(ten, "tbTenCT", "Vui lòng điền họ tên", "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

    isValid &= validation.checkEmpty(diaChi, "tbDCCT", "Vui lòng điền địa chỉ");

    isValid &= validation.checkEmpty(email, "tbMailCT", "Vui lòng điền email")
        && validation.check(email, "tbMailCT", "Vui lòng điền đúng định dạng email", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    isValid &= validation.checkEmpty(tenCT, "tBTenCT", "Vui lòng nhập tên công ty");

    isValid &= validation.checkEmpty(hoaDon, "tbHoaDon", "Vui lòng nhập giá trị hóa đơn")
        && validation.check(hoaDon, "tbHoaDon", "Vui lòng số giá trị ", /^[0-9]+$/);

    isValid &= validation.checkEmpty(danhGia, "tbDanhGia", "Vui lòng nhập đánh giá");
    }
    

    if (isValid) {
     const customer = new Customer(type, ma, ten, email, diaChi, tenCT, hoaDon, danhGia);
    return customer
    }
    return null;
}
domId("btnCustomer").onclick = () => {
    const customer = getInfoCustomer(true);
    if (customer) {
        domId("close3").click();
        personService.add(customer);
        renderTable(personService.personList);
        setLocalStorage();
    }
}


//render
const renderTable = (data) => {
    const content = data.reduce((total, element) => {
        total +=
            `
            <tr> <td>${element.type}</td>
                <td>${element.ten}</td>
                <td>${element.diaChi}</td>
                <td>${element.ma}</td>
                <td>${element.email}</td>
                
        `
        if (element.type === "Student") {
            total += 
            `<td>${element.dtb}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td> 
            <button onclick="deleteDT('${element.ma}')" class="btn btn-danger"><i class="fa fa-trash"></i></button>
            <button onclick="editStudent('${element.ma}')" id="editStudent" data-toggle="modal" data-target="#myModalStudent" class="btn btn-primary"><i class="fa fa-edit"></i></button>  
            </td>
        </tr >
            `
        } if (element.type === "Employee") {
            total += `
            <td></td>
            <td>${element.tongLuong}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
            <button  onclick="deleteDT('${element.ma}')" class="btn btn-danger"><i class="fa fa-trash"></i></button>
            <button onclick="editEmployee('${element.ma}')" data-toggle="modal" data-target="#myModalEmoloyee" class="btn btn-primary"><i class="fa fa-edit"></i></button>
            </td>
        </tr >
            `
        } if (element.type == "Customer") {
            total += `
            <td></td>
            <td></td>
            <td>${element.tenCT}</td>
            <td>${element.hoaDon}</td>
            <td>${element.danhGia}</td>
            <td>
             <button  onclick="deleteDT('${element.ma}')" class="btn btn-danger"><i class="fa fa-trash"></i></button>
            <button onclick="editCustomer('${element.ma}')" data-toggle="modal" data-target="#myModalCustomer" class="btn btn-primary"><i class="fa fa-edit"></i></button>
            </td>
        </tr >
            `

        }

        return total;
    }, "");
    domId("showBody").innerHTML = content;
}

const setLocalStorage = () => {
    const stringyfy = JSON.stringify(personService.personList);

    localStorage.setItem("KEY", stringyfy);
};
const getLocalStorage = () => {
    const stringify = localStorage.getItem("KEY");

    if (stringify) {
        personService.personList = JSON.parse(stringify);
    }
};
window.onload = () => {
    getLocalStorage();
    renderTable(personService.personList);
}
/**
 * xóa
 */
window.deleteDT = (ma) => {
    personService.delete(ma);
    renderTable(personService.personList);
    setLocalStorage();
}
/**
 * cập nhật
 */

window.editStudent = (studentId) => {
    domId("btnStudent").disabled = true;
    domId("btnUpdateSt").disabled = false;
    domId("maSD").disabled = true;
    domId("header-title").innerHTML = "EDIT";

    const student = personService.findById(studentId);
    const {type, ma, ten, email, diaChi, diemToan, diemLy, diemHoa} = student;
    domId("typeSD").value = type;
    domId("maSD").value = ma;
    domId("tenSD").value = ten;
    domId("emailSD").value = email;
    domId("diaChiSD").value = diaChi;
    domId("diemToan").value = diemToan;
    domId("diemLy").value = diemLy;
    domId("diemHoa").value = diemHoa
}
domId("btnUpdateSt").onclick = () => {
    domId("close").click();
    const student = getInfoStudent(false);
     personService.update(student);
     renderTable(personService.personList);
     setLocalStorage();
}
window.editEmployee = (employeeId) => {
    domId("btnEmployee").disabled = true;
    domId("BtnUpdateEp").disabled = false;
    domId("maEP").disabled = true;
    domId("header-title-2").innerHTML = "EDIT";

    const employee = personService.findById(employeeId);
    const {type, ma, ten, email, diaChi, ngayLam, luong} = employee;
    domId("typeEP").value = type;
    domId("maEP").value = ma;
    domId("tenEP").value = ten;
    domId("emailEP").value = email;
    domId("diaChiEP").value = diaChi;
    domId("ngayLam").value = ngayLam;
    domId("luongCB").value = luong;
}
domId("BtnUpdateEp").onclick = ()=>{
    domId("close2").click();
    const employee = getInfoEnployee(false);
     personService.update(employee);
     renderTable(personService.personList);
     setLocalStorage();
}
window.editCustomer = (customerId) =>{
    domId("btnCustomer").disabled = true;
    domId("BtnUpdateKH").disabled = false;
    domId("maCT").disabled = true;
    domId("header-title-3").innerHTML = "EDIT";

    const customer = personService.findById(customerId);
    const {type, ma, ten, email, diaChi, tenCT, hoaDon, danhGia} = customer;
    domId("typeCT").value = type;
    domId("maCT").value = ma;
    domId("tenCT").value = ten;
    domId("emailCT").value = email;
    domId("diaChiCT").value = diaChi;
    domId("tenCongTy").value = tenCT;
    domId("hoaDon").value = hoaDon;
    domId("danhGia").value = danhGia;
   
}
domId("BtnUpdateKH").onclick= ()=>{
    domId("close3").click();
    const customer = getInfoCustomer(false);
    personService.update(customer);
    renderTable(personService.personList);
    setLocalStorage();
}
window.selectType = () => {
    const selectType = domId("selectType").value;
    let searchType = [];
    for (const index in personService.personList) {
        const object = personService.personList[index];
        if (selectType === object.type) {
            searchType.push(object);
        } if (selectType === "") {
            searchType = personService.personList;
        }

    }
    renderTable(searchType);
}
window.collocation = () => {
    const sapXep = domId("sapXep").value;
    personService.personList.sort((a, b) => {
        if (sapXep === "az") {
            return a.ten.localeCompare(b.ten);
        } if (sapXep === "za") {
            return b.ten.localeCompare(a.ten);
        }
    })
    renderTable(personService.personList);

}