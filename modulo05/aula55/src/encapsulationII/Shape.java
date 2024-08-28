package encapsulationII;

public abstract sealed class Shape permits Circle, Rectangle {
    public abstract double area();

    public static void main(String[] args) {
        Shape circle = new Circle(5.0);

        System.out.println("Área do círculo: " + circle.area());

        Shape rectangle = new Rectangle(4.0, 5.0);
        System.out.println("Área do retângulo: " + rectangle.area());

        Point point = new Point(3, 5);
        Point anotherPoint = new Point(5, 0);

        System.out.println("Ponto: " + anotherPoint);
    }
}
