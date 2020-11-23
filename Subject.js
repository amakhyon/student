class Subject {
    constructor(code,name,cr,grade){
        this.name=name; this.code=code; this.cr=cr; this.grade=grade;
    }
    setGrade(grade){ this.grade = grade}
    getGrade(){return this.grade}
    getCrs(){return this.cr}
    getCode(){return this.code}
}



algebra = new Subject('BA112', 'Algebra',3,'U')
OS = new Subject('CS213', 'operating systems',3,'U')
networks = new Subject('CS120', 'introduction to networks',3,'U')
dataStructures = new Subject('CS203', ' introduction to data structures',3,'U')
algorithms = new Subject('CS210', 'introduction to algorithms',3,'U')

OS.setGrade('A+')
console.log(OS.getGrade())
module.exports = Subject;