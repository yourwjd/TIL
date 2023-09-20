let message; //변수 선언
message = 'Hello'; //데이터 저장(값 할당)
message = 'World!'; //값 변경

// alert('message'); //저장된 값 보여줌



//한 변수의 값을 다른 변수의 값으로 복사
let Hello = "Hello World!";

let World; //복사할 변수
World = Hello; //값 복사

//같은 값을 가지게 됨
console.log(Hello);
console.log(World);

//$ _를 변수명에 사용할 수 있음
let $ = 1;
let _ = 2;

console.log($ + _);

//재할당 불가능한 상수
const myBirthday = '02.10.13';

//별칭으로 사용하는 대문자 상수
const COLOR_RED = "F00"; //기억하기 힘든 컬러코드를 대문자 상수에 저장
const COLOR_GREEN = "0F0";
const COLOR_BLUE = "00F";
const COLOR_ORANGE = "FF7F00";

let color = COLOR_RED; //상수를 별칭으로 사용
console.log(color); //컬러코드를 쉽게 찾을 수 있음

//2-4과제
let admin;
let name = "John";

admin = name;
//name = admin 으로 작성하면 오류. 아마 순서가 admin이 먼저이기 때문일 것

console.log(admin);

//자료형
//숫자형
let n = 123;
n = 12.345;

//Infinity 출력
console.log(1 / 0);
console.log(Infinity);
//NaN 출력
console.log("문자열" / 2)
console.log("문자열" / 2 + 5);

//Bigint
// let bigInt = 1234567890123456789012345678901234567890; //오류 발생
const bigInt = 1234567890123456789012345678901234567890n;

//문자형
let str = "Hello";
let str2 = 'Hello!'
let phrase = `Hello~ ${str}`;

let name2 = "John";
console.log(`Hello, ${name2}!`);

console.log(`the result is ${1 + 2}`);

//불린형
let nameFielsChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;

console.log( isGreater );

//null
let day = null; //날짜를 알 수 없거나 그 값이 비어있을 때

//undefiined
let age;
console.log(age);

//undefined 할당
let Age = 100;
Age = undefined;
console.log(Age);

//typeof
typeof 0
typeof null

//2-5과제
let name3 = "Ilya";

console.log(`hello ${1}`); //hello 1
console.log(`hello ${"name3"}`); //hello name3
console.log(`hello ${name3}`); //hello Ilya

//2-6
// alert("Hello");

// let dog = prompt('당신이 좋아하는 동물은 무엇인가요', '강아지');

// let check = confirm("모두 확인했나요?");

//2-6과제
// let name4 = prompt("당신의 이름은 무엇인가요", 'yourwjd');
// alert(name4);