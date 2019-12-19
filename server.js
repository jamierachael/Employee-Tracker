const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require('console.table');
var mysql = require("mysql");

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

// console.table([
//     {
//       name: 'foo',
//       age: 10
//     }, {
//       name: 'bar',
//       age: 20
//     }
//   ]);

// Example: 
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
                    // start copy paste 
                    // var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
                    // connection.query(query, [answer.start, answer.end], function(err, res) {
                    //   if (err) throw err;
                    //   for (var i = 0; i < res.length; i++) {
                    // Instead of console.log use console.table below: 

                    console.table([
                        {
                            table: 'employee',
                            id: 'foo',
                            first_name: 10,
                            last_name: 10,
                            role_id: 10,
                            manager_id: 10,
                        }
                    ]);
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
                    break;
                // Start new case
                case "View all employees by department":
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
                        }).then(answersId => {
                            //     // Run Query - filter by id - display table

                            // Start department ID
                            console.table([
                                {
                                    table: 'role',
                                    id: 'foo',
                                    title: 10,
                                    salary: 10,
                                    department_id: 10
                                }
                            ]);
                        })

                    break;
                // Start new case
                case "View all employees by manager":
                    console.table([
                        {
                            table: 'employee',
                            id: 'foo',
                            first_name: 10,
                            last_name: 10,
                            role_id: 10,
                            manager_id: 10,
                        }
                    ]);

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

// Run schema, then create the seeds.sql 
// .sql run in database after schema
// npm start 