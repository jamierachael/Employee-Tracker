const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require('console.table');
var mysql = require("mysql");
const util = require("util");

// Logo requirements: 
const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());

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

            switch (answers.action) {
                // Start new case
                case "View all employees":

                    byEmployees();
                    runSearch();

                    break;
                // Start new case
                case "View all employees by department":

                    byDepartment();
                    runSearch();

                    break;

                case "View all employees by manager":

                    byManager();
                    runSearch();

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
                                type: "input",
                                message: "Please enter the role id",

                            },
                            {
                                name: "manager",
                                type: "input",
                                message: "Please enter manager id",
                            }
                        ]).then(answers => {

                            addEmployee(answers.employeeFirst, answers.employeeLast, answers.department, answers.manager);
                        })

                    break;
                // Start new case
                case "Remove employee":
                    inquirer
                        .prompt([
                            {
                                name: "id",
                                type: "input",
                                message: "Please enter the Employee id",

                            }
                        ]).then(answers => {

                            removeEmployee(answers.id);
                        })
                    break;

                // Start new case
                case "Update employee role":

                    inquirer
                        .prompt([
                            {
                                name: "employeeId",
                                type: "input",
                                message: "Please enter employee's id",
                            },
                            {
                                name: "roleId",
                                type: "input",
                                message: "Please enter role's id",

                            }

                        ]).then(answers => {
                            updateByRole(answers.employeeId, answers.roleId);

                        })

                    break;
                // Start new case
                case "Update employee manager":

                    inquirer
                        .prompt([
                            {
                                name: "manager",
                                type: "input",
                                message: "Please enter manager id",
                            },
                            {
                                name: "Employee",
                                type: "input",
                                message: "Please enter employee id",

                            }
                        ]).then(answers => {
                            updateByManager(answers.manager, answers.Employee);
                            // runSearch();
                            byManager();
                        })

                    break;
            }

        });
}

// "View all employees",
function byEmployees() {

    var results = connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.d_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",


        function (error, results) {
            if (error) throw error
            console.table(results)
        })

};

// "View all employees by department",
function byDepartment() {

    var department = connection.query("SELECT employee.id, employee.first_name, employee.last_name, department.d_name FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id;",


        function (error, department) {
            if (error) throw error
            console.table(department)
        })
};

// "View all employees by manager",
function byManager() {

    var manager = connection.query("SELECT employee.id, employee.first_name, employee.last_name, department.d_name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id",


        function (error, manager) {
            if (error) throw error
            console.table(manager)
        })
}


// "Update employee manager"
function updateByManager(managerId, employeeId) {

    var byManager = connection.query(
        "UPDATE employee SET manager_id = ? WHERE id = ?",
        [managerId, employeeId],
        function (error, manager) {
            if (error) throw error
            console.table(manager)
        })

}

// "Add employee"
function addEmployee(employeeFirst, employeeLast, department, manager) {

    var add = connection.query(
        "INSERT INTO employee SET first_name = ?, last_name = ?, role_id = ?, manager_id = ?",
        [employeeFirst, employeeLast, department, manager],
        function (error, manager) {
            if (error) throw error
        })

    byEmployees();
}

// "Remove employee"
function removeEmployee(id) {

    var add = connection.query(
        "DELETE FROM employee WHERE id = ?",
        [id],
        function (error, id) {
            if (error) throw error
        })

    byEmployees();
}

// "Update employee role",
function updateByRole(employeeId, roleId) {

    var byRole = connection.query(
        "UPDATE employee SET role_id = ? WHERE id = ?",

        [roleId, employeeId],
        function (error, role) {
            if (error) throw error

        })
    byDepartment();

}

