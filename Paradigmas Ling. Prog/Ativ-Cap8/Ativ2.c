#include <stdio.h>

int fatorial(int n) {
    if (n == 0 || n == 1) return 1;
    int resultado = 1;
    for (int i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

int main() {
    int opcao, num;

    do {
        printf("\nMenu:\n");
        printf("1 - Calcular o quadrado de um numero\n");
        printf("2 - Calcular o fatorial de um numero\n");
        printf("3 - Sair\n");
        printf("Escolha uma opcao: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("Digite um numero: ");
                scanf("%d", &num);
                printf("Quadrado de %d = %d\n", num, num * num);
                break;

            case 2:
                printf("Digite um numero: ");
                scanf("%d", &num);
                printf("Fatorial de %d = %d\n", num, fatorial(num));
                break;

            case 3:
                printf("Saindo...\n");
                break;

            default:
                printf("Opcao invalida!\n");
        }
    } while (opcao != 3);

    return 0;
}
