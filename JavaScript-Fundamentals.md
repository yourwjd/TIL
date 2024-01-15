Hello World!
===

외부 스크립트
---
```<script src="파일 경로"></script>```   
```<script src="url 전체"></script>```   

복수 사용 가능

<br>
<br>

코드 구조
===
문(statement)
---
> 어떤 작업을 수행하는 문법구조와 명령어   

```alert('Hello');```   
```alert('World');```   

서로 다른 문은 세미콜론으로 구분

줄바꿈 시 세미콜론 자동 삽입이 일어나긴하지만 아닌 경우도 있기 때문에 오류를 방지하기 위해 필수 사용!

<br>

주석
---
한 줄의 주석

    // (주석)   
    단축키 ctrl + /


여러 줄의 주석

    /* (주석) */   
    단축기 ctrl + shift + /   

    중첩 주석 불가능

<br>
<br>

엄격 모드 (strict mode)
===
> es5 버전 이후 수정된 기능 사용으로 오류 발생 시 숨기지 않고 활성화   

```"use strict"```   
```'use strict'```

#### 브라우저 콘솔에서 사용 시 콘솔창에   
```'use strict'; + 줄바꿈(shift+enter) ```   
<br>
사용 시 모든 스크립트가 엄격모드로 실행   

반드시 최상단에 위치, 그렇지 않으면 그 밑에 있는 부분만 엄격모드 실행   

한 번 적용되면 돌이킬 수 없음

코드를 클래스와 모듈을 사용하여 구성하면 생략해도 됨

<br>
<br>

변수와 상수
===

변수
---
> 데이터를 저장하는 '이름이 붙은 저장소'
>   >재할당 가능, 재선언 불가능

    let 변수이름;

#### 변수 이름이 message일 때   
```let message;``` //변수 선언   
```message = 'Hello';``` //데이터 저장(값 할당)   

<br>

#### 한 줄에 변수 선언, 값 할당을 동시에 작성 가능함   
```let message = 'Hello';```

<br>

#### 한 줄에 여러 변수를 선언 가능함 (권장x)   
```let user = 'John', age= 25, message = 'Hello';```

<br>

#### 값을 변경할 수 있음   
```let message;```   
```message = 'Hello!';```   
```message = 'World!'``` //값 변경

<br>

#### 값을 다름 변수의 값으로 복사할 수 있음   
```let Hello = "Hello World!";```   
```let World;``` //복사할 변수   
```World = Hello;``` //Hello의 값을 World에 복사

<br>

변수 명명 규칙
---
* 문자, 숫자, 기호 $ _ 만 사용 가능
    ```let $ = 1;```
    ```let _ = 2;```


* 첫 글자에는 숫자가 올 수 없음

* 예약어는 사용할 수 없음

* 주로 카멜 표기법을 사용함   
ex) MyVeryLongName

* 대소문자를 구별함

* 영어 사용 권장

<br>

상수
---
>변하지 않는 변수
>    >재할당, 재선언 불가능
   
    const 변수이름;

```const myBirthday = '02.10.13'```   
이 상수 myBirthday 의 값은 02.10.13으로 고정

<br>

#### 변하지 않을 값이라면 변수 let보다는 상수 const를 사용

<br>

#### 기억하기 힘든 값을 대문자 상수에 할당해 별칭으로 사용할 수 있음 

```const COLOR_RED = "F00";``` //기억하기 힘든 컬러코드를 대문자 상수에 저장   
```let color = COLOR_RED;``` //상수를 별칭으로 사용   

```alert(color);``` //컬러코드를 쉽게 찾을 수 있음

<br>
<br>

자료형
===

>값은 항상 특정 자료형에 속해있음

<br>

#### 동적 타입 언어

변수는 재할당이 가능하기 때문에 자료형과 관계없이 모든 데이터일 수 있음
이처럼 자료의 타입은 있지만 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어

<br>

1.숫자형 number type
---
> 정수 및 부등소수점 숫자

```let n = 123;```
```n = 12.345;```

<br>

