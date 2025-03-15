if와 '?'를 사용한 조건 처리
===

'if'문
---
> 괄호 안에 들어가는 조건을 평가,   
> 그 결과가 true이면 실행

    if()


```let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');```   
```if (year == 2015) alert( '정답입니다!' );```

<br>

#### 조건이 true일 때 복수의 문을 실행할 때
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

```if(0) { }``` // 0은 falsy

<br>

* 'truthy' 값: 이 외에 불린형으로 변환 시 true 가 되는 값

```if(1) { }``` // 1은 truthy


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
```} else {```   
  ```alert( '정답입니다!' );```   
```}```

<br>
<br>

조건부 연산자 ‘?’
---
> 조건에 따라 다른 값을 변수에 할당할 때 더 짧고 간결하게 변형할 수 있는 연산자   
> 피연산자를 3개나 받는 자바스크립트의 유일한 연산자

    ?

    평가 대상 condition이 truthly면 value1, 아니면 value2 반환
    let result = condition ? value1 : value2;


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

* 조건부 연산자를 사용한 구문

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

   
<br>
<br>

논리 연산자
===
> || (OR), && (AND), ! (NOT)   
> 피연산자로 모든 타입의 값을 받을 수 있고 결과 역시 모든 타입이 될 수 있음

<br>

|| (OR)
---
> 불린값을 조작하는 데 쓰임   
> 인수 중 하나라도 true이면 true, 그렇지 않으면 false

    result = a || b;

#### 피연산자가 모두 false인 경우를 제외하고 항상 true

```alert( true || true );```   // true   
```alert( false || true );```  // true   
```alert( true || false );```  // true   
```alert( false || false );``` // false

<br>

#### 피연산자가 불린형이 아니면 평가를 위해 불린형으로 반환
숫자 1은 true, 숫자 0은 false

```if (1 || 0) {``` // if( true || false )   
  ```alert( 'truthy!' );```   
```}```

<br>

#### if문에서 자주 사용
주어진 조건 중 하나라도 참인지 테스트하는 용도

```let hour = 9;```

```if (hour < 10 || hour > 18) {```   
  ```alert( '영업시간이 아닙니다.' );```   
```}```

<br>

#### 여러가지 조건을 넣을 수 있음

```let hour = 12;```   
```let isWeekend = true;```

```if (hour < 10 || hour > 18 || isWeekend) {```   
  ```alert( '영업시간이 아닙니다.' );``` // 주말이기 때문임   
```}```

<br>

첫 번째 truthy를 찾는 OR 연산자 ‘||’
---
> 자바스크립트에서만 제공하는 OR의 추가 기능

<br>

#### OR 연산자와 피연산자가 여러 개인 경우

```result = value1 || value2 || value3;```

1. 왼쪽부터 오른쪽으로 피연산자 평가
2. 각 피연산자 불린형으로 변환, 그 값이 true이면 연산을 멈추고 변환 전 원래 값을 반환
3. 모든 피연산자의 평가가 끝났는데 모두 false이면 마지막 피연산자 반환

<br>

```alert( 1 || 0 );``` // 1 (1은 truthy임)

```alert( null || 1 );``` // 1 (1은 truthy임)   
```alert( null || 0 || 1 );``` // 1 (1은 truthy임)

```alert( undefined || null || 0 );``` // 0 (모두 falsy이므로, 마지막 값을 반환)

<br>

* 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기

| | 을 사용하여 값이 있는 변수를 찾고 모두 값이 없으면 "익명"을 반환하기

```let firstName = "";```   
```let lastName = "";```   
```let nickName = "바이올렛";```

```alert( firstName || lastName || nickName || "익명");``` // 바이올렛

<br>

* 단락 평가
> 순차적으로 평가하다 truthy를 만나면 그 즉시 평가를 종료하는 것 

#### 두 번째 피연산자가 변수 할당 등 부수적인 효과를 가질 때 명확히 확인할 수 있음

```true || alert("not printed");```   
true에서 평가를 종료하기 때문에 alert 실행 x

```false || alert("printed");```   
앞이 false이기 때문에 alert 실행 후 평가 종료

<br>
<br>

&& (AND)
---
> 두 피연산자가 모두 참일 때 true를 반환, 그렇지 않으면 false

    result = a && b;

```alert( true && true );```   // true   
```alert( false && true );```  // false   
```alert( true && false );```  // false   
```alert( false && false );``` // false

<br>

#### if문과 AND 연산자를 함께 활용

```let hour = 12;```   
```let minute = 30;```   

```if (hour == 12 && minute == 30) {```   
  ```alert( '현재 시각은 12시 30분입니다.' );```   
```}```

<br>

#### 타입 제약 없이 피연산자가 불린형이 아니면 평가를 위해 불린형으로 반환

