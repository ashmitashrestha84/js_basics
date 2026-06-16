//!asynchronous-> non blocking

// //* setTimeout
// //? setTimeout(callback,timer_out);
//*use to do task at a particular time and it executes only one time

console.log('start');

// const timer_id=setTimeout((a,b)=>{
//     console.log('procesing',a,b);
// },2000,12,13); //1sec=1000 //12 and 13 is argument  

// console.log(timer_id);
// console.log(timer_id._timerArgs);
// clearTimeout(timer_id);
// console.log('end');

// //*set interval =>execute the task multiple time
// setInterval(()=>{
//       console.log('interval')
// },1000);

// console.log("ends");



//todo: hh:mm:ss->countdown timer
// const time = (second) => {
//     const timer=setInterval(()=>{
//         let hr = String(Math.floor(second / 3600)).padStart(2, '0');
//         let min = String(Math.floor((second % 3600) / 60)).padStart(2, '0');
//         let sec = String(Math.floor(second % 60)).padStart(2, '0');

//         console.log(`${hr}:${min}:${sec}`);
//         if (second === 0) {
//             console.log("Let's begin our journey!");
//             clearTimeout(timer);
//         }
//         second--;
//     }, 1000);
// };
// time(2000);

// //todo:callback function

// function a(callback){
//     console.log('a');
//     callback(12);
// }
// a((b)=>{
//     console.log(b);
// })


//!callback hell also called as pyramid of doom
//not used in present coding, just read for callback understanding and hard to manage, debug and understand


// console.log('start');
// const getUser=(callback)=>{
//     setTimeout(()=>{
//         console.log('User fetched');
//         callback(null,{
//             _id:2,
//             name:'John',
//             email:'john@gmail.com',
//         });
//     },2000);
// };
// const getPosts=(userID,callback1)=>{
//     setTimeout(()=>{
//         console.log("post fetched");
    
//         callback1(null,
//             [{
//                 _id:1,
//                 userID:userID,
//                 title:'post1'
//             },
//                 {
//                 _id:2,
//                 userID:userID,
//                 title:'post2',
//             }])
//     },1500);
// };
// const getComments=(postID,callback2)=>{
//     setTimeout(()=>{
//         console.log('comment fetched')
//         callback2(null,[{
//             _id:postID,
//             name:'John1',
//         },
//         {
//         _id:postID,
//          name:'John1',
//         }]);
//     },1000)
// }
// getUser((error, user)=>{
//              if(error){
//                 console.log(error);
//                 return;
//             }
//             console.log(user);
//     getPosts(user._id,(error,post)=>{
//                 if(error){
//                 console.log(error);
//                 return;
//             }
//             console.log(post);
//         getComments(post[0]._id,(error,comments)=>{
//             if(error){
//                 console.log(error);
//                 return;
//             }
//             console.log(comments);
//         });
//     });
// })


//! solution to callback hell-> promise

