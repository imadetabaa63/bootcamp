# Exercice 2 gold xp:
import random

class MyList:
    def __init__(self, letters_list):
        
        self.letters_list = letters_list

    def reverse_list(self):
        
        return self.letters_list[::-1]

    def sort_list(self):
        
        return sorted(self.letters_list)

    def generate_random_list(self):
        
        return [random.randint(1, 100) for _ in range(len(self.letters_list))]


my_list = MyList(['a', 'c', 'b', 'e', 'd'])


reversed_list = my_list.reverse_list()
print(f"Liste inversée : {reversed_list}")


sorted_list = my_list.sort_list()
print(f"Liste triée : {sorted_list}")


random_list = my_list.generate_random_list()
print(f"Liste aléatoire générée : {random_list}")
