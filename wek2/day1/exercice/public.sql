--hghg
select* from customers
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY, 
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL 
);
 
INSERT INTO items (name, price) VALUES
    ('Petit bureau', 100),
    ('Grand bureau', 300),
    ('Ventilateur', 80);

ALTER TABLE items
DROP COLUMN stock_quantity;

ALTER TABLE customers
DROP COLUMN address;

INSERT INTO customers (first_name, last_name) VALUES
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');
	
    
    SELECT * FROM items
WHERE price > 80;

SELECT * FROM items
WHERE price <= 300;

SELECT * FROM customers
WHERE last_name = 'Smith';

SELECT * FROM customers
WHERE last_name = 'Jones';

SELECT * FROM customers
WHERE first_name != 'Scott';


