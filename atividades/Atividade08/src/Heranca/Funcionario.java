package Heranca;

public class Funcionario {
    protected String cargo;
    protected double salario;

    public Funcionario(String cargo, double salario) {
        this.cargo = cargo;
        this.salario = salario;
    }

    // exercício 04
    public void trabalhar() {
        System.out.println(cargo + " está trabalhando");
    }

    public double calcularBonus() {
        return 0;
    }

    public void exibirInformacoes() {
        System.out.println("Nome: " + cargo);
        System.out.println("Salário: R$" + salario);
        System.out.println("Bônus: R$" + calcularBonus());
    }
}
