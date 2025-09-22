#include <stdio.h>

void contador() {
    int a = 0;      
    static int b = 0;
    a++;
    b++;
    printf("a : %i, b : %i\n", a, b);
}

int main() {
    contador();
    contador();
    contador();
    return 0;
}