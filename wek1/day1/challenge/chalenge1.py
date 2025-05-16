# chalenge 1
def generer_multiples(nombre, longueur):
    multiples = []
    for i in range(1, longueur + 1):
        multiples.append(nombre * i)
    return multiples


nombre = int(input("Entrez un nombre : "))
longueur = int(input("Entrez la longueur de la liste : "))


resultat = generer_multiples(nombre, longueur)
print(resultat)
