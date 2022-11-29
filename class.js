class students {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Hazi Jalal Uddin';
    }

}

const students1 = new students(12,"shuvo");
const students2 = new students(15,"Mahia");
const students3 = new students(30, "Bappy");
console.log(students1, students2,students3);