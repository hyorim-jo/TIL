# 1. add row col array
3x4 행렬에 12개의 데이터를 저장한 후 각 행과 열에 대한 합을 구하여 출력하는 프로그램

# 2. my code    
```cpp
#include <iostream>
using namespace std;

void readMatrix(int m[][4], int row, int col);
void addRow(int m[][4], int sum[], int row, int col);
void addCol(int m[][4], int sum[], int row, int col);
void printSum(int sum[], int size);

int main()
{
    int matrix[3][4] = { 0, }, rowSum[3] = { 0 }, colSum[4] = { 0 };

    cout << "3x4 행렬에 12개의 데이터를 저장한 후 ";
    cout << "각 행과 열에 대한 합을 구하여 출력하는 프로그램" << endl;

    cout << "데이터 12개를 입력하시오" << endl;
    readMatrix(matrix, 3, 4);

    addRow(matrix, rowSum, 3, 4);
    addCol(matrix, colSum, 3, 4);

    cout << "각 행의 합" << endl;
    printSum(rowSum, 3);
    cout << "각 열의 합" << endl;
    printSum(colSum, 4);

    return 0;
}

//키보드로부터 정수를 읽어 들여 matrix[3][4]에 저장하는 함수
void readMatrix(int m[][4], int row, int col)
{
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            cin >> m[i][j];
        }
    }
}

//배열 m의 각 행의 합을 구하여 배열 sum에 저장하는 함수
void addRow(int m[][4], int sum[], int row, int col)
{
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            sum[i] += m[i][j];
        }
    }
}

//배열 m의 각 열의 합을 구하여 배열 sum에 저장하는 함수
void addCol(int m[][4], int sum[], int row, int col)
{
    for (int i = 0; i < col; i++)
    {
        for (int j = 0; j < row; j++)
        {
            sum[i] += m[j][i];
        }
    }
}

//배열 sum에 저장된 내용을 출력하는 함수
void printSum(int sum[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << sum[i] << '\t';
    }

    cout << endl;
}
```

# 3. takeaway
- 2차원 배열의 초기화
  
  ```cpp
  int matrix[][4] = { 0, } //error
  int matrix[3][4] = { 0, }
  ```
  - 0 뒤에 , 를 붙여서 초기화
  - matrix[][4] 는 배열의 row가 2로 인식  
    Run-Time Check Failure #2 - Stack around the variable 'rowSum' was corrupted 발생  
    -> matrix[3][4] 로 정의

