# exercice 2 ///
class Dog:
    def __init__(self, name, age, weight):
        
        self.name = name
        self.age = age
        self.weight = weight

    
    def bark(self):
        return f"{self.name} aboie !"

    
    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight

        if self_score > other_score:
            return f"{self.name} gagne le combat contre {other_dog.name}!"
        elif self_score < other_score:
            return f"{other_dog.name} gagne le combat contre {self.name}!"
        else:
            return f"{self.name} et {other_dog.name} sont à égalité!"


dog1 = Dog("Rex", 3, 20)
dog2 = Dog("Bella", 4, 25)
dog3 = Dog("Max", 2, 18)

print(dog1.bark())  
print(f"Vitesse de course de {dog2.name}: {dog2.run_speed()}")  
print(dog1.fight(dog2))  
print(dog3.fight(dog1))  
