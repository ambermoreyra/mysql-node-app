DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
 item_id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(50) NOT NULL,
 department_name VARCHAR(50) NOT NULL,
 price DECIMAL(13,2) NOT NULL,
 stock_quantity INT NOT NULL,
 PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baseball", "Sporting Goods", 5.00, 22),
("Cat food", "Pet Supplies", 17.99, 47),
("Spatula", "Kitchen", 2.49, 7),
("Desk Lamp", "Office", 12.79, 88),
("Coffee", "Food", 6.99, 36),
("Crackers", "Food", 3.99, 25),
("Sunglasses", "Accessories", 23.49, 71),
("Sprinkler", "Irrigation", 33.29, 11), 
("Pillow", "Bedroom", 9.99, 52),
("Phone Charger", "Electronics", 14.99, 38);

SELECT * FROM products;

