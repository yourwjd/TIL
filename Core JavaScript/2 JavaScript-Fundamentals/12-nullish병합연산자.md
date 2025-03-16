nullish 병합 연산자 '??'
===
>짧은 문법으로 여러 피연산자 중 그 값이 **확정되어있는** 변수를 찾을 수 있음  
최근 추가된 문법

    ??

    a ?? b

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

#### 모두 값이 없는 변수라면 "익명의 사용자"가 출력됨

<br>
<br>

'??'와 '||'의 차이
---
> 유사하지만 일반 truthy 값과 정의된(defined) 값을 구한다는 점에서 차이

* ||  
첫 번째 truthy 값을 반환

* ??  
첫 번째 정의된 값을 반환

<br>

#### null, undefined, 숫자 0을 구분 지어 다뤄야 할 때

```let height = 0;``` // height에 값이 정의되었으므로

```alert(height || 100);``` // 100 (0은 falsy한 값으로 처리)   
```alert(height ?? 100);``` // 0 (0이라는 값이 할당된 것)

<br>
<br>

'??' 연산자 우선순위
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

#### 안전성 관련 이슈로 ??는 괄호를 사용하지 않으면 &&나 ||와 함께 사용 불가

```let x = 1 && 2 ?? 3;``` // SyntaxError: Unexpected token '??'

```let x = (1 && 2) ?? 3;``` // 제대로 동작합니다.

```alert(x);``` // 2