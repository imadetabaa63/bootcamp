#exercice 5
import random

def guess_number(user_number):
    # Générer un nombre aléatoire entre 1 et 100
    random_number = random.randint(1, 100)
    
    
    if user_number == random_number:
        print("Success! The numbers are the same.")
    else:
        print(f"Fail! The numbers are different. Your number: {user_number}, Random number: {random_number}")


user_input = int(input("Enter a number between 1 and 100: "))

guess_number(user_input)
