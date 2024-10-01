package Heranca;

public class Desenvolvedor extends Funcionario {
    public String senioridade;
    public String linguagem;
    
    public Desenvolvedor(String cargo, double salario, String senioridade, String linguagem) {
        super(cargo, salario);
        this.senioridade = senioridade;
        this.linguagem = linguagem;
    }

    // exercício 04
    @Override
    public void trabalhar() {
        System.out.println(cargo + " fingindo que trabalha");
    }

    @Override
    public double calcularBonus() {
        return salario * 0.10;
    }
}