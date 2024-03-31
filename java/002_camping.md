# 1. camping
[Baekjoon 4796](https://www.acmicpc.net/problem/4796)  
캠핑장을 연속하는 P일 중, L일동안만 사용할 수 있다.
강산이는 이제 막 V일짜리 휴가를 시작했다.
강산이가 캠핑장을 최대 며칠동안 사용할 수 있을까? (1 < L < P < V)

입력은 여러 개의 테스트 케이스로 이루어져 있다.  
각 테스트 케이스는 한 줄로 이루어져 있고, L, P, V를 순서대로 포함하고 있다. 
모든 입력 정수는 int범위이다. 마지막 줄에는 0이 3개 주어진다.

# 2. my code    
```java
import java.util.Scanner;

public class Main
{
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        int[] result = new int[10000];
        int caseNumber = 0;
        
        while (true)
        {
            int l = in.nextInt();
            int p = in.nextInt();
            int v = in.nextInt();
            
            if (l == 0 && p == 0 && v == 0)
                break;
            
            if ( v % p > l) result[caseNumber] = (v / p * l) + l;
            else result[caseNumber] = (v / p * l) + (v % p);
            
            caseNumber++;
        }
        
        for (int i = 0; i < caseNumber; i++)
            System.out.println("Case " + (i + 1) + ": " + result[i]);
            
        in.close();
    }
}
```

# 3. takeaway
  
### 처음 작성했던 코드
```java
import java.util.Scanner;

public class Main
{
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        int[] result = new int[10];
        int caseNumber = 0;
        
        while (true)
        {
            int l = in.nextInt();
            int p = in.nextInt();
            int v = in.nextInt();
            
            if (l == 0 && p == 0 && v == 0)
                break;
            
            int[] day = new int[v];
        
            for (int i = 0; i < v; i++)
                day[i] = 0;
        
            for (int i = 0; i < v; i++)
            {
                if (i < l) day[i] = 1;
                else if (use(day, l, p, i) < l)
                    day[i] = 1;
            }
            
            result[caseNumber] = sum(day, v);
            caseNumber++;
        }
        
        for (int i = 0; i < caseNumber; i++)
            System.out.println("Case " + i + ": " + result[i]);
            
        in.close();
    }
    
    //day[n]부터 이전으로 p개의 합
    public static int use(int[] day, int l, int p, int n)
    {
        int sum = 0;
    
        for(int i = 0; i < p && n - i >= 0; i++)
            sum += day[n - i];
        
        return sum;
    }
    //총 사용일일
    public static int sum(int[] day, int v)
    {
        int sum = 0;
        
        for (int i = 0; i < v; i++)
            sum += day[i];
            
        return sum;
    }
}
```

```java
if ( v % p > l) result[caseNumber] = (v / p * l) + l;
            else result[caseNumber] = (v / p * l) + (v % p);
```
