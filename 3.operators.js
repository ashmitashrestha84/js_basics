// //!operators
// is a special symbol that performs operations on operands and produces a result
// //* Arithmetic Operators
// //? +,-,*,/,%,**
// let a = 10;
// let b = 5;
// console.log(a + b);
// console.log(a-b);
// console.log(a*b);
// console.log(11/2);
// console.log(11%2);
// console.log(2**4);
// console.log("hello"+"world");
// console.log("hello"+" "+"world");

// //* Assignment Operators
// //? =, +=, -=
// let c = 10;
// let d=10;
// c+=5; // c=c+5
// c-=d;
// console.log(c);

// //* Comparison Operators
// //? ==, ===, <, >, <=, >= ,!=, !== 

// console.log(10<10);
// console.log(10<=10);

// let x=10;
// let y=10;
// console.log(x==y);  // compare value only by converting data types to same data type
// console.log(x===y);  // compare value and data type
// console.log(x==='y');

// //* Logical Operators
// //? and &&, or ||, not !
// && = short circuit opeator c
// let isAdmin = true;
//  let res= isAdmin && "Admin";
// console.log(res);
//  let isAdmin = false;
// let res= isAdmin && "Admin";

// console.log(true && true);
// console.log(true && false);
// console.log(true || true);
// console.log(true || false);
// console.log(!true);
// console.log(!false);

// //* typeof operator
// console.log(typeof 12);
// console.log(typeof x==="number");
// console.log(typeof null);
console.log(typeof undefined);

// //*bitwise operators
//, &, | , ~
// console.log(2&3);
// 010 & 011 => 010 => 2

// //* unary operator
// //? ++, --
// increment ++

// let num=10;
// //! pre increment
// console.log(++num); //11

// //! post increment
// console.log(num++); //11 but num becomes 12
// console.log(num); //12

// //! decrement --

// //* ternary operator
// //? condition ? exp1 : exp2
// let age=18;
// console.log(age >= 18 ? 'can vote' : 'cannot vote') ;

//! type conversion

// //?explicit
// console.log(Boolean(12));
// console.log(Number("12"));
// console.log(Number("hello"));
console.log(String(true));

// //? parseint
// console.log(parseInt(12.34));
console.log(parseInt("12abc"));

// //? parseFloat
// console.log(parseFloat(12.34));
console.log(parseFloat("12.34abc"));
// console.log(parseFloat("abc12.34")); //NaN

// //?implicit 
// //! type coercion
// console.log(12+"34");
// console.log("10"-2);
// console.log("abc"-2); //NaN

// //! truthy and falsy values
// //? falsy values => false, 0,-0, null, undefined, NaN,""
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));

// fals
// //* use case of truthy and falsy values is backend development
// // let user = findByid(id);
// // if(!user){
// //     throw new Error("user not found");
// // }
