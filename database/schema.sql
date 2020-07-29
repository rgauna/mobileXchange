-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS mobileXchange;
-- Creates the "blogger" database --
CREATE DATABASE mobileXchange;
-- Uses the mobileXchange database--
USE DATABASE mobileXchange;
--Table for buying cell phones--
CREATE TABLE buying (
    id INTEGER NOT NULL AUTO_INCREMENT,
    phone_name VARCHAR(100) NOT NULL,
    describes TEXT NOT NULL,
    total_price DECIMAL (4, 2) NOT NULL,
    img_src VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
--Table for selling cell phones--
CREATE TABLE selling (
    id INTEGER NOT NULL AUTO_INCREMENT,
    phoneName VARCHAR(100) NOT NULL,
    descriptions TEXT NOT NULL,
    selling_price DECIMAL (4, 2) NOT NULL,
    PRIMARY KEY (id)
);