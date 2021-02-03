(function() {
    'use strict';
  
    console.log('Hello world!');
  })();

const obj = {
  name: "John",
  age: 25,
};

console.log(obj.name);

let arr = ['plum.png', 8, 'apple.jpg', {}, []];
console.log(arr[1]);

// alert('Hello!');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Where are you from?", "Russia");
// console.log(answer+5);

const answers = [];
// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("What is your age?", "");
// answers[2] = prompt("What is your place?", "");

console.log(typeof(answers));

const category = "toys";
console.log(`https://someurl.com/${category}/5/234`);

const user = "Dali";
alert(`Wellcome, ${user}`);

var ro = [1, 2, 3, 4];

const groupp = "toys";
console.log("https://someurl.com/" + groupp);
// или

console.log(`https://someurl.com/${groupp}/5`);

const man = "Felix";
alert(`Hello, ${man}`);

// конкритинация

console.log('arr' + ' - object');
// 4 - object
console.log(4 + +' - object'); 
// NaN
console.log(4 + +"5");
// 9
// знак "+" который стоит перед обьектом называется унарным

let incr = 10,
    decr = 10;
// incr++;
// оператор "инкремента" - увеличивает на 1
// decr--;
// оператор декремента - уменьшение на 1
console.log(++incr);
console.log(--decr);
// incr++ - постфиксная форма
// ++incr - префиксная форма

console.log(10%4);

// один знак = присваивание
// два знака == сравнение
// три знака === строгое равентво
console.log(2*4 == 8);
// true
console.log(2*4 === "8");
// false

// && знак "и" раьотает только тогда, когда 2 или более выражения являются правдивыми: и это правда, и это правда
// || знак "или" работает когда хотя бы один является правдивым: или это правда, или это правда

const isChecked = true,
      isClose = true;
console.log(isChecked && isClose);
// true
const isNoted = true,
      isPosted = false;
console.log(isNoted || isPosted);      
// true

// ! - оператор отрицания. обращает значение в обратное
const Source = true,
      Box = false;
console.log(Source && !Box);
// true

console.log(2 + 2 * 2 === 8);






