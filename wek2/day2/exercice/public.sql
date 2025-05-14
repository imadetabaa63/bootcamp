select* from customers;
SELECT *
FROM items
ORDER BY price ASC;

SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;

SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;

SELECT last_name
FROM customers
ORDER BY last_name DESC;


--ex2
select* from film;

select concat(first_name,' ', last_name)as Full_name from customer;

select distinct create_date from customer;

SELECT *
FROM customer
ORDER BY first_name DESC;
 select film_id, title, description, release_year, rental_rate from film ORDER BY rental_rate ASC;
 select * from address;
 
select  address,phone from address where district ='Texas';
select * from film;

select * from film where film_id in (15,150);

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Apollo Teen';

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Ap%';

SELECT film_id, title, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

/*12*/
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM  customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id ASC;
SELECT f.film_id, f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.film_id IS NULL;
select* from inventory ;
SELECT c.city, co.country
FROM city c
JOIN country co ON c.country_id = co.country_id;

SELECT 
    c.customer_id, 
    c.first_name, 
    c.last_name, 
    p.amount, 
    p.payment_date
FROM payment p
JOIN customer c ON p.customer_id = c.customer_id
WHERE p.staff_id = 3;
ORDER BY p.payment_date;
select*from staff;

