if (1 && 0) { // 숫자형 피연산자가 논리형 true && false 변환
  alert( "if 문 안에 falsy가 들어가 있으므로 alert창은 실행되지 않습니다." );
}

<br>

#### AND 연산자와 피연산자가 여러 개인 경우

```result = value1 && value2 && value3;```

1. 왼쪽부터 오른쪽으로 피연산자 평가
2. 각 피연산자 불린형으로 변환, 그 값이 false이면 연산을 멈추고 변환 전 원래 값을 반환
3. 모든 피연산자의 평가가 끝났는데 모두 true이면 마지막 피연산자 반환

AND 연산자는 첫 falsy 반환, OR 연산자는 첫 truthy 반환

<br>

//첫 피연산자가 truthy면 두 번째 피연산자 반환   
```alert( 1 && 0 );``` // 0   
```alert( 1 && 5 );``` // 5

//첫 피연산자가 falsy면 첫 번째 피연산자 반환   
```alert( null && 5 );``` // null
```alert( 0 && "아무거나 와도 상관없습니다." );``` // 0

```alert( 1 && 2 && null && 3 );``` // null

```alert( 1 && 2 && 3 );``` // 마지막 값, 3

<br>

#### && 의 우선순위가 || 의 우선순위 보다 높음

동일한 동작을 함

```a && b || c && d```   
```(a && b) || (c && d)```

<br>

#### || 또는 && 를 if 로 대체 금지

무엇을 구현하고자 하는지 더 명백히 드러내고 가독성이 좋음   
목적에 맞게 사용!

* 잘못된 예시 - && 사용

```let x = 1;```

```(x > 0) && alert( '0보다 큽니다!' );```

<br>

* 올바른 예시 - if문 사용

```let x = 1;```

```if (x > 0) alert( '0보다 큽니다!' );```

<br>
<br>

! (NOT)
---
> 두 피연산자가 모두 참일 때 true를 반환, 그렇지 않으면 false

    result = !value;

#### 하나의 인수만 받음

```alert( !true );``` // false   
```alert( !0 );``` // true

1. 피연산자를 불린형으로 반환
2. 1 에서 변환된 값의 역을 반환

<br>

#### NOT 을 두 개 연달아 사용 (!!) 하여 값을 불린형으로 변환할 수 있음

```alert( !!"non-empty string" );``` // true   
```alert( !!null );``` // false

1. 피연산자를 불린형으로 반환
2. 1 에서 변환된 값의 역을 반환
3. 2 에서 변환된 값의 역을 반환

#### 내장 함수 Boolean 과 !! 은 같은 결과 도출

```alert( Boolean("non-empty string") );``` // true   
```alert( Boolean(null) );``` // false

<br>

#### NOT 의 우선순위가 모든 논리 연산자 (&&, || 보다) 중에서 가장 높음

<br>
<br>

nullish 병합 연산자 '??'
===
>짧은 문법으로 여러 피연산자 중 그 값이 <b>확정되어있는</b> 변수를 찾을 수 있음

    ??

```a ?? b```

* a 가 null / undefined 가 아닌 경우 a 반환   
* 그 외의 경우에는 b 반환

<br>

#### 같은 동작을 하는 두 코드

```x = a ?? b```

```x = (a !== null && a !== undefined) ? a : b;```

<br>

#### 변수에 값을 입력한 변수 찾아내기

```let firstName = null;```   
```let lastName = null;```   
```let nickName = "바이올렛";```

// null이나 undefined가 아닌 첫 번째 피연산자   
```alert(firstName ?? lastName ?? nickName ?? "익명의 사용자");``` // 바이올렛

<br>
<br>

'??'와 '||'의 차이
---
> 유사하지만 일반 truthy 값과 정의된(defined) 값을 구한다는 점에서 차이

#### null, undefined, 숫자 0을 구분 지어 다뤄야 할 때

```height = height ?? 100;``` // height에 값이 정의되지 않았으므로 100

<br>

```let height = 0;``` // height에 값이 정의되었으므로

```alert(height || 100);``` // 100 (0은 falsy한 값으로 처리)   
```alert(height ?? 100);``` // 0 (0이라는 값이 할당된 것)

<br>
<br>

연산자 우선순위
---
> 우선순위는 5번째로 낮은 편   
> = 와 ? 보다는 먼저지만 대부분의 연산자보다는 나중에 평가

#### 복잡한 표현식 속에서는 괄호 사용 추천

```let height = null;```   
```let width = null;```

// 괄호를 추가!   
```let area = (height ?? 100) * (width ?? 50);```

```alert(area);``` // 5000

<br>

#### 안전성 관련 이슈로 ??는 &&나 ||와 함께 사용 시 괄호를 사용해야 함

```let x = 1 && 2 ?? 3;``` // SyntaxError: Unexpected token '??'

```let x = (1 && 2) ?? 3;``` // 제대로 동작합니다.

alert(x); // 2

<br>
<br>

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