//! function
// block of code that is used multiple times
// function name should be declarative
// should perform specific task 

//* function declaration
// function function_name(){
//   body  
// }

//* fucntion call / invocation
// function_name();

// function greet(){
//     console.log("hello");
// }
// greet();
// greet();

//! parameters and arguments
// parameter= used in function definition paranthesis also called place holder
// argument = used in function call paranthesis

//* function with inputs
// function greet(user,age){
//     console.log("hello",user,age);
// }
// greet('Ram',19);
// greet('John',30);
// greet(23,'Sita');

//* function with default parameters
// function greet(user='Guest'){
//     console.log("hello",user);
// }
// greet('John');
// greet();

// function add(a=0,b=0){
//     console.log("Sum is:",a+b);
// }
// add(4,5);
// add();

//* function with return type
// function add(a=0,b=0){
//     return a+b;
//     console.log(a+b); // doesnot console as the control returns to function call
// }
// let sum = add(4,5);
// console.log(sum);
// let result=add(7,8);
// console.log(result);

//? multiply
// function multiply(x=1,y=1){
//     return x*y;
// }
// let x=multiply(2,3);
// console.log(x);
// let y=multiply(5,-6);
// console.log(y);
// let z=multiply(3);
// console.log(z);

//* function expression

// const multiply = function(a=1,b=1){ // cab be let, var and const
//     return a*b;
// }
// console.log(multiply(12,4));

// todo: function declaration and function expression
//! square
// let y;
// function square(x=1){
//    y = x ** 2;
//    return y;
// }
// square(5);
// console.log(y);
// square();
// console.log(y);

// const square1= function(a=1){
//     return a ** 2;
// }
// let z= square(4);
// console.log(z);
// let b= square();
// console.log(b);

// //!swap
// function swap(a=0,b=0){
//     let temp=a;
//     a=b;
//     b=temp;
//     return[a,b];
// }
// console.log(swap(5,8));

// let swap1= function(a=0,b=0){
//     let temp=a;
//     a=b;
//     b=temp;
//     return [a,b];
// }
// let m=swap(15,0);
// console.log(m);
// console.log(swap());

// //! length
// function length(a =''){
//     let count=0;
//     for( char of a){
//         count++;
//     }
//     console.log(count);
// }
// length('Ashmita');
// length();

// const length1= function(b=''){
//     let count=0;
//     for(char of b){
//         count++;
//     }
//     console.log(count);
// }
// length('shrestha');

//todo: arrow function, callback function and higher order function

// const sum=(a=0,b=0)=> {
//     return (a+b);
// }
//     console.log(sum(3,4));

// const multiply=(a,b)=> a*b;
// console.log(multiply(5,6)) //! use for sinlge line statement also


//! call back function
// const add=(a=0,b=0)=>a+b;
// const calculate=(a=0,b=0,operation)=>{
//     operation(a,b);
// }
// calculate(5,6,add);
// console.log(add);

// const s= getinput(5,7,function subtract(a,b){
//     return (a-b);
// })
// console.log(s)

// const parent=(x)=>{
//     console.log(x);
//     console.log('parent');
//     x(12); //! x is a callback function
// }
// const child=(a)=>{
//     console.log('child',a);
// }

// const greet=(name,callback)=>{
//     let x = callback();
//     console.log(x,name);
// }
// greet('Ashmita',()=>{
//     return 'hello';
// })
// // console.log(child());
// // parent(child());   // undefined //function is not a call back funtion
// parent(child);

// parent((a)=>{
//     console.log('child1',a) // one time use function //anonymous function
// })

//! higher order function
// taking function as argument or returning function in its body or both
// const outer=()=>{
//     console.log("outer");
// const inner=()=>{
//     console.log("inner");
// }
// return inner;
// }
// let x=outer();
// x();
// console.log(x);

// const repeat=(n)=>{
//         const word=(message)=>{
//             for (i=0;i<n;i++){
//                 console.log(message);
//             }
//         }
//         return word;
// }
// let x=repeat(4);
// x('hello');
const calculator = (operation) => {
    const newFunction = (a, b) => {
        return operation(a, b);
    };

    return newFunction;
};
const add = calculator((a, b) => {
    return a + b;
});

const multiply = calculator((a, b) => {
    return a * b;
});

console.log(add(5, 3));       // 8
console.log(multiply(5, 3));  // 15

// //!IIFE
// (()=>{
//     console.log("IIFE");
// })();

