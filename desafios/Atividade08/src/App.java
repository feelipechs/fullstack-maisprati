import java.util.ArrayList;
import java.util.List;

import Abstracao.Boleto;
import Abstracao.CartaoCredito;
import Abstracao.FormaPagamento;
import Abstracao.Pix;
import Encapsulamento.Produto;
import Heranca.Desenvolvedor;
import Heranca.Funcionario;
import Heranca.Gerente;
import Polimorfismo.Animal;
import Polimorfismo.Bicicleta;
import Polimorfismo.Cachorro;
import Polimorfismo.Carro;
import Polimorfismo.Gato;
import Polimorfismo.IMeioTransporte;
import Polimorfismo.Trem;
import Polimorfismo.Vaca;

public class App {
    public static void main(String[] args) throws Exception {
        // Exercício 01 & 02
        Produto p1 = new Produto("Carro", 20000.00, 2);

        p1.aplicarDesconto(15);
        p1.exibirInformacoes();

        p1.aplicarDesconto(70);

        System.out.println("--------------------------------------------");

        // Exercício 3 & 04
        Funcionario gerente = new Gerente("Felipe", 9000.00, "Lorem");
        Funcionario desenvolvedor = new Desenvolvedor("Chagas", 3000.00, "Júnior", "Java");

        System.out.println("Informações do Gerente:");
        gerente.exibirInformacoes();
        gerente.trabalhar();
        System.out.println();

        System.out.println("Informações do Desenvolvedor:");
        desenvolvedor.exibirInformacoes();
        desenvolvedor.trabalhar();

        System.out.println("--------------------------------------------");

        // Exercício 05 & 06
        IMeioTransporte[] meiosDeTransporte = {
            new Carro(),
            new Bicicleta(),
            new Trem()
        };

        for (IMeioTransporte transporte : meiosDeTransporte) {
            transporte.acelerar();
            transporte.frear();
            System.out.println();
        }

        List<Animal> animais = new ArrayList<>();

        animais.add(new Cachorro());
        animais.add(new Gato());
        animais.add(new Vaca());

        for (Animal animal : animais) {
            animal.emitirSom();
        }

        System.out.println("--------------------------------------------");

        // Exercício 07
        FormaPagamento pagamentoCartao = new CartaoCredito("1234567812345678", "Felipe Chagas", "12/34", "123");
        FormaPagamento pagamentoBoleto = new Boleto("12345678901234567890123456789012345678901234567");
        FormaPagamento pagamentoPix = new Pix("chagas@pix.com");

        pagamentoCartao.processarPagamento(250.00);
        pagamentoBoleto.processarPagamento(450.00);
        pagamentoPix.processarPagamento(100.00);
    }
}
