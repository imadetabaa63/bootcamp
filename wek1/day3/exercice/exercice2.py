#exercice 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def bark(self):
        
        print(f"{self.name} fait ouaf !")
    
    def jump(self):
        
        jump_height = self.height * 2
        print(f"{self.name} saute à {jump_height} cm de haut !")


Kamal_Dog = Dog("Tom", 50)  
Amin_Dog = Dog("Toni", 40)  


print(f"Le chien de Kamal s'appelle {Kamal_Dog.name} et mesure {Kamal_Dog.height} cm.")
Kamal_Dog.bark() 
Kamal_Dog.jump()


print(f"Le chien de Amin s'appelle {Amin_Dog.name} et mesure {Amin_Dog.height} cm.")
Amin_Dog.bark()
Amin_Dog.jump()

if Kamal_Dog.height > Amin_Dog.height:
    print(f"{Kamal_Dog.name} est plus grand que {Amin_Dog.name}.")
elif Kamal_Dog.height < Amin_Dog.height:
    print(f"{Amin_Dog.name} est plus grand que {Kamal_Dog.name}.")
else:
    print(f"{Kamal_Dog.name} et {Amin_Dog.name} ont la même taille.")



