# challenge2
def supprimer_duplicates_consecutifs(mot):
    # Créer une nouvelle chaîne de caractères sans lettres consécutives identiques
    nouveau_mot = ""
    for i in range(len(mot)):
        # Ajouter la lettre si ce n'est pas la même que la précédente
        if i == 0 or mot[i] != mot[i - 1]:
            nouveau_mot += mot[i]
    return nouveau_mot

# Demander à l'utilisateur d'entrer un mot
mot_utilisateur = input("Entrez un mot : ")

# Appliquer la fonction et afficher le résultat
resultat = supprimer_duplicates_consecutifs(mot_utilisateur)
print(resultat)
