package org.example;

public class CreditPayment implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("Pagamento via Cartão de Crédito: R$" + amount);
    }
}