/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Fabric smart contract classes
const { Contract, Context } = require('fabric-contract-api');

// PaperNet specifc classes
const Student = require('./Student.js');
const StudentList = require('./StudentList.js');

/**
 * A custom context provides easy access to list of all students
 */
class StudentContext extends Context {

    constructor() {
        super();
        // All students are held in a list of papers
        this.StudentList = new StudentList(this);
    }

}

/**
 * Define Student smart contract by extending Fabric Contract class
 *
 */
class StudentContract extends Contract {

    constructor() {
        // Unique namespace when multiple contracts per chaincode file
        super('Student');
    }

    /**
     * Define a custom context for Student
    */
    createContext() {
        return new StudentContext();
    }

 
    /**===============data types==============

		reg 
		name
		subjects => array of the subject object
		key consists of reg + name
		
    **/

    /**===========query====================

		=you retrieve an asset by querying the blockchain using it's key
		=this key consists of a pair of it's data, in this case it's registration number + name



    **/
  
    async enroll(ctx, reg, name){ 
    	let student = Student(reg,name);
    	student.setEnrolled();
    	await ctx.StudentList.addStudent(student);
    	return student;
    }
	async register(ctx, reg, name,subjects){ //be careful, you need to load an array of "Subject" objects here to properly register
    	let studentkey = Student.makeKey(reg,name);
    	let student = await ctx.StudentList.getStudent(studentkey);
    	student.registerTerm(subjects)
    	await ctx.StudentList.updateStudent(student);
    	return student;
    }
    async updateGrade(ctx, reg, name,grade,subjectCode){ //grade is just a string like so 'A' while subject is a subject code like so 'CS214'
    	let studentkey = Student.makeKey(reg,name);
    	let student = await ctx.StudentList.getStudent(studentkey);
    	student.updateGrade(subjectCode,grade);
    	await ctx.StudentList.updateStudent(student);
    	return student;
    }

}

module.exports = StudentContract;
