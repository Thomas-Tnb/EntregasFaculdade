n = int(input("Digite um número: "))
print("Divisores de", n, ":")
for i in range(1, n + 1):
    if n % i == 0:
        print(i)