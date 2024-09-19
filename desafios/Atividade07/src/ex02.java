// 2. Crie uma aplicação que simule o histórico de navegação de um navegador utilizando
// uma lista simplesmente encadeada. Implemente funcionalidades para adicionar novas
// URLs e remover URLs antigas quando a lista atingir um certo tamanho.
import java.util.LinkedList;

public class ex02 {
    public static void main(String[] args) {
        LinkedList<String> historico = new LinkedList<>();

        historico.add("www.url1");
        historico.add("www.url2");

        System.out.println("Historico de navegação atual: " + historico);

        historico.add("www.url3");
        historico.add("www.url4");
        historico.add("www.url5");
        historico.add("www.url6");

        System.out.println("Histórico de navegação após adições: " + historico);

        if (historico.size() > 5) {
            historico.removeFirst();
        }

        System.out.println("Histórico de navegação após remoção: " + historico);
    }
}
