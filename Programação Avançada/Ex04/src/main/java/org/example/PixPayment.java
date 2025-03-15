package org.example;

public class PixPayment implements PaymentStrategy {
    private String chavePix;

    public PixPayment() {
        this.chavePix = "44998450432";
    }

    @Override
    public void processPayment(double amount){
        System.out.println("Opção de Pix selecionada!");
        System.out.println("Chave pix, telefone : " + this.chavePix);
    }
}
