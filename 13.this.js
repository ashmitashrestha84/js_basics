//! this -> object
// this cannot be used in arrow function
//constructor cannot be used as an arrow function

// console.log(this);
//module.exports={}

// function a(){
//     console.log(this)
// }
// a() //*global object



// let user={
//     name:'Ashmita',
//     email:'ashmita@gmail.com',
//     getName:function(){
//         // console.log(user.name);
//         console.log(this.name);
//     },
        
// };
// user.getName();
// const fn=user.getName();
// fn;
// fn();         //undefined



// let user={
//     name:'Ashmita',
//     email:'ashmita@gmail.com',
//     getName:function(){
//         const a=()=>{
//         console.log(this.name);
//     };
//     a();
// }
// };
// user.getName();

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     getName(){
//         return this.name;
//     }
// }

// const u=new User('john','john@email.com'); //u is the object of the constructor 
// console.log(u.getName()); //u is the object of getName
// const u1=new User('john1','john1@email.com');// u1 is the object of the constructor

//! function object
// function introduce(){
//     console.log('hello',this.name); //hello undefined
// }
// console.log(introduce.name);

// function add(a, b) {
//     return a + b;
// }

// console.log(add.name);   // add
// console.log(add.length); // 2

//! call,apply and bind
let user={
    name:'John',
    email:'john@gmail.com',
}
let user1={
    name:'John1',
    email:'john1@gmail.com',
}
function introduce(age,batch){
    console.log('hello',this.name,age,batch); //hello undefined
}
console.log(introduce.name);

// //?call
introduce.call(user,12,'first');
introduce.call(user1,67,'old');

// //?apply
introduce.apply(user,[26,'second']);
introduce.apply(user1,[67,'elder']);

// //? bind returns new function
const fn=introduce.bind(user,12,'he');
fn();