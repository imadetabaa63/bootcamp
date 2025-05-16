

class MenuItem:
    def __init__(self, name, price):
        """Initialise un élément du menu avec un nom et un prix."""
        self.name = name  
        self.price = price 

    def __str__(self):
        """Retourne une représentation sous forme de chaîne de l'élément du menu."""
        return f"MenuItem(name='{self.name}', price={self.price})"

# Exemple de création d'un objet MenuItem
if __name__ == "__main__":

    pizza = MenuItem("Pizza", 10)
    burger = MenuItem("Burger", 5)

    print(pizza)
    print(burger)
