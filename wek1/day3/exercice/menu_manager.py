# exercice 3 gold xp /////
class MenuManager:
    #Créez une méthode __init__qui instancie un attribut appelé menu.
    def __init__(self):
        
        self.menu = [
            {'name': 'Soup', 'price': 10, 'spice': 'B', 'gluten': False},
            {'name': 'Hamburger', 'price': 15, 'spice': 'A', 'gluten': True},
            {'name': 'Salad', 'price': 18, 'spice': 'A', 'gluten': False},
            {'name': 'French Fries', 'price': 5, 'spice': 'C', 'gluten': False},
            {'name': 'Beef bourguignon', 'price': 25, 'spice': 'B', 'gluten': True}
        ]

    def add_item(self, name, price, spice, gluten):
        # Créez une méthode appelée add_item(name, price, spice, gluten)
        new_item = {'name': name, 'price': price, 'spice': spice, 'gluten': gluten}
        self.menu.append(new_item)
        print(f"{name} a été ajouté au menu.")

    def update_item(self, name, price, spice, gluten):
        
        for dish in self.menu:
            if dish['name'] == name:
                # Mettre à jour le plat
                dish['price'] = price
                dish['spice'] = spice
                dish['gluten'] = gluten
                print(f"Le plat {name} a été mis à jour.")
                return
        
        print(f"Le plat {name} n'est pas dans le menu.")

    def remove_item(self, name):
        
        for dish in self.menu:
            if dish['name'] == name:
                
                self.menu.remove(dish)
                print(f"Le plat {name} a été supprimé.")
                print("Menu mis à jour:")
                print(self.menu)
                return
        
        print(f"Le plat {name} n'est pas dans le menu.")


if __name__ == "__main__":
    
    manager = MenuManager()

    
    print("Menu actuel:")
    print(manager.menu)

    
    manager.add_item('Pizza', 20, 'A', True)

    
    manager.update_item('Soup', 12, 'A', False)

    
    manager.remove_item('Salad')


    manager.remove_item('Pasta')
