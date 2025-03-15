if와 '?'를 사용한 조건 처리
===
> 조건에 따라 다른 행동을 취해야 할 때 사용

'if'문
---
> 괄호 안에 들어가는 조건을 평가,   
> 그 결과가 true이면 실행

    if()


```let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');```   
```if (year == 2015) alert( '정답입니다!' );```

<br>

#### 조건이 true인 경우 복수의 문을 실행할 때 중괄호를 사용
```if (year == 2015) {   ```   
    ```alert( "정답입니다!" );```   
    ```alert( "아주 똑똑하시네요!" );```   
```}```

<br>

#### 구문이 한 줄이더라도 중괄호 { } 를 사용하는 것이 가독성에 좋음

<br>
<br>

불린형으로의 변환
---
> if( )문은 결과를 불린값으로 변환

<br>

* 'falsy' 값: 불린형으로 변환 시 모두 false 가 되는 값 (0, "", null, undefined, NaN)

```if(0) { }``` //false

<br>

* 'truthy' 값: 이 외에 불린형으로 변환 시 true 가 되는 값

```if(1) { }``` //true


<br>
<br>

'else'절
---
> if( )문의 조건이 거짓일 때 실행

<br>

```let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');```

```if (year == 2015) {```   
  ```alert( '정답입니다!' );```   
```} else {```   
  ```alert( '오답입니다!' );``` // 2015 이외의 값을 입력한 경우   
```}```

<br>
<br>

'else if'로 복수 조건 처리하기
---
> 유사하지만 약간씩 차이가 있는 if( )문 조건 여러 개를 처리해야할 때

<br>

```let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');```   

```if (year < 2015) {```   
  ```alert( '숫자를 좀 더 올려보세요.' );```   
```} else if (year > 2015) {```   
  ```alert( '숫자를 좀 더 내려보세요.' );```   
```} else {```   //이 마지막 else는 선택사항  
  ```alert( '정답입니다!' );```   
```}```

<br>
<br>

조건부 연산자 ‘?’
---
> 조건에 따라 다른 값을 변수에 할당할 때 더 짧고 간결하게 변형할 수 있는 연산자   
> 피연산자 3개를 받는 자바스크립트의 유일한 연산자

    ?

```let result = condition ? value1 : value2;```  

평가 대상 condition이 truthly면 value1, 아니면 value2 반환


<br>

* 기존 구문

```let accessAllowed;```   
```let age = prompt('나이를 입력해 주세요.', '');```

```if (age > 18) {```   
  ```accessAllowed = true;```   
```} else {```   
  ```accessAllowed = false;```   
```}``` 

```alert(accessAllowed);```

<br>

* 조건부 연산자를 사용한 구문

```let accessAllowed;```   
```let age = prompt('나이를 입력해 주세요.', '');```

```let accessAllowed = (age > 18) ? true : false;```   
//물음표 연산자는 우선순위가 낮기 때문에 괄호 생략 가능

<br>
<br>

다중 ‘?’
---
> ? 연산자를 여러 개 연결하여 복수의 조건 처리

<br>

* 기존 구문 

```let age = prompt('나이를 입력해주세요.', 18);```

```if (age < 3) {```   
  ```message = '아기야 안녕?';```   
```} else if (age < 18) {```   
  ```message = '안녕!';```   
```} else if (age < 100) {```   
  ```message = '환영합니다!';```   
```} else {```   
  ```message = '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';```   
```}```

```alert( message );```

<br>

* 다중 조건부 연산자를 사용한 구문

#### falsy일 때 반환 값을 다음 조건으로 작성

```let age = prompt('나이를 입력해주세요.', 18);```

```let message = (age < 3) ? '아기야 안녕?' :```   
  ```(age < 18) ? '안녕!' :```   
  ```(age < 100) ? '환영합니다!' : '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';```

```alert( message );```

<br>
<br>

부적절한 ‘?’
---
> if 대용으로 사용하면 X   
> 조건에 따라 다른 값을 변수에 할당하지 않고 그저 짧게 쓰려하는 경우

<br>

* 변수에 할당하지 않은 예시

```let company = prompt('자바스크립트는 어떤 회사가 만들었을까요?', '');```

```(company == 'Netscape') ?```   
   ```alert('정답입니다!') : alert('오답입니다!');```