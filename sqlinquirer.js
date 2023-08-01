const inquirer = require('inquirer');
const mysql = require('mysql2');
const { createConnection } = require('net');

const db = mysql.createConnection();


function getAllDepartments(){
    return db.query('select * from departments');
}
function getAllRoles() {
    return db.query('select * from roles');
}
function getAllEmployees() {
    return db.query('select * from employees');
}
inquirer.prompt ([
    {
        type: 'list',
        name: 'departments',
        message: 'What would you like to do?',
        list: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    }
]).then(async (answers) => {
    switch (answers.action) {

        case 'view all departments':
            const departments = await getAllDepartments();
            //displays depts
            break;
        case 'view all roles':
                const roles = await getAllRoles();
            //displays roles
            break;
         case 'view all employees':
                const employees = await getAllEmployees();
            //displays employees
            break;
    }
});