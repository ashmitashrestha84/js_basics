//! hoisting
//is the behaviour that moves the function or variable declaration part above the scope but not initilization part

//var x //? hoisting
// console.log(x);
// var x=5;

//* function declaration

// hoist(); //? hoist part
// function hoist{  
//     console.log("Hoist");
// }
// hoist();

//* function expression   //arrow method cannot be used

// fn(); //undefined() call and fn is declared as var fn only
// var fn= function(){
//     console.log('hello');
// }
// fn();

//*let
//let is also hoisted but it is TDZ: temporal dead zone
//? Temporal dead zone(TDZ)-> zone between the variable declaration to variable initialization 
// console.log(x);
// let x=40;

// console.log(y);
// const y=80;

// fun();
// let fun=function(){
//     console.log('a');
// }

//? hoisting working phases
//? JS works by two phases or internal code execution
//! memory creation phase 
//* memory allocation
//{x:undefined, hoist:(){}}
//script:{y:<not available>}

//! execution phase
//{x:70, hoist:(){}, y:34}
//* memory initialization
//* execution-one line scan at a time
// console.log(x);
// var x=70;
// console.log(x);

// hoist();
// function hoist(){
//     console.log('hoist');
// }
// hoist();

// let y=34;


//todo: callstack
//that keeps the track of function execution
//only one stack ->single threaded language
function first(){
    console.log('first');
}
function second(){
    first();
    console.log('second');
}
function third(){
    second();
    console.log("third");
}
third();

//todo: execution context
//the environment controlling var,this,function
//before memory allocation and execution phase
//global execution context(GEC)
//local and FEC(Function execution phase) is destroyed after another function call 
//stack and scope both are destroyed


const a=()=>{
    console.log('a');
    const b=()=>{
        console.log('b');
        const c=()=>{
            console.log('c');
        }
        c();
    }
    b();
}
a();
//scope
//{x:a(){}}
//{x:b(){}}
//{x:c(){}}
//(){}

// stack
// c() pop first 
// b() second
// a() third

//callstack
