# 2. strange sign
[Baekjoon 15964](https://www.acmicpc.net/problem/15964)  
A＠B = (A+B)×(A-B) 일 때, A와 B가 주어지면 A＠B를 계산하는 프로그램  
(1 ≤ A, B ≤ 100,000)

# 2. my code    
```cpp
#include <iostream>
using namespace std;

long long cal(long long x, long long y);

int main()
{
	int A, B;

	cin >> A >> B;

	cout << cal(A, B);

	return 0;
}

long long cal(long long x, long long y)
{
	return (x + y) * (x - y);
}
```

# 3. takeaway
- long long type  
  A = 100,000, b = 1 인 경우 cal 의 return value가 int 범위를 벗어난다.   
  &rarr; long long 자료형으로 return

|type|byte|range|
|---|---|---|
|short|2|-32,768 ~ 32,767|
|int(signed)|4|-2,147,483,648 ~ 2,147,483,647|
|float|4|3.4E+/-38(7개의 자릿수)|
|double|8|1.7E+/-308(15개의 자릿수)|
|long long(signed)|8|-9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807|
|char|1|-128 ~ 127|
|bool|1|true or false|