package org.example;

import java.util.HashMap;
import java.util.Map;

public class GerenciadorDeProdutos {
    private Map<Integer, Produto> produtos;

    public GerenciadorDeProdutos() {
        this.produtos = new HashMap<>();
    }

    public boolean cadastrarProduto(int codigo, String nome, double preco) {
        if (produtos.containsKey(codigo)) {
            return false; // Código já cadastrado
        }
        produtos.put(codigo, new Produto(codigo, nome, preco));
        return true;
    }

    public Produto buscarProduto(int codigo) {
        return produtos.get(codigo);
    }
}
