//! control flow 
//? flow of js code from top to bottom, and each line from left to right

//! control statements
//? statement that alter the flow of execution based on certain conditions or repeat a block of code multiple times

//* if is
let age=17;
if(age){
    console.log("age is defined");    
}

//* if else
if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}

//* if else ladder/ else if
if(age>=60){
    console.log("you are senior citizen");
}
else if(age>=18){
    console.log("you are adult");
}else{
    console.log("you are minor");
}

//* switch case 
let day=1;
switch(day){
    case 1:{
        console.log("Sunday");
        break;
    }
    case 2:{
        console.log("Monday");
        break;
    }
    case 3:{
        console.log("Tuesday");
        break;
    }
    case 4:{
        console.log("Wednesday");
        break;
    }
    case 5:{
        console.log("Thursday");
        break;
    }
    case 6:{
        console.log("Friday");
        break;
    }
    case 7:{
        console.log("Saturday");
        break;
    }
    default:{
        console.log("Enter day between 1-7");
    }
}

let days=1;
switch(days){
    case 1:
    case 7:{
        console.log("Weekend");
        break;
    }
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:{
        console.log("Weekday");
        break;
    }
    default:{
        console.log("Enter day between 1-7");
    }
}
//? loops
//* while loop
let i=5;
while(i<=10){
    console.log(i);
    i++;
}

//* do-while loop
let j=0;
do{
    console.log(j);
    j++;
}while(j<=10);

//* for loop
for(let i=0;i<=10;i++){
    console.log(i);
}

//* for-of loop
//?used in array and strings
let numbers=[1,2,3,4,5];
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
// same thing use less code with for-of loop
for(x of numbers){
    console.log(x);
}
 for( value of 'hello'){
    console.log(value);
 }
//  let user1={
//     name: 'Ram1',
//     email: 'ram@age',
//  }    //! not iterable
//  for ( x of user1){
//     console.log(x);
//  }

// //* for-in loop
// //? used in objects
let user={
    name:'Ram',
    email:"ram@gmail.com",
    password:12345,
}
for ( key in user){
    console.log(key);
    console.log(user[key]);
}
let num=[1,2,3,4];
for(x in num){
    console.log(x);  //index 
}
// //* jump / branch statements 
// //? break
// donot return value just exit from the loop or switch case
// for (let i=0;i<=10;i++){
//     if(i===5){
//         break;
//     }
//     console.log(i); 
// }

// //? continue
// 
// for(let i=0;i<=10;i++){
//     if(i%2===0 || i%3===0){
//         continue;
//     }
//     console.log(i);
// }

// // //? return  
// // // return values and exit from the function use

// for(let i=0;i<=10;i++){
//     if(i===5){
//         return 34;
//     }
//     console.log(i);
// }