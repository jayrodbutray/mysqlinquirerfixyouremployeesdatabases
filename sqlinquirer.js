const inquirer = require('inquirer');
const mysql = require('mysql2');
const { createConnection } = require('net');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Janda06232022**',
    database: 'employee_db',

});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database.');

    }
  });

inquirer.prompt ([
    {
        type: 'list',
        name: 'departments',
        message: 'Welcome to your companys employment database. What would you like to do to begin?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
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

function getAllDepartments(){
    return db.query('select * from departments');
}
function getAllRoles() {
    return db.query('select * from roles');
}
function getAllEmployees() {
    return db.query('select * from employees');
}