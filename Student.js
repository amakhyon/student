
'use strict';

// Utility class for ledger state
const State = require('./../ledger-api/state.js');
const Subject = require('./Subject.js');

// Enumerate student state values
const StudentState = {
    ENROLLED: 1,
    REGISTERED: 2,
    UPDATEDGRADES:3
};



class Student extends State {

    constructor({reg, name}) {
        super("Student",[reg,name]); //key consists of reg number and name of student
        subjects = []
        this.reg=reg; this.name=name;, this.subjects=subjects;, this.gpa=0;
    }

   //==============helper functions=================
    getGpa(){ //only A,B,C,D and F
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
   registerSubject(subject){
    this.subjects.push(subject)
   }
    registerTerm(subjects){
        for(var i=0; i < subjects.length; i ++){
            this.registerSubject(subjects[i])
        }
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
   updateGrade(subjectCode,grade){
        this.findSubject(subjectCode).setGrade(grade);
   }    

    /**
     * Useful methods to encapsulate commercial paper states
     */
    setEnrolled(){
        this.currentState = StudentState.ENROLLED;
    }
    setRegistered(){
        this.currentState = StudentState.REGISTERED;
    }
    setUpdatedGrades(){
        this.currentState = StudentState.UPDATEDGRADES;
    }

    isEnrolled() {
        return this.currentState === StudentState.ENROLLED;
    }

    isRegistered() {
        return this.currentState === StudentState.REGISTERED;
    }

    isUpdatedGrades() {
        return this.currentState === Student.UPDATEDGRADES;
    }

    static fromBuffer(buffer) {
        return Student.deserialize(buffer);
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }

    /**
     * Deserialize a state data to commercial paper
     * @param {Buffer} data to form back into the object
     */
    static deserialize(data) {
        return State.deserializeClass(data, Student);
    }



    static getClass() {
        return 'Student';
    }
}

module.exports = Student;