#### 대표적 연산
* 곱셉 *
* 나눗셈 /
* 덧셈 +
* 뺄셈 -

<br>

#### 일반 숫자 외의 특수 숫자 값 special numeric value도 포함
* Infinity, -Infinity   
    어떤 숫자보다 더 큰 특수 값, 무한대  
    어떤 숫자든 0으로 나누면 Infinity 즉 무한대를 얻을 수 있음
    ```console.log(1 / 0);```
    ```console.log(Infinity);```

* NaN
    부정확하거나 정의되지 않은 수학 연산 사용 시 에러 발생 즉, NaN 반환됨   
    한 번 NaN이 반환된 이상 웬만해서는 변하지 않음   
    연산 과정 중 반환 됐을 시 모든 결과에 영향을 미치게 됨
    ```console.log("문자열" / 2)```
    ```console.log("문자열" / 2 + 5);```

<br>

#### BigInt
2<sup>53</sup>-1 (9007199254740991) 보다 큰 값 혹은 -(2<sup>53</sup>-1) 보다 작은 정수는 숫자형으로 나타낼 수 없음

이때 BigInt 를 사용해 길이에 상관없이 정수를 나타낼 수 있음   

정수 리터럴 끝에 **n** 붙이기   
```const bigInt = 1234567890123456789012345678901234567890n;```

<br>
<br>

2.문자형 string type
---
> 문자열

#### 따옴표로 묶어 사용
* 큰따옴표: "문자열"
  작음따옴표: '문자열'   

    차이 x

* 역따옴표(백틱): `문자열`   

    변수나 표현식을 $() 안에 넣어 표현할 수 있음   
    ```let name = "John";```   
    ```alert(`Hello, ${name}!`)``` //Hello, John! 출력   
    ```alert(`the result is ${1 + 2}`);``` //the result is 3 출력

<br>
<br>

3.불린형 logical type
---
> true 긍정, false 부정 값

```let nameFielsChecked = true;```   
```let ageFieldChecked = false;```

<br>

#### 비교 결과 저장
```let isGreater = 4 > 1;```   
```alert( isGreater );``` //true 출력

<br>
<br>

4.null 값
---
> 어느 자료형에도 속하지 않는 값, 오로지 null값만 포함하는 별도의 자료형   
다른 언어들의 null과 성격이 다름

```let age = null;```

* nothing 존재하지 않는 값
* empty 비어 있는 값
* unknown 알 수 없는 값

<br>
<br>

5.undefined 값
---
> 값이 할당되지 않은 상태를 나타내는 자신만의 자료형

<br>

#### 변수는 선언했지만 값을 할당하지 않은 경우
```let age;```   
```alert(age);``` //undefined 출력

<br>

#### 직접 undefined를 할당한 경우
```let age = 100;```   
```age = undefined;```

```alert(age);``` //undefined 출력

가능은 하지만 변수의 초기값을 남겨두기 위해 null을 사용하는 것을 권장

<br>
<br>

6.객체와 심볼
---
> 객체형 (object): 데이터 컬렉션, 복잡한 개체 entity 표현 가능 

  
> 심볼형 (symbol): 객체의 고유한 식별자 unique identifier 만들 때 사용

<br>
<br>

7.typeof 연산자
---
> 인수의 자료형 반환   
 자료형에 따라 다르게 처리하거나 자료형을 알아내고자 할 때 유용

<br>

#### 두 가지 형태의 문법 지원 (결과는 동일)
* 연산자 typeof x
* 함수 typeof(x)

    >인수의 자료형을 나타내는 문자열 반환

    ```typeof 0;``` //"number" 출력   
    ```typeof true;``` //"boolean" 출력

    ```typeof null;``` //"object" 출력   
    null은 object가 아니지만 하위 호환성을 위해

    ```typeof alert;``` //"function" 출력
    피연산자가 함수인 경우 function 반환   
    함수형(function)은 object 객체형에 속하는 것이지만 하위호환성을 위해
    
<br>
<br>

alert, prompt, confirm을 이용한 상호작용
===
alert
---
> 사용자가 확인 버튼을 누를 때까지 메시지를 보여주는 창

