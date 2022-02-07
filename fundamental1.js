//Fundamemtal 1

//Javascript is a high-level object-oriented,mutil-paradigm programming language

/* Linking javascript file
<script src="file"></script>
*/

/* Values and Variables
- Values
'Tran Tuong'
-Variables
let firstName = 'Tuong';
console.log(firstName);
! don't declare first character of 
variable like number, new, function, Upcase...
*/

/* Data type
- number 
- string
- boolean (true/false)
- undefined (ex: let children)
- null: empty value
- Symbol (ES2015): Value that is unique and cannot be changed
- BigInt(ES2020): larger intergers than the number type can hold
* Use typeof to check type of variables (ex: typeof 'fun')
 */

/* Let const var
- let: declare a new variables with new value (need to change in the future)
 Ex: let: age = 18;
 age = 19;
 - const: variables not be change (clean code)
 - var: similar to let
*/

/* Basic operator
Ex:
const now = 2022;
const ageTuong = 2022 - 2003;
console.log(ageTuong);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

- Comparison operators (> < >= <=) (boolean type)
*/

/* operator precedence 
mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence?retiredLocale=vi
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
*/

// Coding challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀 
*/
// const massMark = 59;
// const heightMark = 1.69;
// const massJohn = 70;
// const heightJohn = 1.80;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBmi = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, markHigherBmi);

/* Strings and template literals (chuỗi và kí tự mẫu)
let firstName = 'Tuong';
let job = 'student';
let birthYear = 2003;
let year = 2037;

const tuongOld = "I'm" + firstName;
const tuong = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log('String with \n\
multiple \n\
lines')
console.log(`String with
multiple
lines`)
*/

/* if else Statement
const age = 18;
const isOldEnough = age >= 18;
if(isOldEnough) {
    console.log('Tuong can drink beer 🍻🍺');
} else {
    console.log('Tuong mustn't drink 🍺')
}

const birthYear = 2003;
let century;
if (birthYear <= 2000) {
    console.log(century = 20);
} else {
    console.log(century = 21);
}
*/

//Codeing challenge #2
/**
 * Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
 */


// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})!`)
// } else {
//     console.log(`Mark's BMI (${bmiMark}) is lower than John's BMI (${bmiJohn})!`)
// }

/* Type conversion and coercion (Chuyển đổi loại và cưỡng chế)
- type conversion
const inputYear = '2003';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Tuong')); //NaN
console.log(type of NaN); //number
console.log(String(18), 18);

- type coercion
console.log('I am' + 18 + 'year old'); // js automatic convert 18 to string
console.log('10' - '2' - 3); //5
console.log('10' + '2' + 3) //1023

let n = '1' + 1;
n = n - 1;
console.log(n); //10
*/
 
/* Truthy and Falsy Values
5 falsy values: 0, '', undefined, null, NaN
EX:
let height;
if (height) {
    console.log('Height is definded');
} else {
    console.log('Height is undefinded')
}
*/

/* == vs ===
== different type of value 
ex: let age = '18';
if (age == 18) {
    console.log("Amazing")
} // Amazing
=== same type of value
ex:
let age = '18';
if (age == 18) {
    console.log("Amazing")
} else {
    console.log("So sad")
} //So sad
*/

/* Boolean logic: The and, or, not operators
!A(false) //true
A(F) && B(T) //false
A(F) || B(T) //true
!A(T) && B(T) //false
!A(F) || B(F) //true
*/

/* Logical operators
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(!hasDriverLicense || hasGoodVision);
*/

//Coding challenge #3
/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 +110) /3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the troppy 🏆');
// } else if(scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the troppy 🏆');
// } else if(scoreDolphins === scoreKoalas) {
//     console.log('Both win the troppy 🏆');
// }

//bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) /3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the troppy 🏆');
// } else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the troppy 🏆');
// } else if(scoreDolphins === scoreKoalas) {
//     console.log('Both win the troppy 🏆');
// }

//Bonus 2
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) /3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the troppy 🏆');
// } else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the troppy 🏆');
// } else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log('Both win the troppy 🏆');
// } else {
//     console.log('No team wins the trophy 🏆');
// }

/* Swtich Statement 


const day = 'tuesday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course struture');
        console.log('Go to coding meetup')
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code');
        break;
    case 'friday':
        console.log('Play piano');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Relax 😃');
    default:
        console.log('Not a valid day!')

*/

/* Statements and expression (các câu lệnh và biểu thức)
- Expression (value)
3 + 4
119
true && false && !false
- Statements (full sentences)
if(23 > 10) {
    const str = '23 is too big';
}
 */

/* The conditional (ternary) operator 
const age = 18;
// age >= 18 ? console.log('I like to drink beer 🍺🍻') : 
// console.log('I like to drink water 💦');
const drink = age >= 18 ? 'beer🍺' : 'water💦';
console.log(drink);
// same to 
let drink2;
if (age >=18) {
    drink2 = 'beer🍺';
} else {
    drink2 = 'water💦';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'beer🍺' : 'water💦';}`);
*/

//Coding challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

// let bill = 275;
// let tip = bill >= 50 && bill <= 300 ? bill * (15/100) : bill * (20/100);
// const total = bill + tip;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
// ${total}`);