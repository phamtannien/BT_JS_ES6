export class PersonService{
    personList = [];
    add = (doiTuong)=>{
        this.personList=[...this.personList, doiTuong]
    };
    delete = (ma)=>{
        const index = this.personList.findIndex((element) => {

            return element.ma === ma;
        });
        this.personList.splice(index, 1);
    }
    findById = (ma) => {
        return this.personList.find((element) => {
            return element.ma === ma;
        });
    };
    update(object) {
        const index = this.personList.findIndex((element) => {
            return element.ma === object.ma;
        });
        this.personList[index] = object;
    }
}