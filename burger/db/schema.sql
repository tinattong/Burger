-- Create the database day_planner_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(100) NOT NULL,
devoured boolean,
PRIMARY KEY (id)
);


