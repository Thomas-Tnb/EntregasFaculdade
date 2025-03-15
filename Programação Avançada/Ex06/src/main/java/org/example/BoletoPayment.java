package org.example;

public class BoletoPayment implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("Pagamento via Boleto: R$" + amount);
    }
}
