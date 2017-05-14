create database burgers_db
use burgers_db

create table burgers(
id INT AUTO_INCREMENT NOT NULL,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);
