//Create a clock updating every second using setInterval.
// const clock = () => {
//     return setInterval(() => {
//         const date = new Date();
//         let hr1 = date.getHours();
//         let min1 = date.getMinutes();
//         let sec1 = date.getSeconds();
//         sec1++;
//         if (sec1 >= 60) {
//             sec1 = 0;
//             min1++;
//         }
//         if (min1 >= 60) {
//             min1 = 0;
//             hr1++;
//         }
//         if (hr1 >= 24) {
//             hr1 = 0;
//         }
//         const formatted = `${String(hr1).padStart(2,'0')}:${String(min1).padStart(2,'0')}:${String(sec1).padStart(2,'0')}`;
//         console.log(formatted);
//     }, 1000);
// };
// clock();




// Stopwatch - Implement start(), stop(), and reset() displaying HH:MM:SS.


// let id;

// const start = (time) => {
//     return new Promise((resolve, reject) => {
//         if (id) {
//             clearInterval(id);
//         }
//         let hr=time.hr;
//         let min=time.min;
//         let sec=time.sec;
//         let millisec=time.millisec;
//         console.log('Start Called')
//         id = setInterval(() => {
//             millisec++;

//             if (millisec >= 100) {
//                 millisec = 0;
//                 sec++;
//             }

//             if (sec >= 60) {
//                 sec = 0;
//                 min++;
//             }
//             if (min >= 60) {
//                 min = 0;
//                 hr++;
//             }
//             console.clear()
//              console.log(
//                 `${String(hr).padStart(2,'0')}:` +
//                 `${String(min).padStart(2,'0')}:` +
//                 `${String(sec).padStart(2,'0')}:` +
//                 `${String(millisec).padStart(2,'0')}`
//             );
//             if (sec === 10) {
//                 clearInterval(id);
//                 id = null; // important
//                 resolve({ hr, min, sec, millisec });
//             }
//         }, 10);
//     });
// };
// const stop = (time1) => {
//     return new Promise((resolve) => {
//         clearInterval(id); 
//         const formatted =
//             `${String(time1.hr).padStart(2,'0')}:` +
//             `${String(time1.min).padStart(2,'0')}:` +
//             `${String(time1.sec).padStart(2,'0')}:` +
//             `${String(time1.millisec).padStart(3, '0')}`

//         console.log("STOP CALLED:", formatted);

//         resolve(time1); 
//     });
// };

// const reset = () => {
//     return new Promise((resolve) => {
//         clearInterval(id);
//         const resetTime = {
//             hr: 0,
//             min: 0,
//             sec: 0,
//             millisec: 0
//         };

//         resolve(resetTime);
//     });
// };
// reset()
// .then((time) => start(time))
// .then((time1) => stop(time1))
// .then(() => reset())
// .then((finalReset) => {
//     console.log("FINAL OUTPUT:", 
//         `${String(finalReset.hr).padStart(2,'0')}:` +
//         `${String(finalReset.min).padStart(2,'0')}:` +
//         `${String(finalReset.sec).padStart(2,'0')}:` +
//         `${String(finalReset.millisec).padStart(2,'0')}`
//     );
// })
// .catch(console.error);


const users = [
  { name: "Asha", age: 20 },
  { name: "Ram", age: 17 },
  { name: "Sita", age: 22 }
];
const user1 = users
.filter(value=>value.age >= 18)
.map(value1=>value1.name);
console.log(user1);