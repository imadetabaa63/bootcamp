#exercice 1
# Création du dictionnaire avec les dates d'anniversaire
birthdays = {
    "imad": "1995/03/12",
    "mohamed": "1989/07/22",
    "Charaf": "2000/11/05",
    "Diana": "1992/05/30",
    "khadija": "1985/09/15"
}

print("Bienvenue !")
print("Vous pouvez consulter les dates d'anniversaire des personnes de la liste !")


person_name = input("Veuillez entrer un nom pour consulter la date d'anniversaire : ")


if person_name in birthdays:
    print(f"La date d'anniversaire de {person_name} est {birthdays[person_name]}.")
else:
    print(f"Désolé, nous n'avons pas d'informations pour {person_name}.")
