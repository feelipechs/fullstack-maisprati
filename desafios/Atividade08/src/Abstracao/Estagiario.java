package Abstracao;

public class Estagiario extends Funcionario {
    private static final double BONUS_FIXO = 300.0;

    public Estagiario(String cargo, double salarioBase) {
        super(cargo, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return salarioBase + calcularBonus();
    }

    @Override
    public double calcularBonus() {
        return BONUS_FIXO;
    }
}

