/* Strict mode
'use strict'
mục đích để viết code clean hơn dễ nhìn hạn chế lỗi 
// Without Strict Mode
NaN = "lol"; // Nothing happen

// With Strict Mode
"use strict";
NaN = "wtf"; // TypeError
 */

/* Function
function logger() {
    console.log('abcdef');
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples } apples and ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessor(6, 1));
*/

/* Function declaration vs Expressions 
//Declration function
console.log(calcAge1(2003));
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//Expresstion function 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge2(2003));
*/

/* Arrow function
 const calcAge3 = birthYear => 2037 - birthYear;
 cosole.log(calcAge3(2003));
 const speedLimit = limit => {
     const speed = 100;
     const limitTime = limit + speed;
     return limitTime;
 }
 console.log(speedLimit(100))
*/

/* Function calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

//Coding challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

// const calcAverage = (a, b, c ) => (a + b + c) / 3;


// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(62, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 ${avgDolphins} vs. ${avgKoalas}`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🏆 ${avgKoalas} vs. ${avgDolphins}`);
//     } else {
//         console.log('No team win...')
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

/* Array 
const friends = ['Phong', 'Long', 'Duy'];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Phu';
const num = 2;
const tuongFriends =[friends, 'A', num];
console.log(tuongFriends.length, tuongFriends); //3  [Array(3), 'A', 2]
*/

/* Basic array operations (methods) 
const friends = ['Phong', 'Long', 'Duy'];
// Add elements
friends.push('Hoang'); //Last
console.log(friends);

friends.unshift('Hoa'); //First
console.log(friends);

//Remove elements
friends.pop(); //remove last elements
console.log(friends);

friends.shift(); //remove first elements
console.log(friends);

console.log(friends.indexOf('Phong')); //0
console.log(friends.indexOf('Hoang')); //-1

console.log(friends.includes('Phong')); //true
console.log(friends.includes('Hoang')); //false
*/

//Coding challenge #2
/* 
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 😀
*/

// const calcTip = (bill) => {
//     let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//     return tip;
// };
// console.log(calcTip(100));

// let bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

/* Object 
 const myInfor = {
     firstName: 'Tuong',
     age: 18,
     address: 'Ha Noi'
 };
console.log(myInfor);
 //Dot vs. Bracket Notation
console.log(myInfor.firstName);
console.log(myInfor['firstName']);

const nameKey = 'Name';
console.log(myInfor['first' + nameKey]);

const interestedIn = prompt('What do you want to know about me? Choose between firstName, age, address');

// console.log(myInfor.interestedIn); //undefined

if(myInfor[interestedIn]) {
    console.log(myInfor[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, age, address')
}

//add key on object
myInfor.email = 'tranvantuong';
myInfor[job] = 'student';
console.log(myInfor);
*/

/* Object Method 
const myInfor = {
    firstName: 'Tuong',
    birthYear: 2003,
    address: 'Ha Noi',
    hasDriversLicense: true,

    calcAge: function () {
        // console.log(this);
        return 2022 - this.birthYear;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old and he has 
        ${this.hasDriversLicense? 'a' : 'no'} driver's license.`
    }
};

console.log(myInfor.calcAge());
console.log(myInfor['calcAge']());
console.log(myInfor.getSummary());
*/

// Coding challege #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//          this.bmi = this.mass / (this.height ** 2);
//          return this.bmi
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 82,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi  = this.mass / (this.height ** 2);
//         return this.bmi
//     }
// };

// mark.calcBMI();
// john.calcBMI();
// if(mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is lower than ${john.fullName}'s BMI (${john.bmi})`);
// }


/* The for loop 
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Repitiotion ${rep}`);
}
*/

/* Looping array, breaking and continuing
const years = [1991, 2007, 1969, 2003];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);

//break and continue

const tuongArray = [
    'Tuong',
    'Tran',
    2022 - 2003,
    'student',
    ['Duy', 'Nam', 'Tu'],
    true,
];

for(let i = 0; i < tuongArray.length; i++) {

    if(typeof tuongArray[i] !== "string") continue; //skip values isn't string
    console.log(tuongArray[i], typeof tuongArray[i]);
}

console.log('BREAK')
for(let i = 0; i < tuongArray.length; i++) {

    if(typeof tuongArray[i] !== "string") break; //stop at values isn't string
    console.log(tuongArray[i], typeof tuongArray[i]);
}

*/

/* Looping backwards and loops in loops 
//Looping backwards
const num = [
    'one',
    'two',
    'three',
];

for(let i = num.length - 1; i >=0; i--) {
    console.log(i, num[i]);
}

//loops in loops 
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`----------Start ex ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Ex ${exercise}: repition ${rep} 🏆🏆🏆`);
    }
}
*/

/* While loop 
let rep = 1;
while (rep <= 10) {
    i++;
    console.log('Yah 😊😊😊😊' + rep);  
}

*/

//coding challege #4
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
};
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));
