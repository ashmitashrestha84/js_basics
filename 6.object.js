//! Object
//store related data 

//* object constructor
const obj = new Object();
// key should be unique and string
//* object literal
// let user={
//     name:'John',
//     email:'john@gmail.com',
//     address:{
//         city:'Kathmandu',
//         country:'Nepal',
//     }
// };
// console.log(user);
// console.log(user.address.city);
// console.log(user['address']['city']);
//? console.log(user[address[city]]); //undefined because address is not defined as a variable. It should be user[address][city] or user['address']['city'] to access the city property of the address object within the user object.
//!reading properties

//* dot notation
//?object_name.key_name
// const name=user.name;
// console.log(name);

// //* bracket notation
// //?object_name['key_name']
// console.log(user['email']);

// //! use for key having space or special characters
// const user1={
//     'first name':'Ashmita',
//     'last name':'Shrestha',
// };
// console.log(user1['first name']);

// //! for dynamic keys
// let key='email';
// console.log(user[key]); //user['email']

// key='name';
// console.log(user[key]); // user['name']

// console.log(obj,user);


// //! adding new properties
// user.password='12345';
// console.log(obj,user);

// user['age']=30;
// console.log(obj,user);

// //! changing existing properties
// user.name='Sabita';
// console.log(obj,user);
// user['email']='sabita@gmail.com';
// console.log(obj,user);

// //! deleting properties
// delete user.password;
// delete user['age'];
// console.log(obj,user);

//? pass by value and pass by reference

// let a={
//     a:1,
//     b:2,
// }
// let d={a};
// //* spread operator ...
// let e={...a}; 
// a.c=3;
// a.b=20;
// console.log(a,d,e);

// let e={
//     g:10,
//     h:20,
// }
// let f={
//     p:30,
//     g:40,
// }
// let d={...e,...f}; // if there are duplicate keys, the value from the last object will overwrite the previous one. In this case, the value of g in object f will overwrite the value of g in object e, resulting in g having a value of 10 in the final object d.
// console.log(d);

//! for array
// let d=[[1,2],[3,4]];
// let e=[...d];
// console.log(e); 
// let f=[...[0,1],...[2,3]]
// console.log(f);

//* destructuring is 
// let info={
//     name:'Ahaan',
//     email:'ahaan@gmail.com',
//     age:25,
// }
// let name=info.name;
// let email=info.email;

// let {name,email,age}=info;
// console.log(name,email,age);

// let info1={
//     name:'Anapurna',
//     email:'anapurna@gmail.com',
//     age:30,
// }
// let {name:user_name,email:user_email,age:user_age}=info1;
// console.log(user_name,user_email,user_age);

//! rest operator ...
 let info2={
    name:'Anapurna',
    email:'annapurna@gmail.com',
    age:'30',
}
let{ name,...others}=info2; //others is a object that contains remaining properties of info2.
console.log(name,others);

//! convert to array
console.log(Object.keys(info2)); // returns an array of keys ['name', 'email', 'age']
console.log(Object.values(info2)); // returns an array of values ['Anapurna', 'annapurna@gmail.com','30']
console.log(Object.entries(info2));
// returns an array of key-value pairs [['name', 'Anapurna'], ['email', '.........]

//! convert to object
// let entries=[
//     ["name","Anapurna"],
//     ["email","annapurna@gmail.com"],
//     ["age",30],
// ]
// console.log(Object.fromEntries(entries)); // converts an array of key-value pairs into an object {name: 'Anapurna', email: '



