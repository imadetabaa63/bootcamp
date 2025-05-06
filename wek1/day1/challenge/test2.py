# exercice 5 
# Créer un ensemble avec mes numéros préférés
my_fav_numbers = {3, 7, 11, 42}

# Ajouter deux nouveaux numéros à l'ensemble
my_fav_numbers.add(9)
my_fav_numbers.add(21)

# Retirer le dernier numéro 
my_fav_numbers.remove(21)

# Créer un ensemble avec les numéros préférés de mon ami
friend_fav_numbers = {5, 8, 13, 17}

# Concatenation des deux ensembles dans un nouvel ensemble
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Afficher les résultats
print("My favorite numbers:", my_fav_numbers)
print("Friend's favorite numbers:", friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)