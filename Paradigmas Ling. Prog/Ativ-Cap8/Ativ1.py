# Usando WHILE
i = 1
while(i <=10):
    print(i)
    i = i+1

# Usando FOR
for i in range(11):
    print(i)

# Com certeza o menos legível é o código usando goto, pois não segue uma ordem 
# coerente de leitura e há mais código para se interpretar. Já usando WHILE, é
# mais fácil de ler, o código é mais enxuto e faz sentido. Porém, o mais legível
# eu acredito ser o código que usa FOR, pois a palavra range() já passa a noção 
# de que o bloco de código vai percorrer até 11 (1-10), e é o que usa menos código
# sem comprometer a interpretação de quem está lendo. 