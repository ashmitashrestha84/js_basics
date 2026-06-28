//! event loop

//*callstack 

//*web api-> timer, DOM, promise:{onResolve:(){},onReject:(){},}, fetch, geolocation

//*task queue ->FIFO->
//* microtaskqueue->promise,fetch and
//* macrotaskqueue/callback queue->timer,DOM
//* microtaskqueue has the highest priority than macrotaskqueue

//* event loop->continuosly looping mechanism that pop the task from task queue and push to stack if stack is free,


// console.log('a');
// setTimeout(()=>{
//     console.log('processing');
// },2000)
//setTimeout gurantees task run after 2 sec but not before 2sec
// const getUser = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error=false;
//             if(error){
//                 reject("user fetched fail");
//             }
//             else{
//             console.log('User fetched');
//             resolve({
//                 _id: 2,
//                 name: 'John',
//                 email: 'john@gmail.com'
//             });
//         };
//         }, 2000);
//     });
// };
// getUser()
// .then((user)=>{
//     console.log(user)
// })
// .catch((err)=>{
//     console.log(err)
// })
// console.log('b');

// const b=async()=>{
//     try{
//         const fetch1=await fetch('https://jsonplaceholder.typicode.com/users/9'); //after await it is consider as .then
//         const c=await fetch1.json(); //second .then
//         console.log(c);
//     }catch{
//         console.log('error');
//     }finally{
//         console.log('finally');
//     }
// }
// b();

console.log('1');
setTimeout(()=>{
    console.log('2');
    Promise.resolve().then(()=>{
        console.log('3')
    })
})
Promise.resolve().then(()=>{
    console.log('4')
})
Promise.resolve().then(()=>{
    console.log('5')
})
console.log('6')