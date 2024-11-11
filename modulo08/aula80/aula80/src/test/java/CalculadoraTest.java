import static org.junit.jupiter.api.Assertions.assertEquals;

import org.example.Calculadora;
import org.junit.jupiter.api.Test;

public class CalculadoraTest {
    @Test
    public void testSomar() {
        Calculadora calculadora = new Calculadora();
        int resultado = calculadora.somar(2,3);
        assertEquals(5, resultado, "A soma entre 2 e 3 é 5");
    }

    @Test
    public void testSomarNegativos() {
        Calculadora calculadora = new Calculadora();
        int resultado = calculadora.somar(-12,-3);
        assertEquals(-15, resultado, "A soma entre -12 e -3 é -15");
    }
}
