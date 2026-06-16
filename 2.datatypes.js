// is 
//! primitive 
// non mutable => value stored in stack
let a="Ashmita";
a[0]="M";
console.log(a); // Output: "Ashmita" (strings are immutable)

// //* number
//     let a=10;
//     let i=10.5;
// //*string
//     let b="Ashmita"; // single line string
//     let d="";

//     //?template literal => ``
//     let e=`hello ${2+2} `; //? multiple line string, interpolation => ${} (dynamic string creation)
//     console.log(e);
//     let user="John";
//     let f=`hello ${user}`;
//     console.log(f);
// //*boolean
//     let c=true;
//     let j=false;
// //*null 
     let h=null;
    console.log(h);
// //*undefined 
   let g;
 console.log(g);

// //? diff betn undefined and not defined
//     let y;
//     console.log(y); // variable declared but not initialized => undefined

//     console.log(x); // without declaration => not defined


// //! non-primitive
// mutable => value stored in heap and reference stored in stack
// //* object
// //* array
// //* function
