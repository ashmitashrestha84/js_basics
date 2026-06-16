//! closure
// when a function remembers and can access variables from its outer (lexical) scope
//use when we want to private the variable without using class
// const parent=()=>{
//     let x='parent';  //x is completely private and only accessed by inner
//     const child=()=>{
//         console.log(x);
//     }
//     return child;
// }
// const inner=parent();
// inner();

// const counter=()=>{
//     let count=0;
//     const inner=()=>{
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const count1=counter(); //{count:0}  
// const count2=counter(); //{count:0}

// count1(); //1
// count1(); //2
// count2(); //1
// count1(); //2
// count2(); //2

// const counter=()=>{      //(intial count=0)
//     let count=0;    //count = initial count
//     const increase=()=>{
//         count++;
//     }
//     const decrease=()=>{
//         count--;
//     }
//     const show=()=>{
//         console.log(count);
//         return count;
//     }
    
//     return funct={
//         increase,
//         decrease,
//         show,
//     };
// }
// const count1=counter(); //{count:0}  //counter(5)
// const count2=counter();
 

// count1.increase();
// count2.decrease();
// count1.increase();
// count2.decrease();
// count1.decrease();
// count1.show();
// count2.show();

//! function factory

// const add=(factor)=>{
//     return(num)=>{
//         return factor+num;
//     }
// }
// const add=(factor)=>(num)=> factor+num;
// const add5=add(5);    //{factor:5}
// const add10=add(10);  //{factor:10}
// console.log(add5(10));
// console.log(add5(18));
// console.log(add10(13));

//*caching
//process of storing the result so that it can be used after instead of recalculating the same value.
// const sum = () => {
//     let cache = {};

//     return (num) => {
//         if (cache[num.toString()]) {
//             return cache[num.toString()];
//         }
//         else{
//         console.log("calculating");
//         let res = 0;
//         for (let i = 0; i < 900000000; i++) {
//             res = num * 1000;
//         }
//         cache[num.toString()] = res;
//         return cache[num.toString()];
//     }
//     };
// };

// let x = sum();

// console.log(x(2));
// console.log(x(4)); 
// console.log(x(2)); 

//!Account(acc_name,initial_amt)
//*deposit, withdraw, blc_inq
const account = (acc_name, initial_amt) => {
    let name = acc_name;
    let amount = initial_amt;

    return {
        deposit: (depos) => {
            if (depos > 0) {
                amount += depos;
                console.log(`The balance is ${amount}`);
            } else {
                console.log("Invalid amount");
            }
        },

        withdraw: (withamt) => {
            if (withamt > 0 && amount - withamt >= 500) {
                amount -= withamt;
                console.log(`The balance is ${amount}`);
            } else {
                console.log("Invalid amount");
            }
        },

        balance_inq: () => {
            console.log(`The balance is ${amount}`);
        },

        details: () => {
            console.log(`Name: ${name}`);
            console.log(`Balance: ${amount}`);
        }
    };
};

const account1 = account("Saya", 150000);

account1.withdraw(10000);
account1.details();