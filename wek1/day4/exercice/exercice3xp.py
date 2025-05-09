# exercice 3 
import random

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} barks!"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f"{self.name} wins!"
        else:
            return f"{other_dog.name} wins!"


class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False  

    def train(self):
        """Entraîne le chien et affiche son aboiement"""
        print(self.bark())  
        self.trained = True 

    def play(self, *args):
        """Fait jouer le chien avec d'autres chiens"""
        print(f"Tous jouent ensemble : {[dog.name for dog in args]}")

    def do_a_trick(self):
        """Si le chien est entraîné, il fait une astuce aléatoire"""
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            trick = random.choice(tricks)
            print(f"{self.name} {trick}")
        else:
            print(f"{self.name} n'est pas encore entraîné!")


if __name__ == "__main__":
    
    dog1 = PetDog("Fido", 3, 15)
    dog2 = PetDog("Buddy", 2, 20)
    dog3 = PetDog("Max", 5, 30)

    
    dog1.train()
    dog1.play(dog2, dog3)
    dog1.do_a_trick()
    dog3.do_a_trick()
