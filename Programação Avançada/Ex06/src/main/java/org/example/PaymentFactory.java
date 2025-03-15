package org.example;

public class PaymentFactory {
    public static PaymentStrategy createPayment(String type) {
        return switch (type) {
            case "1" -> new PixPayment();
            case "2" -> new CreditPayment();
            case "3" -> new BoletoPayment();
            default -> throw new IllegalArgumentException("Método de pagamento inválido");
        };
    }
}