```alert("Hello");```

* 모달: 해당 페이지 외의 부분과 상호작용이 불가능

* 모달 창 modal window: 메시지를 보여주는 창

<br>
<br>

prompt
---
> 텍스트 메시지, 입력 필드, 확인/취소 버튼이 있는 모달 창

```result = prompt(title, [default]);```

* title: 사용자에게 보여줄 문자열

* default: 입력 필드의 초기값 (선택값이지만 없는 경우에도 ''로 기본값 입력 권장)

* 취소, [esc]를 선택한 경우에는 null을 반환

<br>
<br>

confirm 대화상자
---
> 질문, 확인/취소 버튼이 있는 모달 창

```result = confirm(question);```

* 확인은 true, 취소는 false를 반환

<br>
<br>

형 변환 type conversion
===

* 자동 변환: 함수, 연산자에 전달되는 값이 적절한 자료형으로 변환되는 경우   
ex) alert의 문자열로 자동 변환, 수학 관련 연산자가 전달받은 값 숫자 변환

* 명시적 변환: 전달받은 값을 의도를 갖고 원하는 타입으로 변환하는 경우

<br>

1.문자형 변환
---
> 문자형의 값이 필요할 때

<br>

#### alert 메서드의 매개변수

무조건 문자형을 받기 때문에 다른 형의 값을 받을 경우 문자열로 자동 변환

```let value = true```   
```alert(typeof value);``` //boolean 출력

<br>

#### String(value) 함수 호출

전달받은 값을 문자열로 변환

```value = String(value);``` //true
```alert(typeof value);``` //string 출력


     변환 시 false -> "false", null -> "null" 같은 형식으로 변환됨

<br>
<br>

2.숫자형으로 변환
---
> 수학과 관련된 함수와 표현식을 사용할 때

<br>

#### 숫자형이 아닌 나누기 [/] 를 적용한 경우

숫자형으로 자동 변환된 후 연산 수행

```alert( "6" / "2" );``` //3 출력

<br>

#### Number(value) 함수를 사용한 경우

* 해당 함수를 사용하면 value 값을 숫자형으로 명시해 변환함

    ```let str = "123";```   
    ```let num = Number(str);```   //"123"이 123으로 변환
    ```alert(typeof num);``` //number 출력

<br>

* 이때, value 값에 숫자 외의 글자가 들어가 있는 경우에는 NaN 출력

    ```let age = Number("임의의 문자열 123");``` //형 변환 실패    
    ```alert(age);``` //NaN 출력

<br>

#### 숫자형 변환 규칙

* undefined -> NaN

* null -> 0

* true and false -> 1 and 0

* string ->   

    1. 문자열 처음과 끝 공백 제거   
    ```alert( Number("   123   ") );``` //Number("123")

    2. 남아있는 문자열이 있다면 -> 0  
    ```alert( Number(false) );``` //0 

    3. 남아있는 문자열이 없다면 -> 숫자 읽기   
    ```alert( Number("123") );``` //123   
    ```alert( Number(true) );``` //1

    4. 변환에 실패하면 -> NaN   
    ```alert( Number("123z") );``` //NaN

<br>
<br>

3.불린형으로 변환
---
> 논리 연산을 수행할 때

<br>

* false: 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 값

    ```alert( Boolean(0) );``` //숫자 0 -> false   
    ```alert( Boolean("") );``` //빈 문자열 -> false

* true: 그 외의 값

    ```alert( Boolean(1) );``` //숫자 1 -> true   
    ```alert( Boolean("hello") );``` //문자열 -> true   
    ```alert( Boolean("0") );``` //문자열 0 -> true  
    ```alert( Boolean(" ") );``` //공백있는 문자열 -> true

<br>
<br>

기본 연산자와 수학
===

용어 정리
---

#### 피연산자 operand
> 연산자가 연산을 수행하는 대상   
> 인수 argument로 불리기도 함

    5 * 2 
    왼쪽 피연산자 5, 오른쪽 피연산자 2

<br>
<br>

### 단항, 이항 연산자 모두가 가능한 마이너스 연산자

