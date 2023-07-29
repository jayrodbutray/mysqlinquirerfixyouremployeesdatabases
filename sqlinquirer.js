const inquirer = require('inquirer');
const mysql = require('mysql2');
const { createConnection } = require('net');

const db = mysql.createConnection();

function getAllEmployees() {
    return db.query('select * from employees');
}

inquirer.prompt {[
    {
        name: '',
        type: 'list',
        list: ['action1', 'action2'],
    }
]}.then((answers) => {

})