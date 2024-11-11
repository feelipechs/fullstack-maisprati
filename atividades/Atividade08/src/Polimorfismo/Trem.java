package Polimorfismo;

public class Trem implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("Trem acelerando");
    }

    @Override
    public void frear() {
        System.out.println("Trem freando");
    }
}