#### 단항 연산자 unary
> 피연산자를 하나만 받는 연산자

    x = -x
    피연산자의 부호를 뒤집는 단항 마이너스 연산자


#### 이항 연산자 binary
> 피연산자를 두 개 받는 연산자

    y - x
    피연산자끼리의 뺄셈을 해주는 이항 마이너스 연산자

<br>
<br>

자바스크립트에서 지원하는 수학 연산자
---

* 덧셈 +

* 뺄셈 -

* 곱셈 *

* 나눗셈 /

* 나머지 %  

* 거듭제곱 **   
    >a ** b   
    >a를 b번 곱한 값

    >4 ** (1/2) (제곱근 구하기)   
    >정수가 아닌 숫자에 대해서도 동작

<br>
<br>

이항 연산자 '+'와 문자열 연결
---
> 피연산자가 문자열이면 덧셈이 아닌 문자열 병합 (연결)

```let s = "my" + "string";```   
```alert(s);``` //"mystring" 출력

<br>

#### 피연산자 중 하나가 문자열이면 다른 하나도 문자열로 변환됨
> 문자열의 위치, 순서는 중요하지 않음   
> 문자열이 존재한다면 출력값이 문자열이 됨

```alert('1' + 2);``` //"12"출력   
```alert(2 + '1');``` //"21"출력

<br>

#### 왼쪽에서 오른쪽으로 순차적으로 진행되는 연산

```alert(2 + 2 + '1');``` //2 + 2가 먼저 더해진 후 '1'과 만나 '41' 출력

<br>

#### 피연산자가 문자열일 때 뺄셈과 나눗셈 연산자의 경우

```alert(6 - '2');``` //'2'가 숫자형으로 변환된 후 연산이 진행돼 4 출력   
```alert('6' / '2');``` //'6', '2' 모두 숫자형으로 변환된 후 연산이 진행돼 3 출력

<br>
<br>

단한 연산자 '+'와 숫자형으로의 변환
---  
> 이미 숫자형이면 아무런 영향을 미치지않음   
> 피연산자가 숫자형이 아니면 숫자형으로 변환   

#### 피연산자가 이미 숫자형인 경우

```let x = 1;```   
```alert( +x );``` // 1 출력

```let y = -2;```   
```alert( +y );``` // -2 출력

<br>

#### 피연산자가 숫자형이 아닌 경우
> 짧은 문법으로도 숫자형으로 변환하는 'Number ( )' 와 동일한 일을 할 수 있음

```alert( +true );``` // 1 출력   
```alert( +"" );``` // 0 출력

<br>

#### 숫자형으로 변환 시

* null은 0이 됨
* undefined는 NaN이 됨
* 문자열은 앞뒤 공백 사라짐

<br>
<br>

이항 덧셈 연산자와 단항 덧셈 연산자
---

#### 이항 덧셈 연산자

> 문자열로 변환 후 연결

```let apples = "2";```   
```let oranges = "3";```

```alert( apples + oranges );```

//"2" + "3" 문자열을 연결하여 "23" 출력

<br>

#### 단항 덧셈 연산자

> 숫자형로 변환 후 연산   

```let apples = "2";```   
```let oranges = "3";```

```alert( +apples + +oranges );```

//"2", "3" 숫자형으로 변환하여 2 + 3으로 5 출력

<br>
<br>

연산자 우선순위 precedence
---

#### 단한 덧셈 연산자가 덧셈보다 먼저 수행

    17.단항연산자   
    ...   
    13.단항연산자

(참고: [우선순위표][precedence])

[precedence]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence

<br>
<br>

할당 연산자 assignment
---
> 무언가를 할당할 때 쓰이는 연산자 =   
> 우선순위는 3으로 낮은 편

<br>

#### 계산이 먼저 이루어진 후에 할당됨

```let x = 2 * 2 + 1;```   
```alert(x);``` // 5 출력

<br>

#### 값을 반환하는 할당 연산자

```let a = 1;```   
```let b = 2;```

