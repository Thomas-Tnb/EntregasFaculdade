#include <stdio.h>
#include <string.h>

struct Livro {
    char titulo[50];
    char autor[50];
    int anoPublicacao;
};

int main() {
    int numeros[5] = {10, 20, 30, 40, 50};

    printf("Array de inteiros:\n");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\n\n");

    struct Livro livro1;
    strcpy(livro1.titulo, "The Way of Kings");
    strcpy(livro1.autor, "Brandon Sanderson");
    livro1.anoPublicacao = 2010;

    printf("Livro:\n");
    printf("Titulo: %s\n", livro1.titulo);
    printf("Autor: %s\n", livro1.autor);
    printf("Ano: %d\n", livro1.anoPublicacao);

    return 0;
}
