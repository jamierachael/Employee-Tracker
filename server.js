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
                    break;
                // Start new case
                //     case "View all employees by department":
                //         inquirer
                //             .prompt({
                //                 name: "department",
                //                 type: "list",
                //                 message: "Which department?",
                //                 choices: [
                //                     "Sales",
                //                     "Finance",
                //                     "Engineering",
                //                     "Legal"
                //                 ]
                //             })
                // }).then(answersId.department) => {
                //     // Run Query - filter by id - display table

                // Start department ID
                // console.table([
                //     {
                //         table: 'role',
                //         id: 'foo',
                //         title: 10,
                //         salary: 10,
                //         department_id: 10
                //     }
                // ]);
                //     // })

                // break;
                // Start new case
                // case "View all employees by department":
                //     inquirer
                //     // .prompt({
                //     //     name: "department",
                //     //     type: "list",
                //     //     message: "What would you like to do?",
                //     //     choices: [
                //     //         "View all employees",
                //     //         "View all employees by department",
                //     //         "View all employees by manager",
                //     //         "Add employee",
                //     //         "Remove employee",
                //     //         "Update employee role",
                //     //         "Update employee manager"
                //     //     ]
                //     // })
                //     // }).then(answersId => {
                //     // Run Query - filter by id - display table
                //     // })

                // break;
                // Start new case
                // case "View all employees by department":
                //     inquirer
                //     // .prompt({
                //     //     name: "department",
                //     //     type: "list",
                //     //     message: "What would you like to do?",
                //     //     choices: [
                //     //         "View all employees",
                //     //         "View all employees by department",
                //     //         "View all employees by manager",
                //     //         "Add employee",
                //     //         "Remove employee",
                //     //         "Update employee role",
                //     //         "Update employee manager"
                //     //     ]
                //     // })
                //     // }).then(answersId => {
                //     // Run Query - filter by id - display table
                //     // })

                // break;
                // Start new case
                // case "View all employees by department":
                //     inquirer
                //     // .prompt({
                //     //     name: "department",
                //     //     type: "list",
                //     //     message: "What would you like to do?",
                //     //     choices: [
                //     //         "View all employees",
                //     //         "View all employees by department",
                //     //         "View all employees by manager",
                //     //         "Add employee",
                //     //         "Remove employee",
                //     //         "Update employee role",
                //     //         "Update employee manager"
                //     //     ]
                //     // })
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