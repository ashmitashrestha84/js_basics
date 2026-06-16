//! Convert and display a total number of seconds in standard digital clock format(HH:MM:SS).

const convertTime = (seconds, callback) => {
    let hour = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds % 3600) / 60);
    let second = Math.floor(seconds % 60)
    ;
    callback(hour, minute, second);
};

const standardTime = (hour, minute, second) => {
    let hr = String(hour).padStart(2, '0');
    let min = String(minute).padStart(2, '0');
    let sec = String(second).padStart(2, '0');

    console.log(`${hr}:${min}:${sec}`);
};

convertTime(3665, standardTime);


//! Calculate a customer's total electricity bill based on an tiered unit consumption slab.
//! Calculate progressively. First 100 units: $1.00/unit. Next 100 units (101-200): $2.00/unit.
//! Above 200 units: $5.00/unit
let x=250;
let bill=0;
if(x<=100){
    bill=100*1;
}
else if(x>100&&x<=200){
    bill=(100*1)+(100*2);
}
else{
    bill=(100*1)+(100*2)+(50*5)
}
console.log(`$`+ bill);

//!Split a total amount evenly among N friends and display the individual share along with
//!the remaining leftover change.
//! Utilize Math.floor() to compute the clean integer split, and the modulo operator (%) to
//! capture the exact remainder.

const friend=(totalamount,n,result)=>{
    individul_share=Math.floor(totalamount/n);
    leftover=Math.floor(totalamount%3);
    result(individul_share,leftover);
}
friend(4000,3,(id,lft)=>{
    console.log(`Each pay is ${id} and leftover is ${lft}`)
});

//! Calculate a person's exact current age dynamically given their complete Date of Birth
//! Your logic must accurately account for whether the individual's birthday has already 
//! happened or has yet to happen in the current calendar year.
//! Instantiating 'new Date()' gives you access to the modern system calendar. Compare
//! years, then adjust based on months and days.

const calculate = (date, month, year) => {
    const getdate = new Date();

    let currentyear = getdate.getFullYear();
    let currentmonth = getdate.getMonth() + 1; 
    let currentdate = getdate.getDate();
    let age = currentyear - year;
    if (
    currentmonth < month ||
    (currentmonth === month && currentdate < date)
) {
    age--;
    console.log(age);
    console.log("Your birthday is yet to come.");
} else if(currentmonth===month && currentdate===date){
    console.log(age);
    console.log("Your birthday is today. Happy Birthday to you"); 
}
    else{
    console.log(age);
    console.log("Your birthday has already gone.");
}
}

calculate(7, 6, 2006);


//! Compute the final total checkout amount given the base price of an item and its active discount percentage.
//! The final output must be rounded to exactly two decimal places representing financial
//! Calculate the discount fraction via (price * discount / 100). Use the primitive number utility
//! .toFixed(2) to secure precision.

let item={
    price:125.50,
    activediscount:15,
}
let finalprice= (item.price-(item.price*item.activediscount)/100);
console.log(finalprice.toFixed(2));

//! Calculate an employee's total weekly payroll salary including overtime rules based on
//! hours worked and baseline hourly pay.
//! Regular hours threshold is capped at 40 hours/week. Any hours worked over 40 are
//! overtime, compensated at 1.5 times the standard rate.

const employeesalary=(hours_worked,rate)=>{
    let standard_hour=40;
    if(hours_worked<=standard_hour){
        totalsalary= hours_worked * rate;
        return totalsalary;
    }else{
        let overtime=hours_worked-standard_hour;
        let newrate=rate*1.5;
        totalsalary=(standard_hour*rate)+(overtime*newrate);
        return totalsalary;
    }
}
let total=employeesalary(45,20)
console.log(total);

//! Convert a large pool of raw days cleanly into equivalent counts of whole Years, Months, and remaining Days.
//! Perform successive division and remainder operations. Strip years first, then compute
//! months from the remainder, then remaining days.

const days=(n)=>{
    const year=Math.floor(n/365);
    const month=Math.floor((n%365)/30);
    const days=Math.floor((n%365)%30);
    const standard_baseline=()=>{
    console.log(`${year} year, ${month} month, ${days} days`);
    }
    return standard_baseline;
}
let p=days(400);
p();

