def fatorial(n):
    if n == 0 or n == 1:
        return 1
    resultado = 1
    for i in range(2, n+1):
        resultado *= i
    return resultado

while True:
    print("\nMenu:")
    print("1 - Calcular o quadrado de um número")
    print("2 - Calcular o fatorial de um número")
    print("3 - Sair")
    
    opcao = input("Escolha uma opção: ")

    if opcao == "1":
        num = int(input("Digite um número: "))
        print(f"Quadrado de {num} = {num ** 2}")
    elif opcao == "2":
        num = int(input("Digite um número: "))
        print(f"Fatorial de {num} = {fatorial(num)}")
    elif opcao == "3":
        print("Saindo...")
        break
    else:
        print("Opção inválida!")

# Em C ficou aquele código grandão, cheio de scanf/printf, precisa até de função separada pro fatorial e muito cuidado com tipos. 
# Já no Python, saiu bem mais curtinho, legível e direto ao ponto, sem enrolação. Então, se a ideia é fazer algo rápido e fácil de entender, 
# Python foi melhor. Já o C é mais detalhista, mas por outro lado ensina bem como funciona tudo por baixo dos panos.