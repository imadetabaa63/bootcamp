# exercice 4
class Zoo:
    def __init__(self, zoo_name):
        
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        else:
            print(f"{new_animal} est déjà dans le zoo.")

    def get_animals(self):
        
        if self.animals:
            print("Animaux dans le zoo :")
            for animal in self.animals:
                print(animal)
        else:
            print("Il n'y a aucun animal dans le zoo.")

    def sell_animal(self, animal_sold):
        
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} a été vendu.")
        else:
            print(f"{animal_sold} n'est pas dans le zoo.")

    def sort_animals(self):
        
        grouped_animals = {}
        
        for animal in sorted(self.animals):
            first_letter = animal[0].upper()
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = []
            grouped_animals[first_letter].append(animal)
        
        return grouped_animals

    def get_groups(self):
        
        groups = self.sort_animals()
        for letter, animals in groups.items():
            print(f"{letter}: {animals}")



my_zoo = Zoo("Le Grand Zoo")


my_zoo.add_animal("Lion")
my_zoo.add_animal("Zebra")
my_zoo.add_animal("Bear")
my_zoo.add_animal("Giraffe")
my_zoo.add_animal("Cougar")
my_zoo.add_animal("Cat")
my_zoo.add_animal("Baboon")
my_zoo.add_animal("Lion")  


my_zoo.get_animals()


my_zoo.sell_animal("Bear")

my_zoo.get_animals()

my_zoo.get_groups()
