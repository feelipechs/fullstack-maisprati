package Abstracao;

public class Pix extends FormaPagamento {
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento realizado via pix no valor de R$" + valor);
        } else {
            System.out.println("Falha na validação do pix");
        }
    }

    @Override
    public boolean validarPagamento() {
        return chavePix != null && !chavePix.isEmpty();
    }
}
