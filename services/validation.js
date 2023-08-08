const domId = (id) => document.getElementById(id);
function Validation() {
    this.checkEmpty = (value, iderror, mess) => {
        if (value == "") {
            domId(iderror).innerHTML = mess;
            domId(iderror).style.display = "block";

            return false;
        } else {
            domId(iderror).innerHTML = "";
            domId(iderror).style.display = "none";

            return true;
        }
    };
    this.check = (value, iderror, mess, letter) => {
        if (value.match(letter)) {
            domId(iderror).innerHTML = "";
            domId(iderror).style.display = "none";

            return true;
        }
        domId(iderror).innerHTML = mess;
        domId(iderror).style.display = "block";

        return false;
    };
    this.checkDuplicate = function (value, iderror, mess, personList) {
        var isExist = false;
        for (var i = 0; i < personList.length; i++) {
            var object = personList[i];
            if (object.ma === value) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            domId(iderror).innerHTML = mess;
            domId(iderror).style.display = "block";
            return false;
        } else {
            domId(iderror).innerHTML = "";
            domId(iderror).style.display = "none";

            return true;
        }

    };
    this.kiemTraFromTo = function (value, iderror, mess, min, max) {
        if (min <= value && value <= max) {
            domId(iderror).innerHTML = "";
            domId(iderror).style.display = "none";

            return true;
        }
        domId(iderror).innerHTML = mess;
        domId(iderror).style.display = "block";

        return false;

    };



};
