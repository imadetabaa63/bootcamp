# exercice 1
#  la classe Cat
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("monamar", 5)   
cat2 = Cat("dakin", 7)     
cat3 = Cat("abyad", 3) 

def find_oldest_cat(cat1, cat2, cat3):
    
    oldest_cat = cat1  
    
    if cat2.age > oldest_cat.age:
        oldest_cat = cat2  
    
    if cat3.age > oldest_cat.age:
        oldest_cat = cat3  
    
    return oldest_cat  
    
oldest_cat = find_oldest_cat(cat1, cat2, cat3)


print(f"Le chat le plus âgé est {oldest_cat.name}, et a {oldest_cat.age} ans.")


