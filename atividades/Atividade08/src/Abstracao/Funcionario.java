package Abstracao;

public abstract class Funcionario {
    protected String cargo;
    protected double salarioBase;

    public Funcionario(String cargo, double salarioBase) {
        this.cargo = cargo;
        this.salarioBase = salarioBase;
    }

    public String getCargo() {
        return cargo;
    }

    public double getSalarioBase() {
        return salarioBase;
    }

    public abstract double calcularSalario();
    public abstract double calcularBonus();

    public void promover(Funcionario novoCargo) {
        this.cargo = novoCargo.cargo;
        this.salarioBase = novoCargo.salarioBase;
    }
}
