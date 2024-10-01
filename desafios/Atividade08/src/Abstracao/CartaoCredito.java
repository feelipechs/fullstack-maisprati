package Abstracao;

public class CartaoCredito extends FormaPagamento {
    private String numeroCartao;
    private String nomeTitular;
    private String validade;
    private String codigoSeguranca;

    public CartaoCredito(String numeroCartao, String nomeTitular, String validade, String codigoSeguranca) {
        this.numeroCartao = numeroCartao;
        this.nomeTitular = nomeTitular;
        this.validade = validade;
        this.codigoSeguranca = codigoSeguranca;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento realizado via cartão de crédito no valor de R$" + valor);
        } else {
            System.out.println("Falha na validação do pagamento com cartão de crédito");
        }
    }

    @Override
    public boolean validarPagamento() {
        return numeroCartao != null && numeroCartao.length() == 16 && codigoSeguranca.length() == 3;
    }
}
