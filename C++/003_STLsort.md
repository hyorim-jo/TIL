# 1. Number Maximization
[Baekjoon 25773](https://www.acmicpc.net/problem/25773)  
Given a number, determine the largest number that can be formed using the exact same digits as the given number.

# 2. my code
```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main()
{
	int num, *arr;
	string numSize;

	cin >> num;

	numSize = to_string(num);
	int size = numSize.length();
	arr = new int(size);

	for (int i = 0; i < size; i++)
	{
		arr[i] = num % 10;
		num = num / 10;
	}
	
	sort(arr, arr + size, greater<>());

	for (int i = 0; i < size; i++)
	{
		cout << arr[i];
	}

	delete[]arr;

	return 0;
}
```

# 3. take away
```cpp
#include <algorithm>
sort(arr, arr + size, greater<>());
//sort(배열의 시작 주소, 배열의 끝 주소(시작 주소 + 사이즈를 이용))
```
STL의 sort를 사용해보았다.  
greater<>() 는 내림차순을 의미한다.  
less<>() 를 이용해, sort의 기본 정렬 방식인 오름차순을 명시적으로 지정할 수 있다.


