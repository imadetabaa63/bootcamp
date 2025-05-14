CREATE TABLE étudiants (
    identifiant SERIAL PRIMARY KEY,
    nom_de_famille VARCHAR(100) NOT NULL,
    prénom VARCHAR(100) NOT NULL
);
ALTER TABLE étudiants
ADD COLUMN date_de_naissance DATE;
select*from étudiants


INSERT INTO étudiants (identifiant, prénom, nom_de_famille, date_de_naissance) VALUES
    (1, 'Marc', 'Bénichou', '1998-11-02'),
    (2, 'Yoan', 'Cohen', '2010-12-03'),
    (3, 'Léa', 'Bénichou', '1987-07-27'),
    (4, 'Amélie', 'Dux', '1996-04-07'),
    (5, 'David', 'Grez', '2003-06-14'),
    (6, 'Omer', 'Simpson', '1980-10-03');
	/*Récupérez toutes les données de la table.*/
	select*from étudiants
	Récupérer tous les prénoms et noms de tous les étudiants .
	SELECT prénom, nom_de_famille
FROM étudiants;
/* recupérez nom et le prenom*/
SELECT prénom, nom_de_famille
FROM étudiants;

SELECT prénom, nom_de_famille
FROM étudiants
WHERE identifiant = 2;

SELECT prénom, nom_de_famille
FROM étudiants
WHERE prénom = 'Marc' AND nom_de_famille = 'Bénichou';

SELECT prénom, nom_de_famille
FROM étudiants
WHERE nom_de_famille = 'Bénichou' OR prénom = 'Marc';

SELECT prénom, nom_de_famille
FROM étudiants
WHERE prénom LIKE '%a%';

SELECT prénom, nom_de_famille
FROM étudiants
WHERE prénom LIKE 'a%';

SELECT prénom, nom_de_famille
FROM étudiants
WHERE prénom LIKE '%a';

SELECT prénom, nom_de_famille
FROM étudiants
WHERE prénom LIKE '%a_';

SELECT prénom, nom_de_famille
FROM étudiants
WHERE identifiant IN (1, 3);

SELECT *
FROM étudiants
WHERE date_de_naissance >= '2000-01-01';

SELECT prénom, nom_de_famille, date_de_naissance
FROM étudiants
ORDER BY nom_de_famille ASC
LIMIT 4;

SELECT prénom, nom_de_famille, date_de_naissance
FROM étudiants
ORDER BY date_de_naissance DESC
LIMIT 1;

SELECT prénom, nom_de_famille, date_de_naissance
FROM étudiants
LIMIT 3 OFFSET 2;








	
