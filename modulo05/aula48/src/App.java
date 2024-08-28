import util.Utilitarios;

public class App {
    public static void main(String[] args) throws Exception {

        ContaBancaria contaBancaria = new ContaBancaria();

        contaBancaria.depositar(1000);
        System.out.println(contaBancaria.consultaSaldo());

        Geometria geo = new Geometria();

        double areaRetangulo = geo.calcularAreaRetangulo(5.0, 3);

        System.out.println(geo.multiplicar(5, 3));
        System.out.println(Geometria.multiplicar(10, 10));
        System.out.println(areaRetangulo);

        Utilitarios.print("Olá, mundo!");
    }
}
