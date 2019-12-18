DROP DATABASE IF EXISTS Employee_Tracker;
CREATE DATABASE Employee_Tracker;
USE Employee_Tracker;

CREATE TABLE id(
id INTEGER, 
name VARCHAR(30),
PRIMARY KEY(id)
);

CREATE TABLE role(
id INTEGER, 
title VARCHAR(30),
salary decimal,
department_id INTEGER,
PRIMARY KEY(id)
);

CREATE TABLE employee (
id INTEGER, 
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER,
manager_id INTEGER,
PRIMARY KEY(id)
);