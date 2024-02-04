// 1. String concatenation (문자열 연결)

console.log ('my' + ' cat');
console.log ('1' + 2);
console.log (`string literals: 1 + 2 = ${1 + 2}`);


 console.log('lpw\'s \n\t phone');

 

 // 2. Numeric operators (숫자 연산자)

 console.log (1+1); // 더하기 
 console.log (1-1); // 빼기
 console.log (1/1); // 곱하기
 console.log (1*1); // 나누기 
 console.log (5 % 2); // 나머지
 console.log (2 ** 3); // 지수화


 // 3. Increment and decrement opreators (증감연산자)

 let counter = 2;
 const preIncrement = ++counter; // 다음값은 3이며 숫자 3이 할당됨. 

  // counter = counter + 1;
 // preIncrement = counter;


 console.log(`preIncrement:  ${preIncrement}, counter: ${counter}`);
 const postIncrement = ++counter;
// ement = counter;
// counter + 1;

 
 console.log(`preIncrement:  ${preIncrement}, counter: ${counter}`);
 const preDecrement = --counter;
 console.log(`preIncrement:  ${preIncrement}, counter: ${counter}`);
 const postDecrement = counter--;
 console.log(`preIncrement:  ${preIncrement}, counter: ${counter}`);

 // 4. Assgiment operators (할당 연산자)

 let x = 3;
 let y = 6;

x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators (비교 연산자)

console.log(10 < 6); // 보다 작음 less than
console.log(10 <= 6); // 보다 작거나 같다.  less than or equal
console.log(10 > 6); // 보다 크다. greater than 
console.log(10 >= 6); // 보다 크거나 같다. greater than or equal

// 6. Logical operators; || (or), && (and) , ! (not)  (논리 연산자.)

const value1 = true;
const value2 = 4 < 2;

// || or 

console.log(`or: ${value1 || value2 || check()}`); // false || false check는 true
// 중요한 포인트.
// or연산자는 true가 처음이 나오면 멈춘다. 어떤거든 하나라도 true면 나머지도 true이기 때문 
// 뒤는 어떤것이든 무조건 true로 나오기에 출력값(wasting time 문단)이 안나온다.
// 여기에서 많이 지적질 당한다. 
// 복잡한 연수를 설정할시 연산이 무거운 출력문을 출력할때 false false 일때  
// value1 < value2 < check() 이런 식으로 짜는게 좋다.

function check() {
    for (let i = 0; i < 10; i++) {

        //wasting time
        console.log('no....');
    }
    return true;
}


// && and 

console.log(`or: ${value1 && value2 && check()}`);
// 앞에 false가 나오게 되면 뒤가 true든 false든 상관안한다. 
// 무거운 연산자일수록 뒤에서 체크를 하는게 좋다. 

// null을 체크를 할때도 자주 쓰인다.
// ex) nullObject && nullableObject.something
// nullIbject가 null이 아닐때만 something이 출력이 된다.




function chect() {
    for (let i = 0; i < 10; i++) {
         //wasting time
         console.log('no....');
    }
    return true;
}

// ! not
// 반대가 된다.

console.log(!value1);


//7. Equality (동등)

const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion  느슨한 동등 비교연산자.
// 두 변수를 비교를 할 때 타입이 서로 다르면 타입 변환을 수행한다. 타입이 같으면 변환을 하지 않는다.
// 문자열 안에 있는 숫자가 똑같으면 true로 리턴한다.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive); 


// strict equality, no type conversion 엄격한 동등 비교 연산자.
// 비교할 때 타입 변환이 일어나지 않는다.
// 타입이 다르면 같지 않다는 것으로 확인하여 false를 리턴한다.
// 무조건 두 변수의 타입이 같고 같은 값을 가질 때 true가 반환된다.
// 왠만하면 이걸로 비교를 하는게 좋다.  
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive); 

// object equality by reference

const lpw1 = { name: 'lpw'};
const lpw2 = { name: 'lpw'};
const lpw3 = lpw1;
console.log(lpw1 == lpw2);
console.log(lpw1 === lpw2);
console.log(lpw1 === lpw3);

//equlity - puzzler 

console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);


//8. Conditional operatiors if 

// if, else if, else

const name = 'coder';
if (name === 'lpw') {
    console.log('Welcome, Lpw~!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown')
}

// 9. Ternary operator: ? 삼항 연산자.
// codition ? value1 : values;
console.log(name === 'lpw' ? 'yes' : 'no');

// true면 yes
//false면 no


//10. switch statement (스위치문)

const browser = 'Tajiri';
switch (browser) {
    case 'kane':
        console.log('Igonan');
        break;
    case 'MTE':
        console.log('Mung-Tang-E');
        break;
    case 'Tajiri':
        console.log('Tajiriri nim Hanpanman Hea yo');
        break;
        default:
            console.log('die.');
            break;       
}



//11. loops (반복문)
// while loop, while the condition is truthy,
// body code is executed.

let i = 3;
while (i > 0) {
    console.log(`do while: ${i}`);
    i--;

} 

// do while loop body code is executed first, 루프 본문 코드가 먼저 실행이 되는 동안 수행한다. 

// then check the condition. // 그런 다음 조건을 확인.

do { 
    console.log(`do while: ${i}`);
    i--;

} while (i > 0);

// for loop, for(begin; condition; step) // 컨디션이 안맞을때까지 루프 무한 실행. 

for(i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}


//nested loops

for(i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
    }