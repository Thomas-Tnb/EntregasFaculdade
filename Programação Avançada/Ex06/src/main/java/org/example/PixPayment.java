package org.example;

public class PixPayment implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("Pagamento via Pix: R$" + amount);
    }
}