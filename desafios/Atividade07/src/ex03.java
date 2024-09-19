// 3. Implemente um sistema de controle de reversão (undo) para uma aplicação de
// edição de texto. Use uma lista simplesmente encadeada para armazenar as ações
// realizadas e permita que o usuário desfaça as últimas ações.
import java.util.LinkedList;
import java.util.Scanner;

public class ex03 {
    private static String texto = "";
    private static LinkedList<Acao> historico = new LinkedList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            System.out.println("\nTexto atual: " + texto);
            exibirMenu();
            int opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    adicionarTexto();
                    break;
                case 2:
                    desfazerAcao();
                    break;
                case 3:
                    System.out.println("Saindo...");
                    return;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
    }

    private static void exibirMenu() {
        System.out.println("1. Adicionar texto");
        System.out.println("2. Desfazer última ação");
        System.out.println("3. Sair");
        System.out.print("Escolha uma opção: ");
    }

    private static void adicionarTexto() {
        System.out.print("Digite o texto a ser adicionado: ");
        String novoTexto = scanner.nextLine();
        historico.add(new Acao(texto, novoTexto));
        texto += novoTexto;
        System.out.println("Texto adicionado.");
    }

    private static void desfazerAcao() {
        if (historico.isEmpty()) {
            System.out.println("Nenhuma ação para desfazer.");
            return;
        }

        Acao ultimaAcao = historico.removeLast();
        texto = ultimaAcao.getEstadoAnterior();
        System.out.println("Última ação desfeita.");
    }

    private static class Acao {
        private final String estadoAnterior;
        private final String textoAdicionado;

        public Acao(String estadoAnterior, String textoAdicionado) {
            this.estadoAnterior = estadoAnterior;
            this.textoAdicionado = textoAdicionado;
        }

        public String getEstadoAnterior() {
            return estadoAnterior;
        }

        public String getTextoAdicionado() {
            return textoAdicionado;
        }
    }
}
