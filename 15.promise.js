//! promise
//* predict the success or failure of code in future

//*states->pending,fullfilled,rejected
//nonblocking

// console.log('start');
// const promise= new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     resolve('Success');
    // reject("error");
//    },2000);
// })
// console.log(promise);

// //! handling promise
// promise
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log('finally');
// })

// console.log('end');


// console.log('start');

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error=false;
            if(error){
                reject("user fetched fail");
            }
            else{
            console.log('User fetched');
            resolve({
                _id: 2,
                name: 'John',
                email: 'john@gmail.com'
            });
        };
        }, 2000);
    });
};

const getPosts = (userID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error=true;
            if(error){
                reject("post fetched fail.")
            }else{
            console.log('Post fetched');
            resolve([
                {
                    _id: 1,
                    Id:userID,
                    title: 'post1'
                },
                {
                    _id: 2,
                    Id:userID,
                    title: 'post2'
                }
            ]);
        };
        }, 1500);
    });
};

const getComments = (postID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error=false;
            if(error){
                reject('comment fetched fail');
            }else{
            console.log('Comment fetched');
            resolve([
                {
                    _id: postID,
                    name: 'John1'
                },
                {
                    _id: postID,
                    name: 'John2'
                }
            ]);
        }
        }, 1000);
    });
};

// getUser()
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('finally');
// })

//! promise chaining
// getUser()
//     .then((user) => {
//         console.log(user);
//         return getPosts(user._id);
//     })
//     .then((posts )=> {
//         console.log(posts);
        // return getComments(posts[0]._id);
//     })
    // .then(comments => {
    //     console.log(comments);
    // })
//     .catch((err)=>{
//         console.log(err);
//     })
// console.log('end');

//! fetch -> send request to API-> returns promise
// fetch('https://jsonplaceholder.typicode.com/users/9')
// .then((response)=>{
//     return response.json(); //json returns promise so apply promise chaining 
//     //json helps to convert the output in the form of array
// })
// .then((user)=>{
//     console.log(user);
// })
// .catch((err)=>{
//     console.log(error);
// })

//! aync/await->synathetic sugar of promise
//!try/catch

const a=async() =>{
 try{
    const user=await getUser();
    console.log(user);
    const posts=await getPosts(user._id);
    console.log(posts);
    const comments=await getComments(posts[0]._id);
    console.log(comments);
} catch(error){
    console.log(error);
} finally{
    console.log('finally')
}
};
a();
console.log('end');

// const b=async()=>{
//     try{
//         const fetch1=await fetch('https://jsonplaceholder.typicode.com/users/9');
//         const c=await fetch1.json();
//         console.log(c);
//     }catch{
//         console.log('error');
//     }finally{
//         console.log('finally');
//     }
// }
// b();

const c = async () => {
    try {
        const response1 = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );
        const post1 = await response1.json();
        console.log(post1[0]);
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${post1[3].id}`
        );
        const comments = await response.json();
        console.log(comments);
    }
    catch (error) {
        console.log(error);
    }
};
c();

//todo:event loop
//callstack 
//web api
//queue -> microtaskqueue and macrotaskqueue
//microtaskqueue has the highest priority than macrotaskqueue