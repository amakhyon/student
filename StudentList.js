/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
*/

'use strict';

// Utility class for collections of ledger states --  a state list
const StateList = require('./../ledger-api/statelist.js');

const Student = require('./Student.js');

class StudentList extends StateList {

    constructor(ctx) {
        super(ctx, 'StudentList');
        this.use(Student);
    }

    async addStudent(Student) {
        return this.addState(Student);
    }

    async getStudent(StudentKey) {
        return this.getState(StudentKey);
    }

    async updateStudent(Student) {
        return this.updateState(Student);
    }
}


module.exports = StudentList;
