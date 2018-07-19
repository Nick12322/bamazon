DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
 Item_ID INT NOT NULL AUTO_INCREMENT,
 Product_Name VARCHAR(50) NOT NULL,
 Department_Name VARCHAR(50) NOT NULL,
 Price DECIMAL(10,2) NOT NULL,
 Stock_Quantity INT(10),
 PRIMARY KEY (Item_ID)
 );
 
INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ('FortNite', 'Electronics', 60.00, 50);
 
INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ('DSLR Camera', 'Electronics', 600.00, 40);
 
INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ('Sony Laptop', 'Electronics', 1000.00, 50);
 
INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ('Oatmeal', 'Food', 3.50, 50);
 
INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ('Computer Chair', 'Furniture', 75.30, 50);
 
INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ('Case of Water Bottles', 'Food', 7.45, 50);
 
INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ('Das Kapital', 'Books', 12.99, 50);
 
INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ('Amazon Prime', 'Miscellaneous', 100.00, 50);
 
INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ('Nike Shoes', 'Clothing', 95.30, 50);
 
INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ('Adidas Shoes', 'Clothing', 72.00, 50);

SELECT * FROM products;