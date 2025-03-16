while과 for 반복문
===
> 반복문을 사용하여 동일한 코드를 여러 번 반복함

<br>

'while' 반복문
---
> 조건이 truthy 이면 반복문 본문의 코드 실행

    while ( condition 조건 ) { 

      //반복문 본문

    }

<br>

```let i = 0;```

```while (i < 3) {``` // 0, 1, 2가 출력됩니다.   
  ```alert( i );```   
  ```i++;```
```}```

<br>

#### 반복 iteration
> 반복문 본문이 한 번 실행되는 것

반복문이 무한으로 반복되는 것을 방지하기 위해 i++, i-- 등을 사용

<br>

#### 반복문 본문이 한 줄이면 중괄호 생략 가능

```let i = 3;```

```while (i) alert(i--);```

<br>

'do...while' 반복문
---
> 조건이 truthy 인지 아닌지에 상관없이 본문을 최소한 한 번이라도 실행하고 싶은 경우

#### condition 조건을 반복문 본문 아래로 옮길 수 있음

    do{

      //반복문 본문

    } while (condition 조건)

<br>

#### 본문이 먼저 실행된 후, 조건 확인 시 truthy 인 동안에만 본문 실행

  ```let i = 0;```

```do {```   
  ```alert( i );```   
  ```i++;```   
```} while (i < 3);```

<br>

'for' 반복문
---
> <b>while</b> 반복문보다는 복잡하지만 더 많이 쓰이는 반복문

    for (begin; condition; step) {
      // 반복문 본문
    }

<br>

* begin
  > 반복문 진입 시 한 번만 실행
  
  i = 0

<br>

* condition
  > 반복할 때 마다 확인하는 조건, false면 반복문 멈춤
  
  i < 3

<br>

* body
  > condition이 truthy일 동안 계속 실행
  
  alert(i)

<br>

* step
  > 각 반복의 body가 실행된 이후에 실행
  
  i++

<br>

  ```for (let i = 0; i < 3; i++) {``` // 0, 1, 2가 출력됩니다.   
    ```alert(i);```   
  ```}```

<br>

#### 일반적인 반복문 알고리즘

1. begin 실행

2. condition 확인 (false면 멈춤)

3. truthy면 body 실행, step 실행

4. 다시 condition 확인

5. ...

<br>

```