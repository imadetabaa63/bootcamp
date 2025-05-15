---exercice 1---
-----1---
SELECT DISTINCT name  FROM language;
SELECT  *  FROM film;


----2----
SELECT f.title, f.description, l.name
FROM film f
JOIN language l ON f.language_id = l.language_id;
--select * from language;--
----3--------------
SELECT f.title, f.description, l.name
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;

----4-------------
CREATE TABLE new_film (
    new_film_id INT PRIMARY KEY,
    name VARCHAR(255)
);
select *from new_film;
DROP TABLE  new_film;
---5---
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,  
    film_id INT NOT NULL,                       
    language_id INT NOT NULL,                   
    title VARCHAR(255) NOT NULL,                
    score INT NOT NULL CHECK (score >= 1 AND score <= 10),
    review_text TEXT,                           
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 

    
    FOREIGN KEY (film_id) REFERENCES new_film(new_film_id) ON DELETE CASCADE, 

    
    FOREIGN KEY (language_id) REFERENCES language(language_id)           
);
INSERT INTO new_film (new_film_id,name) 
VALUES ('2','The Dark Knight');

-----6---------
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (2, 2, 'Not bad', 6, 'The movie was okay, but the plot could be improved.');
select * from customer_review;

----7------
DELETE FROM new_film WHERE new_film_id = 2; 



