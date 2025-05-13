# # Mini-projet 1 : Tic Tac Toe

grille = ["-", "-", "-",
          "-", "-", "-",
          "-", "-", "-"]

joueur_actuel = ""
fin_jeu = False
gagnant = None


def joueur():
    choix_jouer()  
    affichage_grille()  
    while not fin_jeu:  
        tour(joueur_actuel)  
        verifier_fin_jeu()  
        jouer_suivant()  
    result()  


def choix_jouer():
    global joueur_actuel
    while True:
        joueur_actuel = input("Choisir soit X, soit O : ").upper()  
        if joueur_actuel == 'X':
            print("Vous avez choisi X. Le joueur 2 aura O.")
            break
        elif joueur_actuel == 'O':
            print("Vous avez choisi O. Le joueur 2 aura X.")
            break
        else:
            print("Choix invalide. Veuillez choisir X ou O.") 


def affichage_grille():
    print("\n")
    print("-----------------------------------------")
    print("|", grille[0], "|", grille[1], "|", grille[2], "|     | 1 | 2 | 3 |")  
    print("-----------------------------------------")
    print("|", grille[3], "|", grille[4], "|", grille[5], "|     | 4 | 5 | 6 |")  
    print("-----------------------------------------")
    print("|", grille[6], "|", grille[7], "|", grille[8], "|     | 7 | 8 | 9 |")  
    print("\n")


def tour(joueur):
    print(f"C'est le tour du joueur : {joueur}")
    valide = False
    while not valide:  
        try:
            pos = int(input("Sélectionnez un espace vide sur la grille entre 1 et 9 : ")) - 1  
            if pos not in range(9) or grille[pos] != "-":  
                print("Position invalide, veuillez choisir une case vide entre 1 et 9.")
            else:
                grille[pos] = joueur  
                valide = True
        except ValueError:
            print("Veuillez entrer un numéro valide entre 1 et 9.")  
    affichage_grille()


def verifier_fin_jeu():
    verifier_vectoire()  
    verifier_match_null()  


def verifier_vectoire():
    global fin_jeu, gagnant
    win_conditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  
        [0, 4, 8], [2, 4, 6]              
    ]
    
    for condition in win_conditions:
        if grille[condition[0]] == grille[condition[1]] == grille[condition[2]] and grille[condition[0]] != "-":
            fin_jeu = True
            gagnant = grille[condition[0]]  
            return

# 
def verifier_match_null():
    global fin_jeu
    if "-" not in grille:  
        fin_jeu = True
        print("Le match est nul !")  


def jouer_suivant():
    global joueur_actuel
    if joueur_actuel == "X":
        joueur_actuel = "O"  
    else:
        joueur_actuel = "X"  


def result():
    if gagnant:
        print(f"Le joueur {gagnant} a gagné !")  
    else:
        print("Le match est nul.")  

joueur()  
X