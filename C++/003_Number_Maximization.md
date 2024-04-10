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
