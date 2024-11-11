package Abstracao;

import java.util.ArrayList;
import java.util.List;

public class FolhaPagamento {

    private List<Funcionario> funcionarios;

    public FolhaPagamento() {
        this.funcionarios = new ArrayList<>();
    }

    public void adicionarFuncionario(Funcionario funcionario) {
        funcionarios.add(funcionario);
    }

    public double calcularFolhaPagamento() {
        double total = 0;
        for (Funcionario funcionario : funcionarios) {
            total += funcionario.calcularSalario();
        }
        return total;
    }

    public void promoverFuncionario(Funcionario funcionarioAtual, Funcionario novoCargo) {
        funcionarioAtual.promover(novoCargo);
    }

    public static void main(String[] args) {
        FolhaPagamento sistema = new FolhaPagamento();

        Funcionario gerente = new Gerente("Felipe", 5000);
        Funcionario desenvolvedor = new Desenvolvedor("Chagas", 4000);
        Funcionario estagiario = new Estagiario("Santista", 2000);

        sistema.adicionarFuncionario(gerente);
        sistema.adicionarFuncionario(desenvolvedor);
        sistema.adicionarFuncionario(estagiario);

        double totalFolha = sistema.calcularFolhaPagamento();
        System.out.println("Total da folha de pagamento: R$" + totalFolha);

        System.out.println("\nPromovendo Felipe para desenvolvedor...");
        sistema.promoverFuncionario(estagiario, new Desenvolvedor("Felipe", 4000));

        totalFolha = sistema.calcularFolhaPagamento();
        System.out.println("Total da folha de pagamento após promoção: R$" + totalFolha);
    }
}
