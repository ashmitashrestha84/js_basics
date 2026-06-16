//!scope
//* visibility or accessibiltiy of variables

//? global scope
// let x=90;
// const y=80;
// var z=100;
// console.log(x,y,z)
// const scope=()=>{
//     console.log(x,y,z);
// }
// scope();

//? block scope
// var is accessed outside the block scope also
// if(true){
// let x=90;
// const y=80;
// var z=100;
// console.log(x,y,z)
// }
// console.log(x) //error
// console.log(y)// error
// console.log(z) //accessible

//? function scope
// var isnot accessed outside the function scope
// const scope=()=>{
//     let x=90;
//     const y=80;
//     var z=100;
//     console.log(x,y,z);
// }
// scope();
// console.log(x) //error
// console.log(y)// error
// console.log(z); //error

//* lexical scope
//nested scope
// let x=10;
// let y=20;
// var m=20;
// let z=30;
// const calculate=()=>{
    // let z=30;
    // console.log(m);
    // console.log(y);
    // console.log(n);   // not allowed
    // const add=()=>{
        // var n=30; // let,var,const isnot allowed by parent to access
        // console.log(z); //allowed
        // console.log(x+y); //allowed
        // console.log(m); //allowed
//     }
//     add();
//     console.log(z);
// }
// calculate();


//* scope chain
//children to parent to global scope
//error occurs when there is no declaration of require variable in three different scope

// let a=10000
// const main=()=>{
//     let a=10;
//     console.log(a);
//     const secmain=()=>{
//         const thirdmain=()=>{
//         let a=5;
//         console.log(a);
//         }
//     console.log(a);
//     thirdmain();
//     }
// secmain();
// }
// main();
// console.log(a);