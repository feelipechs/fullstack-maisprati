package stack;
import java.util.Stack;

public class StringReverser {
    public static void reverseString(String input) {
        Stack<Character> stackInversed = new Stack<>();
        Stack<Character> stackReversed = new Stack<>();

        for (chat ch: input.toCharArray()) {
            stackInversed.push(ch);
        }

        int length = stackInversed.size();

        for (int i = 0; i < length; i ++) {
            stackReversed.push(stackInversed.pop());
        }

        length = stackReversed.size();
        String myString = "";
        for (int i = 0; i < length; i ++) {
            myString += stackInversed.pop();
        }
        return myString;
    }

    public static void main(String[] args) {
        System.out.println(reverseString);
    }
}