//! Given a strict 5-digit integer, compute the sum of all its constituent digits without string.
//! Do not cast, convert, or interpolate the integer into a string or array type.
//! Continually extract the last trailing digit using modulo (% 10), add it to your tally, and
//! truncate the integer downwards using Math.floor().

const integer=(data)=>{
    let sum=0;
    for(i=0;i<5;i++){
        let z=data%10;
        sum+=z;
        data=Math.floor(data/10);
    }
    console.log(sum);
}
integer(54321);

//! Take a 4-digit number and return its mathematical reverse without utilizing string serialization wrappers.

const reverse = (value) => {
    let reversed = 0;

    while (value > 0) {
        let digit = value % 10;
        reversed = reversed * 10 + digit;
        value = Math.floor(value / 10);
    }

    return reversed;
};

console.log(reverse(54321));

//! Calculate the Equated Monthly Installment (EMI) for a fixed-term personal loan.
//! Formula: EMI = [P * r * (1+r)^n] / [(1+r)^n - 1]. P = Principal, r = Monthly interest rate
//! (Annual Rate / 12 / 100), n = tenure in months.
//! Utilize Math.pow() to perform exponential powers cleanly. Ensure financial outputs round
//! smoothly to 2 decimal units.


const EMI=(P,r,n)=>{
    power=Math.pow((1+(r/100/12)),n);
    total_emi=(P*(r/100/12)*power)/(power-1);
    console.log(total_emi.toFixed(2));
}
EMI(100000,12,12);



//! Determine whether a student passes or fails an academic term based on multiple core
//! The student must score at least 40 or higher in all 3 individual subjects, AND the
//! collective average across all three must be 50 or higher.
//! Combine comparison expressions safely using logical AND (&&) operators. Calculate
//! individual rules before evaluation.

const array=[60,80,10];
const func=(result)=>
    {
    const average1=result.reduce((prev,curr)=>{
    return prev+curr;
    },0)
    const cond=result.every(element=>{
        return element >= 40;
    }) 
    if(cond===true && average1>= 50){
        return 'true(passed)';
    }
    else{
        return 'false(failed individual subject)';
    }

}
console.log(func(array));



//!Find and isolate the single largest maximum number from a series of 5 unique input variables.
//!Solve this relying strictly on conditional comparison branch operators (>, <, if/else). Do
//!not use Math.max().
//!Assume the first variable is the maximum, then sequentially compare it against the
//!remaining four variables, updating when a larger is found.

const arr=[101,90,88,76,52]
let max=arr[0];
for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
}
}
console.log(max)



//! Given three side lengths, write a rule validation system to check whether they can legally form a real triangle.
//! A triangle is only valid if the sum of the lengths of any twosides is strictly greater than the remaining third side.
//! Verify all three possible pairings: (a + b > c) && (a + c > b) && (b + c > a).


function triangle(a,b,c){
        if((a + b > c) && (a + c > b) && (b + c > a)){
            return ('true(valid)');
        }
        else{
            return ('false(invalid)');
        }
}
console.log(triangle(5,3,4));

//!Classify the exact geometric structure of a valid triangle based on its three side lengths.
//! Equilateral: All 3 sides are equal. Isosceles: Exactly 2 sides are equal. Scalene: All 3
//! sides are completely different.
// Logical Hint:
// First run the validation framework from OP-03. If valid, use strict equality operators (===)
// to group categories.
// Expected Case Scenario:
// Input: (5, 5, 8) → Output: 'Isosceles

function typetriangle(a,b,c){
    if(a===b && b===c){
        return ('Equilateral triangles')
    }
    else if(a===b ||b===c || a==c){
        return ('Isosceles triangles')
    }
    else{
        return ('Scalene triangle')
    }
}
console.log(typetriangle(3,8,7))


//! Determine whether a given year input is a Leap Year or a standard Common Year.
//! A year is a leap year if divisible by 4. Exception: If divisible by 100, it is not a leap year
//! unless it is also perfectly divisible by 400.
//! Use nested structures or compound clauses: (year % 4 === 0 && year % 100 !== 0) ||(year % 400 === 0).


