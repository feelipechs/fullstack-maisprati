// 1. Implemente um gerenciador de tarefas onde cada tarefa é um nó em uma lista
// simplesmente encadeada. Permita que o usuário adicione, remova, e marque tarefas
// como concluídas.
import java.util.LinkedList;

public class ex01 {
    public static void main(String[] args) {
        LinkedList<String> tarefas = new LinkedList<>();

        tarefas.add("Comprar jogo");
        tarefas.add("Jogar");
        tarefas.add("Trabalhar");

        System.out.println("Tarefas a serem feitas: " + tarefas);

        String tarefaRemovida = tarefas.removeLast();

        System.out.println("Tarefa removida: " + tarefaRemovida);

        tarefas.removeFirst();
        tarefas.removeLast();

        System.out.println("Tarefas realizadas! Lista atual: " + tarefas);
    }
}
