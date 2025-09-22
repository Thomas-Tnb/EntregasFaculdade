def processar(lista):
    for num in lista:
        if num == 0:        
            print("Encontrado 0 → interrompendo")
            break
        if num < 0:            
            continue
        if num % 2 == 0:       
            return num * 2

# Exemplo de uso
numeros = [3, -5, 7, -2, 9, 4, 11]
resultado = processar(numeros)
print("Resultado:", resultado)

# Se o programa em Python fosse feito usando apenas goto e rótulos, precisaríamos criar 
# saltos manuais para simular break e continue, tornando o fluxo confuso e difícil 
# de acompanhar. Já com break, continue e return, o código fica claro, organizado e fácil de entender, 
# evitando confusões com saltos descontrolados.