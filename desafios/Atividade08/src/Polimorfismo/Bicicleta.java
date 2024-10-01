package Polimorfismo;

public class Bicicleta implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("Bicicleta acelerando");
    }

    @Override
    public void frear() {
        System.out.println("Bicicleta freando");
    }
}
