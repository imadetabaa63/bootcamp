# execice 1
print("Hello world\n" * 4, end="")

#execice 2
result = (99 ** 3) * 8
print(result)





# exercice 3
user_name = input("Quel est ton nom ? ")

# Ton nom
my_name = "Imad"

# Comparer les noms
if user_name.lower() == my_name.lower():  # Comparaison sans tenir compte de la casse
    print("Wow, c'est mon nom aussi ! On est déjà des amis ! ")
else:
    print(f"Salut {user_name} ! Dommage, ton nom n'est pas le mien, mais on peut quand même être amis ! ")
    # exercice 4
    # Demander à l'utilisateur sa taille en centimètres
height = int(input("Quelle est ta taille en centimètres ? "))

# Vérifier si l'utilisateur est assez grand pour monter
if height > 145:
    print("Tu es assez grand pour monter ! ")
else:
    print("Désolé, tu dois grandir un peu plus pour pouvoir monter. ")