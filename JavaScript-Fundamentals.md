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




    <p>정수 및 부등소수점 숫자</p>
    <p>연산은 *: 곱셈, /: 나눗셈, +: 덧셈, -: 뺄셈 ...</p>
    <p>특수 숫자 값 포함</p>
    <ul>
        <li>Infinity, -Infinity</li>
        <p>어떤 숫자보다 더 큰 특수 값, 무한대<br>
        어떤 숫자든 0으로 나누면 Infinity 즉 무한대를 얻을 수 있음</p>
        <li>NaN</li>
        <p>부정확하거나 정의되지 않은 수학 연산 사용 시 에러 발생 즉 NaN 반환됨<br>
        한 번 NaN이 반환된 이상 웬만해서는 변하지 않음<br>
        연산 과정 중 반환 됐을 시 모든 결과에 영향을 미치게 됨/p>
    </ul>

    <br><br>

    <li>BigInt</li>
    <p>2<sup>53</sup>-1 (9007199254740991) 보다 큰 값 혹은 
        -(2<sup>53</sup>-1) 보다 작은 정수는 숫자형으로 나타낼 수 없음</p>
    <p>BigInt 를 사용해 길이에 상관없이 정수를 나타낼 수 있음<br>
    정수 리터럴 끝에 n을 붙이면 됨</p>
    <p>const bigInt = 1234567890123456789012345678901234567890n;</p>

    <br><br>

    <li>문자형 string type</li>
    <p>문자열</p>
    <p>따옴표로 묶어 사용</p>
    <ol>
        <li>큰따옴표: "문자열"</li>
        <li>작음따옴표: '문자열'</li>
        <li>역따옴표(백틱): `문자열`</li>
    </ol>
    <p>큰따옴표, 작은따옴표는 차이 x <br>
        역따옴표를 사용하면 변수나 표현식을 $() 안에 넣어 표현할 수 있음</p>
    <p>let name = "John";<br>
    alert(`Hello, ${name}!`) Hello, John! 출력<br><br>
    alert(`the result is ${1 + 2}`); the result is 3 출력</p>

    <br><br>

    <li>불린형 logical type</li>
    <p>true 긍정, false 부정 값</p>
    <p>let nameFielsChecked = true;<br>
        let ageFieldChecked = false;</p>
    <p>let isGreater = 4 > 1;<br>
        alert( isGreater ); true 출력</p>

    <br><br>

    <li>'null' 값</li>
    <p>nothing 존재하지 않는 값, empty 비어 있는 값, unknown 알 수 없는 값</p>
    <p>오로지 null 값만 포함하는 별도의 자료형<br>
        다른 언어의 null과 성격이 다름
    </p>
    <p>let age = null;</p>

    <br><br>

    <li>'undefined' 값</li>
    <p>값이 할당되지 않은 상태</p>
    <p>let age;<br>
    alert(age); undefined 출력</p>

    <p>직접 할당도 가능, 하지만 null 사용을 권장</p>
    <p>let age = 100;<br>
        age = undefined;<br>
        alert(age); undefined 출력</p>

    <br><br>

    <li>객체와 심볼</li>
    <p>객체형 (object)</p>
    <p>데이터 컬렉션, 복잡한 개체 표현 가능</p>

    <br>

    <p>심볼형 (symbol)</p>
    <p>객체의 고유한 식별자 만들 때 사용</p>

    <br><br>

    <li>typeof 연산자</li>
    <p>인수의 자료형을 문자열 형태로 반환</p>
    <p>typeof x 혹은 typeof (x) 형태로 사용</p>
    <p>typeof 0; "number" 출력 <br>
    typeof true; "boolean" 출력</p>
    <p>typeof null; 객체형(objrct)이 아니지만 하위호환성을 위해 오류를 출력<br>
        typeof alert; 함수형(function)은 존재하지 않지만 하위호환성을 위해 출력</p>
</ol>

<h3>2-6</h3>
<h4>alert</h4>
<p>사용자가 확인 버튼을 누를 때까지 메시지를 보여주는 창</p>
<p>alert("Hello");</p> 
<p>메시지를 보여주는 창 = 모달 창(modal window) <br>
    '모달'이란 해당 페이지 외의 부분과 상호작용이 불가능하다는 의미</p>

<h4>prompt</h4>
<p>텍스트 메시지, 입력 필트, 확인/취소 버튼이 있는 모달 창</p>
<ol>
    <li>title</li>
    <p>사용자에게 보여줄 문자열</p>
    <li>default</li>
    <p>입력 필드의 초기값(선택값)<br>
    []대괄호는 필수가 아닌 선택이라는 의미<br>
    취소, 자판 esc를 선택한 경우에는 null을 반환</p>
</ol>    
<p>result = prompt(title, [default]);</p>
<p>[default]는 선택값이지만 없는 경우에도 ''로 기본값을 넣어주는 것을 권장</p>

<h4>confirm 대화상자</h4>
<p>질문, 확인/취소 버튼이 있는 모달 창</p>
<p>result = confirm(question);</p>
<p>확인은 true, 취소는 false를 반환</p>
