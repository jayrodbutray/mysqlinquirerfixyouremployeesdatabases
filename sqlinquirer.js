const inquirer = require('inquirer');
const mysql = require('mysql2');
const { createConnection } = require('net');

const db = mysql.createConnection();

function getAllEmployees() {
    return db.query('select * from employees');
}
function getAllDepartments(){
    return db.query('select * from departments');
}
inquirer.prompt {[
    {
        name: 'action',
        type: 'list',
        list: ['action1', 'action2'],
    }
]}.then(async (answers) => {
    switch (answers.action) {
        case 'action1':
            const employees = await getAllEmployees();
            //displays employees
            break;
        case 'action2':
            const departments = await getAllDepartments();
    }
})