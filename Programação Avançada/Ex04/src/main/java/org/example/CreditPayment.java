package org.example;

import java.util.Scanner;

public class CreditPayment implements PaymentStrategy{
    Scanner ler;

    public CreditPayment(){
        this.ler = new Scanner(System.in);
    }

    @Override
    public void processPayment(double amount){
        String cartaoCliente;
        System.out.println("Opção de cartão selecionada!");
        System.out.println("Digite o número do cartão :");
        cartaoCliente = ler.next();

        if(cartaoCliente.isEmpty()){
            System.out.println("Cartão inválido");
        }else{
            System.out.println("Pagamento realizado com sucesso!");
        }
    }
}
