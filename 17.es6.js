//ES-> ECMA Script
//set of rules for scripting language

//* ES6-> 2015
//? invention
//! let, const
//! template literal->``
//! arrow function
//! es module -> import/export
//! promise
//! async/await

//! enhanced object literals
let name='John';
let key='email'
let obj={
    name,
    [key]:"hhh",//email
    getName: function(){ //old
        return this.name;
    },
    getEmail(){ //new
    }

}
console.log(obj.name)
console.log(obj[key])

//! class

//! destructing
// let john={
//     name:'John',
//     email:'john@gmail.com'
// }
// let{name1,email1}=john;

//! spread operator ...

//! rest operator  ...

//! default parameter
// function add(a=0,b=0){
//     return a+b;
// }
// add();

//! rest parameter ...
function add(...numbers){ //no fix argument
    console.log(numbers); //returns in array
    let sum=0;
    let l=numbers.length;
    for(i=0;i<l;i++){
        sum+=numbers[i];
    }
    console.log(sum);
}
add(5,4,3)


