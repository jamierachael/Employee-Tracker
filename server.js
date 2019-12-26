const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require('console.table');
var mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Cheeseme1",
    database: "Employee_Tracker"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        res.status(500);
        return res.send("There was an error connecting to the database.");
    } console.log("You're connected!");

    // Will be a function related to inquirer prompt data
    runSearch();
    // and/or 
    // connection.query(

    // );
})

connection.query = util.promisify(connection.query);

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View all employees by department",
                "View all employees by manager",
                "Add employee",
                "Remove employee",
                "Update employee role",
                "Update employee manager"
            ]
        }).then(answers => {
            // const userAction = answers.action;

            switch (answers.action) {
                case "View all employees":

                    // Views all employess
                    byEmployees();
                    next();

                    break;
                // Start new case
                case "View all employees by department":
                    byDepartment();

                    inquirer
                        .prompt({
                            name: "department",
                            type: "list",
                            message: "Which department?",
                            choices: [
                                "Sales",
                                "Finance",
                                "Engineering",
                                "Legal"
                            ]
                        }).then(answersDept => {

                            // Start department ID
                            byDepartment();
                            next();
                        })

                    break;
                // Start new case
                case "View all employees by manager":
                    byManager();
                    next();


                // start new case 
                case "Update employee manager":
                    inquirer
                        .prompt({
                            name: "manager",
                            type: "list",
                            message: "Which employee's manager would you like to update?",
                            choices: [
                                "Person 1",
                                "Person 2",
                                "Person 3",
                                "Person 4",
                                "Person 5"
                            ]
                        }).then(answersSetManager => {

                            inquirer
                                .prompt({
                                    name: "setmanager",
                                    type: "list",
                                    message: "Which employee do you want to set as manager for the selected employee?",
                                    choices: [
                                        "Person 1",
                                        "Person 2",
                                        "Person 3",
                                        "Person 4",
                                        "Person 5"
                                    ]
                                })
                        })

                    //     // Run Query - filter by id - display table
                    //     // })

                    break;
                // Start new case
                case "Add employee":
                    inquirer
                        .prompt([
                            {
                                name: "employeeFirst",
                                type: "input",
                                message: "What is the employee's first name?",
                                validate: answer => {
                                    if (answer !== "") {
                                        return true;
                                    }
                                    return "Please enter at least one character.";
                                }
                            },
                            // How do we prompt the next input question?
                            {
                                name: "employeeLast",
                                type: "input",
                                message: "What is the employee's last name?",
                                validate: answer => {
                                    if (answer !== "") {
                                        return true;
                                    }
                                    return "Please enter at least one character.";
                                }
                            },
                            {
                                name: "department",
                                type: "list",
                                message: "What is the employee's role?",
                                choices: [
                                    "Sales",
                                    "Finance",
                                    "Engineering",
                                    "Legal"
                                ]
                            },
                            {
                                name: "manager",
                                type: "list",
                                message: "who is the employee's manager?",
                                choices: [
                                    "Person 1",
                                    "Person 2",
                                    "Person 3",
                                    "Person 4",
                                    "Person 5"
                                ]
                            }
                        ])
                    break;

                case "Remove employee":
                    inquirer
                        .prompt([
                            {
                                name: "employeeFirst",
                                type: "input",
                                message: "What is the employee's first name?",
                                validate: answer => {
                                    if (answer !== "") {
                                        return true;
                                    }
                                    return "Please enter at least one character.";
                                }
                            },
                            // How do we prompt the next input question?
                            {
                                name: "employeeLast",
                                type: "input",
                                message: "What is the employee's last name?",
                                validate: answer => {
                                    if (answer !== "") {
                                        return true;
                                    }
                                    return "Please enter at least one character.";
                                }
                            },
                            {
                                name: "department",
                                type: "list",
                                message: "What is the employee's role?",
                                choices: [
                                    "Sales",
                                    "Finance",
                                    "Engineering",
                                    "Legal"
                                ]
                            },
                            {
                                name: "manager",
                                type: "list",
                                message: "who is the employee's manager?",
                                choices: [
                                    "Person 1",
                                    "Person 2",
                                    "Person 3",
                                    "Person 4",
                                    "Person 5"
                                ]
                            }
                        ])
                    break;

                // }).then(answersId => {
                //     // Run Query - filter by id - display table

                // Start new case
                case "Update employee role":
                    inquirer
                        .prompt([
                            {
                                name: "updatemanager",
                                type: "list",
                                message: "Which employee's role do you want to update?",
                                choices: [
                                    "Person 1",
                                    "Person 2",
                                    "Person 3",
                                    "Person 4",
                                    "Person 5"
                                ]
                            },
                            {
                                name: "department",
                                type: "list",
                                message: "What is the employee's new role?",
                                choices: [
                                    "Sales",
                                    "Finance",
                                    "Engineering",
                                    "Legal"
                                ]
                            }
                        ])

                    break;


                case "Update employee manager":
                    inquirer
                        .prompt([
                            {
                                name: "updatemanager",
                                type: "list",
                                message: "Which employee do you want to update the manager for?",
                                choices: [
                                    "Person 1",
                                    "Person 2",
                                    "Person 3",
                                    "Person 4",
                                    "Person 5"
                                ]
                            },
                            {
                                name: "manager",
                                type: "list",
                                message: "who is the employee's manager?",
                                choices: [
                                    "Person 1",
                                    "Person 2",
                                    "Person 3",
                                    "Person 4",
                                    "Person 5"
                                ]
                            }
                        ])
                //     // }).then(answersId => {
                //     // Run Query - filter by id - display table
                //     // })

                //         default:
                // buildTeam();
            }

        });

    // Add .them
}

function next() {
    inquirer
        .prompt(

            {
                name: "next",
                type: "list",
                message: "What would you like to do next?",
                choices: [
                    "Add employee",
                    "Remove employee",
                    "Update employee role",
                    "Update employee manager"
                ]
            })
}

function byEmployees() {

    var results = connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.d_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",


        function (error, results) {
            if (error) throw error
            console.table(results)
        })

};

function byDepartment() {
    var department = connection.query("SELECT employee.id, employee.first_name, employee.last_name, department.d_name FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id;",


        function (error, department) {
            if (error) throw error
            console.table(department)
        })
};

function byManager() {
    var manager = connection.query("SELECT role.id, role.title, department.d_name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;",


        function (error, manager) {
            if (error) throw error
            console.table(manager)
        })
}

function updateEmployeeManager(employeeId, managerId) {
    return this.connection.query(
        "UPDATE employee SET manager_id = ? WHERE id = ?",
        [managerId, employeeId]
    );
}

// function PromptAllEmployeesbyDepartment() {

//     connection.query('SELECT department.name FROM department;',

//         function (error, results) {
//             if (error) throw error
//             let deptArray = []
//             results.forEach((element) => {
//                 deptArray.push(element.name)

//             });
//             return inquirer.prompt([
//                 {
//                     type: "list",
//                     name: "alldepartments",
//                     message: "which dept?",
//                     choices: deptArray
//                 },
//             ]).then(function (value) {
//                 allEmployeesbyDeptQuery(value)
//             })
//         })
// }
// Run schema, then create the seeds.sql 
// .sql run in database after schema
// npm start 