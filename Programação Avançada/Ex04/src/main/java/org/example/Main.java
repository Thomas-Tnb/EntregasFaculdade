package org.example;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int opc, valor;

        PaymentProcessor formaPagamento = new PaymentProcessor();
        PaymentStrategy pagamento;

        System.out.println("Valor : ");
        valor = ler.nextInt();

        System.out.println("Selecione a forma de pagamento: ");
        System.out.println("1 - PIX");
        System.out.println("2 - Cartão de crédito");
        System.out.println("3 - Boleto");
        System.out.println("4 - Sair");
        opc = ler.nextInt();

            switch(opc){
                case 1:
                    pagamento = new PixPayment();
                    break;
                case 2:
                    pagamento = new CreditPayment();
                    break;
                case 3:
                    pagamento = new BoletoPayment();
                    break;
                default:
                    pagamento = null;
                    break;
            }

            if(pagamento != null){
                formaPagamento.setPaymentStrategy(pagamento);
                formaPagamento.efetuarPagamento(valor);
            }else{
                System.out.println("Pagamento cancelado !");
            }
    }
}