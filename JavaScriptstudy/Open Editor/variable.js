'use strict';

// 2. Variable
// let (added in ES6)
// 전 세계적인 자바스크립트 문법 : ES6
{
let name = 'Lee Pyeong won';
console.log(name);
name = 'hello';
console.log(name);
}

{
// var (절대 사용하지 말것.)
// var hosting (어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올리는 것을 의미)
 age = 4;
 var age;
}
console.log(age);

const daysInweek = 7;
const maxNumber = 5;


const count = 17; // integer (정수)
const size = 17.1; // decimal number (실수)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special number values ;

const infinity = 1 /0;
const negativeInfinity = -1 /0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//나누고자 하는 값이 0인지 아닌지 확인도 하지 않고 연산이 하게되면
// infinity나 not a number가 뜨므로 사용자에게 에러를 줄 수 있다.
// 현업에서도 이것때문에 에러가 날 수 있다.


//bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//자바스크립트 수의 범위는 -2*53 ~ 2*53승까지 가능하나 
// 이 수를 넘을 경우 수의 끝에 n을 붙으면 bigint로 값이 나온다.
// 크롬이랑 파이어폭스에서만 지원 가능.

//string 

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value ${greeting}, type: ${typeof greeting}`);
const helloBob  = `hi ${brendan}!`; //template literals (변수의 값이 자동적으로 붙여짐.) (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean 
// false값은 : 0. null, undefined, NaN ''
// true값은 : 나머지 다른 값.

const canRead = true;
const test = 3 < 1; // false 
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`); 

//null 
// 아무것도 아니라고 지정.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 선언은 되었지만 아무것도 값이 지정이 되어 있지 않다.

let x; // = undefined
(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identiflers for objects
// 나중에 맵이나 다른 자료 구조형에서 
// 고유한 식별자가 필요하거나 동시에 다발적으로 쓰일때 우선순위를 주고 싶을때 사용.

const symbol1 =  Symbol('id');
const symbol2 =  Symbol('id');
console.log(symbol1 == symbol2);

//string이 똑같다면 동일한 symbol을 만들고 싶을때

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); //true 
console.log(`value: ${symbol1.description}, type: ${symbol2.description}`);
// 동일한지 아닌지를 확인하는 코드.


// object, real-life object, data structure 
const Leepyeongwon = {name: 'Leepyoengwon', age:30 };
Leepyeongwon.age = 31;
// 변수 뒤에 .을붙이면 각각 포인트가 가리키는 메모리가 다른 값으로 할당이 가능하다.



// 5. Dynamic typing : dynamically typed language 동적타입 언어.

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
// 문자열에 더하기가 있으니까 string으로 변환이 되어
// string끼리 더하며 75가 된다. (string으로 타입이 변환.)
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

//반대로 string끼리 나누면 
//string 끼리 나누며 string 안에 들어 있는것이 숫자이므로 
//숫자처럼 나뉘어져 4가 나온다.(number로 타입이 변환이 된다.)
// 자바스크립트는 런타임에서 타입이 결정이 된다.
//이러므로 typescript가 나온다. 

