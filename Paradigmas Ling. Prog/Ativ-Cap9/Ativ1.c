#include <stdio.h>

// Passagem por Valor 
void dobrar_por_valor(int x) {
    x = x * 2;
    printf("Dentro da funcao (por valor): %d\n", x);
}

// Passagem por Referência
void dobrar_por_referencia(int *x) {
    *x = *x * 2;
    printf("Dentro da funcao (por referencia): %d\n", *x);
}

int main() {
    int valor = 10;
    
    printf("Valor inicial: %d\n", valor);

    // Chamada por Valor
    printf("\nChamando dobrar_por_valor...\n");
    dobrar_por_valor(valor);
    printf("Apos chamada por valor: %d\n", valor);

    // Chamada por Referência
    printf("\nChamando dobrar_por_referencia...\n");
    dobrar_por_referencia(&valor);
    printf("Apos chamada por referencia: %d\n", valor);

    return 0;
}

// O valor da variável original (valor = 10) permanece inalterado após a chamada dobrar_por_valor, mas é alterado (dobrado) após a chamada dobrar_por_referencia.

// Pois quando passamos por valor, o parâmetro vai receber apenas uma cópia do valor para ser usado na função, e não tem relação nenhuma com o valor original.

// Passagem por Valor: O fluxo de dados é unidirecional, do chamador para o subprograma. A função recebe apenas uma cópia do valor e atua 
// como uma variável local.O valor do parâmetro real não pode ser alterado, garantindo a proteção contra escrita para esse parâmetro.
// Passagem por Referência : O fluxo de dados é bidirecional. O subprograma recebe o caminho de acesso (endereço) da variável real.
// Assim, o subprograma chamado e o chamador compartilham a mesma posição de memória (o parâmetro real), permitindo que o subprograma altere os dados no chamador.