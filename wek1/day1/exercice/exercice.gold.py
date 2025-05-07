# exercice 1
month = int(input("Enter a month (1 to 12): "))


if month == 12 or month == 1 or month == 2:
    season = "Winter"
elif month == 3 or month == 4 or month == 5:
    season = "Spring"
elif month == 6 or month == 7 or month == 8:
    season = "Summer"
elif month == 9 or month == 10 or month == 11:
    season = "Autumn"
else:
    season = "Invalid month"

print(f"The season for month {month} is: {season}")

# exercice 2
# les nombres de 1 à 20
for i in range(1, 21):
    print(i)

    # exercice 3


mon_nom = "VotreNom"  

# Boucle while
while True:
    nom_utilisateur = input("Quel est votre nom ? ")

    if nom_utilisateur == mon_nom:
        print("Bonjour, c'est moi !")
        break  # 
    else:
        print("Ce n'est pas mon nom. Essayez encore.")
         # exercice 4


names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Quel est ton nom ? ")

if user_name in names:

    index = names.index(user_name)
    print(f"L'index de {user_name} dans la liste est : {index}")
else:
    print(f"{user_name} n'est pas dans la liste.")
# exercice 5

num1 = float(input("Input the 1st number: "))
num2 = float(input("Input the 2nd number: "))
num3 = float(input("Input the 3rd number: "))

greatest = max(num1, num2, num3)

print(f"The greatest number is: {greatest}")