```let c = 3 - (a = b + 1);``` // a에 b + 1를 할당, 즉 3 의 값을 반환   

```alert(a);``` // 3 출력   
```alert(c);``` // 0 출력

<br>

#### 할당 연산자 체이닝

```let a, b, c;```   

```a = b = c = 2 + 2;``` // 2 + 2 즉 4가 c, b, a 순으로 할당

```alert(a);``` // 4 출력   
```alert(b);``` // 4 출력   
```alert(c);``` // 4 출력

<br>

가독성있게 아래처럼 작성하는 것을 권장   

```c = 2 + 2;```   
```b = c;```   
```a = c;```

<br>

복합 할당 연산자
---
> 변수에 연산자를 적용하고 그 결과를 같은 변수에 저장하는 경우

```let n = 2;```   
```n = n + 5;``` // 7 출력   
```n = n * 2;``` // 14 출력

<br>

#### 연산자 += , -= , /= , *=

```let n = 2;```   
```n += 5;``` // 7 출력   
```n *= 2;``` // 14 출력

<br>

#### 할당 연산자와 동일한 우선순위

대부분 다른 연산자가 실행된 후에 복합 연산자 실행

```let n = 2;```   
```n *= 3 + 5;```

```alert(n);``` // 16 출력

<br>
<br>

증가 감소 연산자
---
> 숫자를 하나 늘리거나 줄이는 연산

<br>

#### 증가 연산자 increment ++

```let counter = 2;```   
```counter++;``` // counter = counter + 1 과 동일한 동작

```alert(counter);``` // 3 출력

<br>

#### 감소 연산자 decrement --

```let counter = 2;```   
```counter--;``` // counter = counter - 1 과 동일한 동작

```alert(counter);``` // 1 출력

<br>

    변수에만 사용 가능

    5++ 와 같이 값에 사용하려하면 에러 발생

<br>

#### ++ 와 -- 연산자의 위치
> 변수 앞 혹은 뒤에 올 수 있음   

> 피연산자의 값을 증가, 감소 시켜준다는 점에서 동일함   
> 반환 값을 사용하지 않으면 동일함

<br>

* 전위형 prefix form
    > 증가/ 감소 후의 새로운 값 반환

        ++counter   

    피연산자 앞에 오는 경우

    ```let counter = 1;```   
    ```let a = ++counter;```

    ```alert(a);``` // 2 출력

<br>

* 후위형 postfix form
    > 증가/ 감소 전의 기존 값 반환 

        counter++   
        
    피연산자 뒤에 오는 경우

    ```let counter = 1;```   
    ```let a = counter++;```

    ```alert(a);``` // 1 출력
<br>
<br>

비트 연산자 bitwise operator
---
> 인수를 32비트 정수로 반환하여 이진 연산을 수행   
> 대부분의 프로그래밍 언어에서 지원

<br>

#### 사용할 일 거의 x, 암호 다룰 때에는 유용

(참고: [비트연산자][bitwise operator])

[bitwise operator]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators

<br>

#### 연산자 목록

* 비트 AND ```&``` 

* 비트 OR ```|``` 

* 비트 XOR ```^``` 

* 비트 NOT ```~``` 

* 왼쪽 시프트 ```<<``` 

* 오른쪽 시프트 ```>>``` 

* 부호 없는 오른쪽 시프트 ```>>>``` 

<br>
<br>

쉼표 연산자 comma operator
---
> 여러 표현식을 코드 한 줄에서 평가할 수 있게 함   
> 주로 코드를 짧게 쓰려는 의도로 사용

    ,

#### 모든 표현식이 평가되지만 결과는 마지막 표현식만 반환됨

```let a = (1 + 2, 3 + 4)```   
```alert(a);``` // 7 출력

<br>

#### 매우 낮은 우선순위

할당 연산자보다 낮음   
그렇기 때문에 괄호를 사용해야 원하는 값을 얻을 수 있음

<br>

#### 주로 여러 동작을 하나의 줄에서 처리하려는 복잡한 구조에서 사용

<br>
<br>

비교 연산자
===

