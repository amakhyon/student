



class Subject {
    constructor(code,name,cr,grade){
        this.name=name; this.code=code; this.cr=cr; this.grade=grade;
    }
    getGrade(){return this.grade}
    setGrade(grade){return this.grade = grade}
    getCrs(){return this.cr}
    getCode(){return this.code}
}

class Student {
        constructor({ state, reg, name, subjects}) {
        subjects = []
        this.state=state; this.reg=reg; this.name=name; this.subjects=subjects; this.gpa=0;
    }


    getSubjects() {
    	return this.subjects;
    }
    addSubject(subj){
    	this.subjects.push(subj)
    }
    getGpa(){
    	let grades = new Map()
    	grades.set('A',12)
    	grades.set('B',9)
    	grades.set('C',6)
    	grades.set('D',3)
    	grades.set('F',0)
    	var sumGr =0
    	var sumCr = 0
    	var gpa = 0
    	for(var i=0; i < this.subjects.length; i++){
    		var subject = this.subjects[i]
    		var grade = subject.getGrade()
    		var gradeNumber = grades.get(grade)
    		sumGr += gradeNumber
    		sumCr +=  subject.getCrs()
    		gpa = sumGr/sumCr
    	}
    	return gpa
    }
    findSubject(code){
    	for(var i =0; i < this.subjects.length; i++){
    		console.log(this.subjects)
    		var subjects = this.getSubjects()
    		var subject = subjects[i];
    		if (subject.code == code)
    			return subject
    	}
    }
}

algebra = new Subject('BA112', 'Algebra',3,'A')
os = new Subject('cs214', 'operating systems',3,'D')
ahmed = new Student('registered','1234','Ahmed')
ahmed.addSubject(os)
ahmed.addSubject(algebra)
ahmed.findSubject('cs214').setGrade('B')
console.log(ahmed.findSubject('cs214'))
//console.log(ahmed.getSubjects()[1].code)