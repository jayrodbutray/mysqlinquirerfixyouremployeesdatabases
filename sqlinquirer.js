const inquirer = require('inquirer');
const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Janda06232022**',
    database: 'employee_db',

});

process.stdin.setMaxListeners(20);

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database.');
        menu();
    }
  });
function menu(){

inquirer.prompt ([
    {
        type: 'list',
        name: 'action',
        message: 'Welcome to your companys employment database. What would you like to do to begin?',
        choices: [
            'view all departments', 
            'view all roles', 
            'view all employees', 
            'add a department', 
            'add a role', 
            'add an employee', 
            'update an employee role',
            'Quit',
        ],
    },
])
.then(async (answers) => {

    switch (answers.action) {

        case 'view all departments':
            const departments = await getAllDepartments();
            console.table(departments[0]);
            menu();
            //displays depts
            break;

        case 'view all roles':
                const roles = await getAllRoles();
                console.table(roles[0]);
                menu();
            //displays roles
            break;

         case 'view all employees':
                const employees = await getAllEmployees();
                console.table(employees[0]);
                menu();
            //displays employees
            break;

         case 'add a department':
            inquirer.prompt([
            {
                type: 'input',
                name: 'departmentName',
                message: 'Enter a new department name:',
            }    
            ])
            .then(async (answers) => {
                const addDepartment = answers.departmentName;
                const departmentQuery = `INSERT INTO departments (dept_name) VALUES (?)`;
                try {
                    await db.promise().query(departmentQuery, [addDepartment]);
                    console.log(`Department '${addDepartment}' added successfully!`);
                } catch (error){
                    console.error('Error adding department:', error);
                }
                menu();
            })
            .catch((error) => {
                console.error('Error during inquirer prompt:', error);
                menu();
            });
            break;

        case 'add a role':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'roleName',
                    message: 'Enter a new role:',
                  },
                  {
                    type: 'input',
                    name: 'deptId',
                    message: 'Enter the department name for the role:',
                  },
                  {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter the salary for the role:',
                  },
            ])
            .then(async (answers) => {
                const addRole = answers.roleName;
                const deptId = answers.deptId;
                const salary = answers.salary;
                const roleQuery = 'INSERT INTO roles (job_title, dept_name, salary) VALUES (?, ?, ?)';
                try {
                    await db.promise().query(roleQuery, [addRole, deptId, salary]);
                    console.log(`Role '${addRole}' added successfully!`);
                } catch (error){
                    console.error('Error adding department:', error);
                }
                menu();
            })
            .catch((error) => {
                console.error('Error during inquirer prompt:', error);
                menu();
            });
            break;

            case 'add an employee':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the first name of the employee:',
                  },
                  {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the last name of the employee:',
                  },
                  {
                    type: 'input',
                    name: 'role',
                    message: 'Enter the role for the employee:',
                  },
                  {
                    type: 'list',
                    name: 'deptId',
                    message: 'Which department would you like to add this employee to?',
                    choices: departments
                  },
                  {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter employees salary',
                  },
                  {
                    type: 'input',
                    name: 'reportingManager',
                    message: 'Enter the reporting manager name:',
                    default: null,
                  },
            ])
            .then(async (answers) => {
                const firstName = answers.firstName;
                const lastName = answers.lastName;
                const role = answers.role;
                const deptId = answers.deptId;
                const salary = answers.salary;
                const reportingManager = answers.reportingManager;
                const employeeQuery = 'INSERT INTO employees (first_name, last_name, job_title, dept_name, salary, reporting_manager) VALUES (?, ?, ?, ?, ?, ?)';
                try {
                    await db.promise().query(employeeQuery, [firstName, lastName, role, deptId, salary, reportingManager]);
                    console.log(`Employee '${firstName} ${lastName}' added successfully!`);
                    console.log(answers);
                } catch (error){
                    console.error('Error adding department:', error);
                }
                menu();
            })
            .catch((error) => {
                console.error('Error during inquirer prompt:', error);
                menu();
            });
            break;

            case 'update an employee role':
                inquirer.prompt([
                  {
                    type: 'input',
                    name: 'employeeId',
                    message: 'Enter the ID of the employee you want to update:',
                  },
                  {
                    type: 'input',
                    name: 'newRoleId',
                    message: 'Enter the new role ID for the employee:',
                  },
                ])
                .then(async (answers) => {
                  const employeeId = answers.employeeId;
                  const newRoleId = answers.newRoleId;
                  
                  const updateQuery = 'UPDATE employees SET job_title = ? WHERE id = ?';
                  try {
                    await db.promise().query(updateQuery, [newRoleId, employeeId]);
                    console.log(`Employee with ID '${employeeId}' role updated successfully!`);
                  } catch (error) {
                    console.error('Error updating employee role:', error);
                  }
                  menu();
                })
                .catch((error) => {
                  console.error('Error during inquirer prompt:', error);
                  menu();
                });
              break;

        case 'Exit':
          db.end(); // Close the database connection before exiting the application
          console.log('Goodbye!');
          break;
        default:
          console.log('Invalid choice. Please select a valid option.');
          break;
      }
    })
    .catch((error) => {
      console.error('Error during inquirer prompt:', error);
      db.end();
    });
}

function getAllDepartments() {
  return db.promise().query('SELECT * FROM departments');
}

function getAllRoles() {
  return db.promise().query('SELECT * FROM roles');
}

function getAllEmployees() {
  return db.promise().query('SELECT * FROM employees');
}







