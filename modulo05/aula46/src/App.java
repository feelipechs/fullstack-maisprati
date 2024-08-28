import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        String barrinha = "-".repeat(20);

        Scanner sc = new Scanner(System.in);
        // converter celsius em fahrenheit
        System.out.println("Insira a temperatura em celsius");
        double celsius = sc.nextDouble();
    
        double fahrenheit = (celsius * 9/5) + 32;
    
        System.out.println("A temperatura em Fahrenheit é: " + fahrenheit);
    
        System.out.println(barrinha);
        // par ou impar
        System.out.println("Insira um número");
        int numero = sc.nextInt();
    
        if (numero % 2 == 0) {
            System.out.println("Par");
        } else {
            System.out.println("Impar");
        }
    
        System.out.println(barrinha);
        // dia da semana
        System.out.println("Insira um dia da semana");
        int dia = sc.nextInt();
    
        switch(dia) {
            case 1:
                System.out.println("Segunda");
                break;
            case 2:
                System.out.println("Terça");
                break;
            case 3:
                System.out.println("Quarta");
                break;
            case 4:
                System.out.println("Quinta");
                break;
            default:
                System.out.println("Inválido");
                break;        
        }
    
        System.out.println(barrinha);
        // ano bissexto
        System.out.println("Insira o ano");
        int ano = sc.nextInt();
    
        if ((ano % 4 == 0) && !(ano % 100 == 0) && (ano % 400 == 0)) {
            System.out.println(ano + " é um ano bissexto!");
        } else {
            System.out.println(ano + " não é um ano bissexto!");
        }
    
        System.out.println(barrinha);
        // calcladora
        System.out.println("Digite um número: ");
        double num1 = sc.nextDouble();
        
        System.out.println("Digite um número: ");
        double num2 = sc.nextDouble();
    
        System.out.println("Digite um operador: ");
        char operador = sc.next().charAt(0);
        double resultado;

        // completar calculadora

        // fazer verif de login

        // fatorial
        

        // fibbonacci
        for ()
    }
}