const leapyear=(year)=>{
    if((year%4==0 && year%100!==0) || year%400==0){
        return ('leap year');
    }else{
        return('common year');
    }
}
console.log(leapyear(2023))

//! Analyze a single string character input and categorize exactly what data type group it belongs to.
//!'Uppercase Letter' (A-Z), 'Lowercase Letter' (a-z), 'Digit' (0-9), or 'Symbol/
//! Avoid Regular Expressions. Solve this strictly by checking character code indexes via the
//! native string method .charCodeAt(0).


const datatype = (data) => {
    let ch = data.charCodeAt(0);
    if (ch >= 65 && ch <= 90) {
        console.log('Upper case');
    }else if (ch >= 97 && ch <= 122) {
        console.log('Lower case');
    }else if (ch >= 48 && ch <= 57) {
        console.log('Digit');
    }else {
        console.log('Symbol');
    }
};
datatype("8");
datatype("c");
datatype("D");
datatype("@");


//! Build an access authentication gateway logic rule processing engine for a digital user management system.
//! The user must be 18 years or older AND their account subscription status label must be
//! strictly set to either 'active' OR 'admin'.
//! Enclose status verification options inside grouping parentheses to control precedence:
//! age >= 18 && (status === 'active' || status === 'admin').

const authentication=(age,status)=>{
    if(age>=10 && (status ==='active' || status==='admin')){
        return ('true(Granted)');
    }else{
        return ('false(Not Granted)');
    }
}
console.log(authentication(20,'active'))



//! Build a custom password complexity verification routine to check safety rules when creating a profile.
//! Passes only if it simultaneously fulfills: 1) Min length 8, 2) At least 1 uppercase, 3) At
//! Loop through the string elements character by character. Maintain boolean flags for
//! upper, lower, and digits.

const password = (pass) => {
    if (pass.length < 8) {
        return ('false(invalid)');
    }
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    for (let i = 0; i < pass.length; i++) {
        let ch = pass.charCodeAt(i);
        if (ch >= 65 && ch <= 90) {
            hasUpper = true;
        }
        else if (ch >= 97 && ch <= 122) {
            hasLower = true;
        }
        else if (ch >= 48 && ch <= 57) {
            hasDigit = true;
        }
    }
    if(hasUpper && hasLower && hasDigit ==true){
        return ('true(valid)');
    }else{
        return ('false(invalid)');
    }
};

console.log(password("password123"));
console.log(password("123"));
console.log(password("Password123")); 



//! Verify whether an integer input is simultaneously divisible by three primary factors: 2, 3, and 5.
//! Leverage a single operational compound conditional check instead of nesting three
//! independent if branches.
//! A number is simultaneously divisible by 2, 3, and 5 if it is perfectly divisible by their lowest
//! common multiple, 30 (% 30 === 0).


function primedivisible(n){
    if((n%30) === 0){
        console.log('true');
    }else{
        console.log('false');
    }
}
primedivisible(60);

// Construct a game score arbiter script engine to evaluate and declare the official winner
// between two competing player objects.
// Slabs / Rules:
// Compare .score properties (higher wins). Tie-Breaker: If scores match, player with fewer
// fouls (.fouls) wins. If identical, return 'Absolute Draw'.
// Use hierarchical structure handling condition priorities: check scores first, then drop to
// fouls tie-breaker branch.


const matches=[
    {
        score:10,
        fouls:1,
    },
    {
        score:10,
        fouls:3,
    },
]
for(let i=0;i<matches.length-1;i++){
    if(matches[i].score>matches[i+1].score){
        console.log(`Player ${i} wins`);
    }else if(matches[i].score===matches[i+1].score && matches[i].fouls<matches[i+1].fouls){
        console.log(`Player ${i} wins via tie breaker`);
    }else if(matches[i].score===matches[i+1].score && matches[i].fouls===matches[i+1].fouls){
        console.log('Absolute Draw.');
    }else{
        console.log(`Player ${i+1} wins.`)
    }
}
