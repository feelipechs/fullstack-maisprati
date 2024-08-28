package inheritance;

public class Gerente extends Funcionario {
    public String setor;

    public Gerente(String cargo, double salario, String setor) {
        super(cargo, salario);
        this.setor = setor;
    }
}
