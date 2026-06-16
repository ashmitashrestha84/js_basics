//! array methods

let numbers=[2,4,5,6,7];

//? forEach // it doesnot return anything
// let double=[];
// const callback=(value,index,arr)=>{ // should be in this order only
//     console.log(value,index,arr);
//     arr[index]=arr[index]*2;
//     double[index]=arr[index];
// }
// let res=numbers.forEach(callback);
// console.log(res);
// console.log(numbers);
// console.log(double);

// numbers.forEach((v,i,arr)=>{
//     console.log(i);
// })

//* map x=>y
// returns new array and used for mofidy
//? arr.map(callback)

// const double=numbers.map((num,ind,arr)=>{
//     return num*2;
//     // return 'x';
// });
// // const double=numbers.map((num)=>num*2)
// console.log(numbers);
// console.log(double);

// const users = [
//     {
//         name: 'ram',
//         email: 'ram@gmail.com',
//     },
//     {
//         name: 'John',
//         email: 'john@gmail.com',
//     },
//     {
//         name: 'Bob',
//         email: 'bob@gmail.com',
//     }
// ];
// const name1=users.map((value)=>{
//   return value.name;
// });
// console.log(name1);

// // Create new array with user_name field added
// const users_with_user_name = users.map((user) => {
//     return {
//         ...user,
//         user_name: user.name + "-" + user.email
//     };
// });

// console.log(users_with_user_name);
//* filter
// arr.filter(callback) always returns current value and true value in boolean

// const even=numbers.filter((num)=>{
//     if(num%2===0){
//         return true;
//     }
// });
// const even=numbers.filter((num)=>num%2===0)
// const odd=numbers.filter((num)=>num%2!==0)
// console.log(numbers.filter((num)=>num>10));
// console.log(even);
// console.log(odd);

//* reduce
// reduce the array in a single number
// prev numb,current numb, current index,array
// const sum=numbers.reduce((arr,val)=>{
//     return (arr+=val);
// },0); // it denotes to the sum before the zeroth index and may or maynot be written
// console.log(sum);

//*find  ->value, undefined
//*findIndex -> index, -1
//*every-> boolean
//*some-> boolean
//*sort->
const arr=[101,10,20,4,2,3];
console.log(arr);
arr.sort();
console.log(arr);    // compares one element at a time 
// number is converted into string and sorted

arr.sort((a,b)=>{
  return a-b; // for ascending order
  //a.localCompare(b) //!for string 
})
console.log(arr);
//+ve -> swap
//-ve-> no swap
// 0 -> no swap

// let cart = {
//   user: 1, items: [
//     {
//       product: {
//         id: 1,
//         price: 1000,
//       },
//       quantity: 10,
//     },
//     {
//       product: {
//         id: 2,
//         price: 500,
//       },
//       quantity: 4,
//     },
//     {
//       product: {
//         id: 3,
//         price: 1500,
//       },
//       quantity: 6,
//     },
//   ],
// };

// const newcart=cart['items'];
// console.log(newcart);

// const cart1=newcart.map((values)=>{
//   return values['product']['price']*values['quantity'];
// });
// console.log(cart1);

// const total=cart1.reduce((prev,newvalue)=>{
//   return prev+newvalue;
// },0);
// console.log(total);

// const totalsum=cart.items.reduce((previous,items)=>{
//   return previous += items.product.price* items.quantity;
// },0);
// console.log(totalsum)


let student=[
  {
    name:'Ram',
    marks:[43,65,78,76,89],
  },
  {
    name: 'Hari',
    marks:[34,56,78,76,89],
  },
  {
    name: 'Sita',
    marks:[48,56,78,76,89],
  }
]

// const student_with_average_marks = student.map((res) => {
//     return {
//         ...res,
//         avg_marks: res.marks.reduce((acc, val) => {
//         return acc + val;
//     }, 0) / res.marks.length
//     };
// });

// console.log(student_with_average_marks);

// const pass_name= student_with_average_marks.filter((val)=>{
//          if(val.avg_marks>=70){
//           return val.name;
//          }
// });
// console.log(pass_name);

// const result=pass_name.map((std)=>std.name);
// console.log(result);

const averagemarks= (arr)=>{
  return(
    arr.reduce((acc,marks)=>{
      return(acc+=marks);
    })/arr.length
  )
}
const result=student
.map((student)=>{
  return{
    ...student,
    avg_marks:averagemarks(student.marks),
  };
})
.filter((std)=>std.avg_marks>=70)
.map((std)=>std.name);
console.log(result);