package Abstracao;

public class Gerente extends Funcionario {
    private static final double BONUS_PERCENTUAL = 0.20;

    public Gerente(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return salarioBase + calcularBonus();
    }

    @Override
    public double calcularBonus() {
        return salarioBase * BONUS_PERCENTUAL;
    }
}
