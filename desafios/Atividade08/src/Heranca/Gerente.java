package Heranca;

public class Gerente extends Funcionario {
    public String setor;

    public Gerente(String cargo, double salario, String setor) {
        super(cargo, salario);
        this.setor = setor;
    }

    // exercício 04
    public void trabalhar() {
        System.out.println(cargo + " empurrando trabalho para outro");
    }

    @Override
    public double calcularBonus() {
        return salario * 0.20;
    }
}