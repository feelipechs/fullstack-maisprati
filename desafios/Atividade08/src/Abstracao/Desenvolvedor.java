package Abstracao;

public class Desenvolvedor extends Funcionario {
    private static final double BONUS_PERCENTUAL = 0.10;

    public Desenvolvedor(String cargo, double salarioBase) {
        super(cargo, salarioBase);
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

