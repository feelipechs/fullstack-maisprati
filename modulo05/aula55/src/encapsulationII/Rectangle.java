package encapsulationII;

public final class Rectangle extends Shape{
    private final double whidth, height;

    public Rectangle(double whidth, double height) {
        this.whidth = whidth;
        this.height = height;
    }

    @Override
    public double area() {
        return whidth * height;
    }
}
