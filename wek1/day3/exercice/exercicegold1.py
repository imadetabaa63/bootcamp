# exercice 1 XP Gold
import math

class Circle:
    def __init__(self, radius=1.0):
       
        self.radius = radius

    def perimeter(self):
       
        return 2 * math.pi * self.radius

    def area(self):
    
        return math.pi * (self.radius ** 2)

    def print_definition(self):
     
        print("Un cercle est un ensemble de points situés à une distance fixe (le rayon) d'un point central (le centre).")


circle1 = Circle(5)  
circle2 = Circle()   

circle1.print_definition()


print(f"Le périmètre du cercle1 est: {circle1.perimeter():.2f}")
print(f"La surface du cercle1 est: {circle1.area():.2f}")

print(f"Le périmètre du cercle2 est: {circle2.perimeter():.2f}")
print(f"La surface du cercle2 est: {circle2.area():.2f}")
