package inheritance;

public class Desenvolvedor extends Funcionario {
    public String senioridade;
    public String linguagem;
    
    public Desenvolvedor(String cargo, double salario, String senioridade, String linguagem) {
        super(cargo, salario);
        this.senioridade = senioridade;
        this.linguagem = linguagem;
    }
}
