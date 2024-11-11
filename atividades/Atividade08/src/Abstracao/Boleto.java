package Abstracao;

public class Boleto extends FormaPagamento {
    private String codigoBarras;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento realizado via boleto no valor de R$" + valor);
        } else {
            System.out.println("Falha na validação do boleto");
        }
    }

    @Override
    public boolean validarPagamento() {
        return codigoBarras != null && codigoBarras.length() == 47;
    }
}

