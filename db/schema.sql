CREATE DATABASE heandshe_db;

USE heandshe_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username NOT NULL VARCHAR(255), 
    userpassword VARCHAR(255) NULL,
    firstname VARCHAR(255) NULL,
    lastname VARCHAR(255) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE usersearches (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    searchlocation VARCHAR(255) NOT NULL,
    traveldistance INT(10) NOT NULL,
    hourstospend INT(10) NOT NULL,
    userdate VARCHAR(255) NOT NULL,
    starttime VARCHAR(4) NOT NULL,
    experiencetype VARCHAR(1020) NOT NULL,
    searchtime DATETIME DEFAULT   CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);