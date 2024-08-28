package inheritance;

abstract class Animal {
    String nome;

    public Animal(String nome) {
        this.nome = nome;
    }

    public abstract void emitirSom();

    void dormir() {
        System.out.println(this.nome = " Está dormindo.");
    }
}
