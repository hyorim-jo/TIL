# 1. change
[Baekjoon 5585](https://www.acmicpc.net/problem/5585)  
잔돈으로 500엔, 100엔, 50엔, 10엔, 5엔, 1엔이 충분히 있다.
물건을 사고 1000엔을 냈을 때, 잔돈의 개수를 구하는 프로그램을 작성하시오.
(언제나 거스름돈 개수가 가장 적게 잔돈을 준다.)

# 2. my code    
```java
import java.util.Scanner;

public class Main
{
	public static void main(String[] args) {
	    Scanner in = new Scanner(System.in);
	    
	    int price = 1000 - in.nextInt();
	    int[] coin = {500, 100, 50, 10, 5, 1};
	    int change = 0;
	    int i = 0;
	    
	    while (price > 0)
	    {
	        change += price / coin[i];
	        price %= coin[i++];
	    }
	    
	    System.out.println(change);
	    
	    in.close();
	}
}

```

# 3. takeaway
- java 배열
  - 자료형[] 변수 = {데이터1, 데이터2, 데이터3, ... };
    ```java
    int[] coin = {500, 100, 50};
    ```
  - 자료형[] 변수 = new 자료형[배열 크기];
 
  
### 처음 작성했던 코드
```java
int price = 1000 - in.nextInt();
int change = 0;
	    
change = price / 500;
price %= 500;
change += price / 100;
price %= 100;
change += price / 50;
price %= 50;
change += price / 10;
price %= 10;
change += price / 5;
price %= 5;
change += price / 1;
```
