a = int(input("Digite o primeiro número: "))
b = int(input("Digite o segundo número: "))

while b != 0:
    temp = b
    b = a % b
    a = temp
print("MDC =", a)