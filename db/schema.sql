DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(30) NOT NULL,
    PRIMARY KEY (id)
);
