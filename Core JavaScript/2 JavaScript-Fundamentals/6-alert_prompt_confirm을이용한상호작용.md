alert, prompt, confirm을 이용한 상호작용
===
> 브라우저 환경에서 사용되는 최소한의 사용자 인터페이스 기능

<br>

* 모달: 해당 페이지 외의 부분과 상호작용이 불가능

* 모달 창 modal window: 메시지를 보여주는 창

<br>

alert
---
> 사용자가 확인 버튼을 누를 때까지 모달 창을 띄우는 함수

```alert("Hello");```

<br>
<br>

prompt
---
> 텍스트 메시지, 입력 필드, 확인/취소 버튼이 있는 모달 창을 띄워  
사용자가 기재한 문자열/ null을 반환하는 함수

```result = prompt(title, [default]);```

* title: 사용자에게 보여줄 문자열

* default: 입력 필드의 초기값 (선택값이지만 없는 경우에도 ''로 기본값 입력 권장)  
[ ] 대괄호는 선택값을 의미

* 취소/ [esc]자판을 선택한 경우에는 null을 반환

<br>
<br>

confirm 대화상자
---
> 질문, 확인/ 취소 버튼이 있는 모달 창을 띄워  
버튼에 따라 true/ false를 반환하는 함수

```result = confirm(question);```

* 확인은 true, 취소/ [esc]자판은 false를 반환