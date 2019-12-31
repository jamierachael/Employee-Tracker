# Employee-Tracker
Homework-10  Employee Tracker

* ['Note-Taker - Git Hub'](https://github.com/jamierachael/Employee-Tracker)
* ['Note-Taker - Git Hub IO'](https://jamierachael.github.io/Employee-Tracker/)
* ['Note-Taker - Demo Video'](https://drive.google.com/file/d/1UsPY5TgoACIBnTQzwXxHiKQnoupE6bFL/view)


### Summary
* This project emphasizes the use of using MySql with Inquirer, NodeJs, console.table and several npm  and json packages to render an employee traking app

### This project has the following features: 
* An Server JS document
    * This provides the logic for the client side of the app, in this case, it used the backend through Node JS. 
* DB Folder
    * Contains a .SQL files for the Employee database and the Seed file with database values
* Package.JSON
    * JSON and NPM packages and dependencies 

### Psuedo code:  
* TDesign the following database schema containing three tables:
* department:
    * id - INT PRIMARY KEY
    * name - VARCHAR(30) to hold department name
* role:
    * id - INT PRIMARY KEY
    * title -  VARCHAR(30) to hold role title
    * salary -  DECIMAL to hold role salary
    * department_id -  INT to hold reference to department role belongs to
* employee:
    * id - INT PRIMARY KEY
    * first_name - VARCHAR(30) to hold employee first name
    * last_name - VARCHAR(30) to hold employee last name
    * role_id - INT to hold reference to role employee has
    * manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
* Build a command-line application that at a minimum allows the user to:
    * Add departments, roles, employees
    * View departments, roles, employees
    * Update employee roles

### This project has script features of:
* Variable declaration area with required entry points
* Inquirer Promps
* Switch Statement with several cases
* Functions for populating tables

### This project features responsive design
### Has responsive layout for: 
* N/A

### To Execute File:
> Open in browser

### Features: 
* One JS Page
    * Server.js
* One JSON package
* Node Modules Folder
* DB folder with two SQL files


### Code Validation 
    * These use W3C Code Validators for HTML, CSS and Javascript
        * Format: ![Validator-HTML](N/A)
        * Format: ![Validator-CSS](N/A)
        * Format: ![Validator-JS](N/A)
        










