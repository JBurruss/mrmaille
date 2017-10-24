CREATE DATABASE mrmaille;

USE mrmaille;

CREATE TABLE Products (
ItemID int NOT NULL,
ProductName varchar(50) NOT NULL,
Price DECIMAL(4,2) NOT NULL,
StockQuantity int NOT NULL);

INSERT INTO Products (ItemID, ProductName, Price, StockQuantity) VALUES (
12345,
'Hauberk',
89.99,
25);

INSERT INTO Products (ItemID, ProductName, Price, StockQuantity) VALUES (
67891,
'Coif',
29.99,
25);

INSERT INTO Products (ItemID, ProductName, Price, StockQuantity) VALUES (
23456,
'Haubergon',
55.99,
10);

INSERT INTO Products (ItemID, ProductName, Price, StockQuantity) VALUES (
78912,
'Pixane',
35.99,
8);