기본 수학 연산
---
* 크고 작음: >, <
* 크거나/작거나 같은: >=, <=
* 같음(동등): ==   
        (할당: =)
* 같지 않음(부등): !=

<br>
<br>

불린형 반환
---
* true: 긍정, 참, 사실
* false: 부정, 거짓, 사실이 아님

```alert(2 > 1);``` //true   
```alert(2 == 1);``` //false

#### 반환된 불린값을 변수로 할당할 수 있음

```let result = 5 > 4``` //true   
```alert(result);``` //true

<br>
<br>

문자열 비교
---
#### 유니코드 순으로 문자열 비교 (소문자 > 대문자)

1. 문자열 첫 글자 비교

2. 같을 시 다음 글자 비교

3. 비교가 될 때까지 위 과정 반복

4. 문자열이 종료되었음에도 비교가 되지 않는다면 동일하다고 결론   
이 때 문자열의 길이가 다르면 긴 문자열이 크다고 결론

<br>

```alert('Z' > 'A');``` //true   
```alert('Glow' > 'Glee');``` //true   
```alert('Bee' > 'Be');``` //true
```alert('2' > '12');``` //true

<br>
<br>

다른 형을 가진 값 간의  비교
---
* 자료형이 다를 경우 숫자형으로 변환

```alert('2' > 1)``` //true   
숫자 2로 변환된 후 비교 진행

```alert('01' == 1)``` //true   
숫자 1로 변환된 후 비교 진행

<br>

* 불린값의 경우 true는 1, false는 0으로 변환

```alert(true == 1);``` //true   
true가 1로 변환된 후 비교 진행

```alert(flase == 0);``` //true   
flase가 0로 변환된 후 비교 진행

<br>

* 동등 비교와 논리 평가를 동시에 하는 경우

```let a = 0;```   
```alert( Boolean(a) );``` //false   
숫자형 0은 false를 반환

```let b = "0";```   
```alert( Boolean(b) );``` //true   
문자열 "0"은 빈 문자열이 아니기 때문에 true를 반환

```alert(a == b);``` //true   
위에서는 각 값이 false와 true였지만   
동등 비교 == 시 에는 문자열 "0"을 숫자형 0으로 변환하기 때문에 0 == 0 true가 됨

<br>
<br>

일치 연산자
---
> 형 변환없이 값을 비교   
> 자료형의 동등 여부까지 검사

    ===

#### 동등 연산자와의 차이

* 동등 연산자   
```alert( 0 == false );``` //true

* 일치 연산자   
```alert( 0 === false );``` //false   
자료형이 다르기 때문에 false

<br>

#### 불일치 연산자 !== 도 존재

<br>
<br>

null / undefined 의 비교
---

* 일치 연산자 === 를 사용하여 비교   

```alert( null === undefined );``` //false   
자료형이 다르기 때문에 false

<br>

* 동등 연산자 == 를 사용하여 비교   

```alert( null == undefined );``` //false   
동등 연산자의 특별한 규칙   
다른 값과 비교할 때는 무조건 false를 반환

<br>

* 산술 연산자 / 기타 비교 연산자 <, >, <=, >= 를 사용하여 비교   

null, undefined 가 숫자형으로 변환

null = 0   
undefined = NaN

<br>
<br>

* #### null vs 0

```alert( null > 0 );```  //false   
숫자형 0 으로 변환하는 기타 비교 연산자

```alert( null == 0 );``` //false   
피연산자가 undefined나 null일 때 형 변환을 하지 않음

```alert( null >= 0 );``` //true   
숫자형 0 으로 변환하는 기타 비교 연산자

#### 따라서 연산자의 차이로 1번째, 3번째와 2번째 값이 논리에 맞지 않게 나오는 것

<br>

* #### 비교가 불가능한 undefined

```alert( undefined > 0 );``` //false   
NaN 으로 변환하는 기타 비교 연산자

```alert( undefined < 0 );``` //false   
NaN 으로 변환하는 기타 비교 연산자

```alert( undefined == 0 );``` //false   
피연산자가 undefined나 null일 때 형 변환을 하지 않음


<br>
<br>

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