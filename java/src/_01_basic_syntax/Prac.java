package _01_basic_syntax;
import java.util.Scanner;

public class Prac {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("이름을 입력하세요");
        String userName = scanner.next();
        System.out.println("나이를 입력하세요");
        int userAge = scanner.nextInt();
        System.out.println("안녕하세요"+ userName+"님 ("+ userAge + "세)");

        scanner.close();
    }
}
