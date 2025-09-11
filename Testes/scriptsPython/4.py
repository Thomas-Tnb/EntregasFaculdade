def fatorial(x):
    fat = 1
    for i in range(1, x + 1):
        fat *= i
    return fat

n = int(input("Digite n: "))
k = int(input("Digite k: "))

if n < k:
    print("Erro: n deve ser maior ou igual a k")
else:
    c = fatorial(n) // (fatorial(k) * fatorial(n - k))
    print("C(", n, ",", k, ") =", c)