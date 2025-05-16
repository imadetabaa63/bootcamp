import psycopg2

# 1. Paramètres de connexion à la base de données
DB_NAME = "dvdrental"
USER = "postgres"
PASSWORD = "1234"
HOST = "localhost"
PORT = "5432"  # ou 5433
ENCODING='UTF8'

# 3. Écrire une requête SQL pour créer une table
def create_table(cursor, table_name: str):
    """Crée une nouvelle table avec un id et un num"""

    query = f'''
    CREATE TABLE IF NOT EXISTS {table_name}(
        id SERIAL PRIMARY KEY,
        num INTEGER NOT NULL
    );
    '''
    try:
        cursor.execute(query)  # Exécuter la requête
        print(f"Table {table_name} créée avec succès.")
    except Exception as e:
        print(f"Erreur lors de la création de la table {table_name}: {e}")

# Fonction d'insertion dans la table
def insert_into_table(cursor, table_name: str, num_value: int):
    query = f'''
    INSERT INTO {table_name}(num)
    VALUES ({num_value});
    '''
    try:
        cursor.execute(query)  # Exécuter la requête
        print(f"Valeur {num_value} insérée avec succès dans {table_name}.")
    except Exception as e:
        print(f"Erreur lors de l'insertion dans {table_name}: {e}")

# Fonction de sélection des données de la table
def select_all(cursor, table_name: str):
    query = f'''
    SELECT * FROM {table_name};
    '''
    try:
        cursor.execute(query)
        output = cursor.fetchall()
        return output
    except Exception as e:
        print(f"Erreur lors de la sélection des données dans {table_name}: {e}")
        return []

if __name__ == '__main__':
    # Connexion à la base de données
    try:
        connection = psycopg2.connect(
            dbname=DB_NAME,
            user=USER,
            password=PASSWORD,
            host=HOST,
            port=PORT,
            client_encoding=ENCODING
        )
        cursor = connection.cursor()
        print("Connexion à la base de données réussie.")
        # Nom de la table
        table_name = 'helloworld'

        # Créer la table
        create_table(cursor, table_name)

        # Insérer des données dans la table
        insert_into_table(cursor, table_name, 12312)
        insert_into_table(cursor, table_name, 88888)

        # Sélectionner et afficher toutes les lignes de la table
        rows = select_all(cursor, table_name)
        print("Données dans la table :", rows)

        # Fermer le curseur et la connexion
        cursor.close()
        connection.close()
        print("Connexion fermée.")
    except Exception as e:
        print(f"Erreur de connexion à la base de données: {e}")
        exit(1)

    # Création d'un curseur

