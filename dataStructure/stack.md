# 1. stack
포인터를 사용해 stack의 push, pop, size, empty, top을 구현

# 2. my code
```cpp
//baekJoon 10828
#include <iostream>
using namespace std;

void push(int*& p);
void pop(int stack[], int*& p);
void size(int stack[], int*& p);
void empty(int stack[], int*& p);
void top(int stack[], int*& p);

int main()
{
	int* stack, n, * point;
	string comn;

	cin >> n;
	stack = new int[n];
	point = stack;

	for (int i = 0; i < n; i++)
	{
		cin >> comn;

		if (comn == "push") push(point);
		else if (comn == "pop") pop(stack, point);
		else if (comn == "size") size(stack, point);
		else if (comn == "empty") empty(stack, point);
		else if (comn == "top") top(stack, point);
	}

	delete[]stack;

	return 0;
}

void push(int* &p)
{
	cin >> *(p++);
}

void pop(int stack[], int* &p)
{
	if (p == stack) cout << -1 << endl;
	else cout << *(--p) << endl;
}

void size(int stack[], int* &p)
{
	cout << (p - stack) << endl;
}

void empty(int stack[], int* &p)
{
	if (p == stack) cout << 1 << endl;
	else cout << 0 << endl;
}

void top(int stack[], int* &p)
{
	if (p == stack) cout << -1 << endl;
	else cout << *(p - 1) << endl;
}
```
