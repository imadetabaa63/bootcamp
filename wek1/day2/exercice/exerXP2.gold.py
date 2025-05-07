# exercice 3
def calculate_sum(X):
    
    X_str = str(X)
   
    result = int(X_str) + int(X_str*2) + int(X_str*3) + int(X_str*4)
    return result


X = 3
print(calculate_sum(X)) 