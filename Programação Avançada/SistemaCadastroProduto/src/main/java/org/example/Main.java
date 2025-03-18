package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        GerenciadorDeProdutos gerenciador = new GerenciadorDeProdutos();
        int opcao;

        do {
            System.out.println("\n--- Menu ---");
            System.out.println("1 - Cadastrar produto");
            System.out.println("2 - Buscar produto por código");
            System.out.println("3 - Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    System.out.print("Digite o código do produto: ");
                    int codigo = scanner.nextInt();
                    scanner.nextLine();

                    System.out.print("Digite o nome do produto: ");
                    String nome = scanner.nextLine();
                    System.out.print("Digite o preço do produto: ");
                    double preco = scanner.nextDouble();
                    scanner.nextLine();

                    if (gerenciador.cadastrarProduto(codigo, nome, preco)) {
                        System.out.println("Produto cadastrado com sucesso!");
                    } else {
                        System.out.println("Código já cadastrado!");
                    }
                    break;
                case 2:
                    System.out.print("Digite o código do produto: ");
                    int buscaCodigo = scanner.nextInt();
                    scanner.nextLine();

                    Produto encontrado = gerenciador.buscarProduto(buscaCodigo);
                    if (encontrado != null) {
                        System.out.println("Produto encontrado: " + encontrado);
                    } else {
                        System.out.println("Produto não encontrado!");
                    }
                    break;
                case 3:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        } while (opcao != 3);

        scanner.close();
    }
}
