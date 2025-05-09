# exercice 1 /// liritage 
# Créez une classe appelée Siamesequi hérite de la Catclasse.
# Classe de base Cat
class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'



class Siamese(Cat):
    def __init__(self, name, age, fur_color="cream"):
        super().__init__(name, age) 
        self.fur_color = fur_color  

    def walk(self):
        return f'{self.name} is elegantly walking around'

    def meow(self):
        return f'{self.name} meows in a soft voice'


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())  

bengal_obj = Bengal("Leo", 3)
chartreux_obj = Chartreux("koki", 5)
siamese_obj = Siamese("bassa", 4)

all_cats = [bengal_obj, chartreux_obj, siamese_obj]


sara_pets = Pets(all_cats)


sara_pets.walk()
