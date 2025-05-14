








# exercice 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

# Utilisation de zip pour associer les clés et les valeurs
result_dict = dict(zip(keys, values))

# Afficher le dictionnaire résultant
print(result_dict)
                  
                  # exercice 2



family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        cost = 0  
    elif 3 <= age <= 12:
        cost = 10  
    else:
        cost = 15  
    
    # Afficher le coût pour chaque membre
    print(f"{name.title()} has to pay: ${cost}")
    
    
    total_cost += cost


print(f"\nTotal cost for the family: ${total_cost}")
