package inheritance;

public class Funcionario {
    String cargo;
    double salario;

    public Funcionario(String cargo, double salario) {
        this.cargo = cargo;
        this.salario = salario;
    }
}
//Funcionario - Duas subclasses uma gerente e uma desenvolvedor.
//criem uma classe empresa calcular a folha depagamento dos funcionários.