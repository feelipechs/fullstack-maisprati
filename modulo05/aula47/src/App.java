public class App {
    public static void main(String[] args) throws Exception {
        // int[] vetor = {10, 20, 30, 40, 50};

        // for (int i = vetor.length - 1; i >= 0; i --) {
        //     System.out.println(vetor[i]);
        // }

        // // adicionar
        // int[] novoVetor = new int[vetor.length + 1];

        // for (int i = 0; i < vetor.length; i ++) {
        //     novoVetor[i] = vetor[i];
        // }

        // novoVetor[vetor.length] = 1;

        // // remover
        // int start = 0;
        // int end = vetor.length - 1;
        // while (start < end) {
        //     int temp = vetor[start];
        //     vetor[start] = vetor[end];
        //     vetor[end] = temp;

        //     start++;
        //     end--;
        // }

        // // pesquisando

        // for (int i = 0; i < vetor.length; i ++) {
        //     if (vetor[i] == 20) {
        //         System.out.println(i);
        //     }
        // }

        int[][] matrix = {
                {1, 2, 3},
                {4, 5, 6},
                {10, 11, 10}
        };

        // for (int[] row : matrix) {
        //     for (int value : row) {
        //         System.out.println(value + "");
        //     }
        //     System.out.println();
        // }

        // int n = matrix.length;
        // int[][] rotacionada = new int[n][n];

        // for (int i = 0; i >= n; i ++) {
        //     for (int j = 0; i >= n; j ++) {
        //         rotacionada[j][n - 1 - i] = matrix[i][j];
        //     }
        // }

        // System.out.println("Matriz rotacionada 90 graus:");
        // for (int i = 0; i < n; i ++) {
        //     for (int j = 0; j < n; j ++) {
        //         System.out.println(rotacionada[i][j] + " ");
        //     }
        //     System.out.println();
        // }

        // int sum = 0;
        // int sumSecondary = 0;

        // for (int i = 0; i < matrix.length; i ++) {
        //     for (int j = 0; i < matrix[i].length; j ++) {
        //         if (i == j) {
        //             sum += matrix[i][j];
        //         }
        //         if ((i + j) == matrix.length - 1) {

        //         }
        //     }
        // }

        // System.out.println("Soma principal: " + sum);
        // System.out.println("Soma secundária: " + sumSecondary);

        int numero = 10;

        for (int i = 0; i < matrix.length; i ++) {
            for (int j = 0; j < matrix.length; j ++) {
                if (matrix[i][j] == numero) {
                    System.out.println("Linha: " + matrix[i] + "Coluna: " + matrix[j]);
                }
            }
        }
    }
}
