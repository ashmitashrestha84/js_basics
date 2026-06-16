//! array
//? ordered collection of items

//? Array constructor
const arr = new Array(); // empty array

//? array literal []
let numbers = [1, 2, 3, 4, 5];
// numbered indexed and start from 0

//? acccessing array elements
// arr_name[index] -> returns elements
// console.log(numbers[0]);
// let first_el = numbers[0];
// console.log(first_el);

// numbers[1] = 20;
// console.log(numbers[1]);
// numbers=[];

// const numbers1 = [1, 2, 3, 4, 5, 6];
// numbers1[1] = 20;
// console.log(numbers1[1]);
//* numbers1=[] //error because numbers is a constant and cannot be reassigned to a new array. However, we can modify the existing array by changing its elements or using array methods.

//? adding new elements to an array
//! from end
//* arr_name.push(element)
// numbers.push(7, 8, 9, 10);
// console.log(numbers);
//  const res= numbers.push(11, 12);
//  console.log(res); // returns the new length of the array after adding the elements
//  console.log(numbers);

// //! from beginning
// //* arr_name.unshift(element)
// numbers.unshift(-2,-1,0);
// console.log(numbers);

//? removing elements from an array
//! from end
//* arr_name.pop()
// console.log(numbers.pop()); // removes and returns the last element of the array

//! from beginning
// //* arr_name.shift()
// console.log(numbers.shift()); // removes and returns the first element of the array
// console.log(numbers);
// //!length of an array
// console.log(numbers.length)
// numbers.push(8,9);
// console.log(numbers[numbers.length-1]); // last element of the array
// console.log(numbers); 

//* at() is  
console.log(numbers.at(0),numbers[0]); // first element
console.log(numbers.at(-1),numbers[1]);
console.log(numbers.at(-2),numbers[-1]);

//! Splice
//* array_name.splice(start_index,delete_count, ....items)
// numbers.splice(1,2);
// console.log(numbers);
// const res= numbers.splice(1,2);
// console.log(res); // returns the removed elements in array [2, 3]
// console.log(numbers);

numbers.splice(1,0,10,20,30);
console.log(numbers);

//! search
//* includes(item) -> returns true if item is found in the array, otherwise false
// console.log(numbers.includes(20));
// console.log(numbers.includes(5));

// //*IndexOf(ele)
let num=[1,2,3,4]
console.log(num.indexOf(4));
console.log(num.indexOf(45)); 
num.push(2);
console.log(num.indexOf(2)); // returns 1
console.log(num.lastIndexOf(2)); // returns 4

//todo: array-methods