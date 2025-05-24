// 1. The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Kuch aise kaam hote hai jo abhi to complete nhi ho shakte, but kuch time baad jaror complete ho jayange.
// A Promise is in one of these states:
// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation was completed successfully.
// 3. rejected: meaning that the operation failed.

// Example 1: Creating promise with a variable
const mypromise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("My first Promise");
    resolve();
  }, 1000);
  resolve();
});

mypromise1.then(function () {
  console.log("my second Promise");
});
//Explanation: A promise has resolve and reject. Firstly My first Promise will be printed then after 1 sec My second Promise will be printed. whenever resolve() is called it means .then block will be exected. function(resolve,reject) is a callback function.
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. A callback is a way to say what to do next once a task is done.






//Example 2: Creating Promise without any variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("My first Promise");
    resolve();
  }, 1000);
  resolve();
}).then(function () {
  console.log("my second Promise");
});







//Example 3: passing argument in resolve()
const mypromise2 = new Promise(function (resolve, reject) {
  resolve({ name: "Ritesh", age: 23 }); //passing arguments as  an object
});

mypromise2.then(function (user) {
  console.log(user); //output:   { name: 'Ritesh', age: 23 }
  console.log(user.name); //output: Ritesh
  console.log(user.age); //output: 23
});

// user is a variable, so it can be of any name.







//Example 4:
const mypromise4 = new Promise(function (resolve, reject) {
  let error = false;
  if (!error) {
    resolve({ name: "Ritesh", age: 23 });
  } else {
    reject("Error occured");
  }
});
mypromise4
  .then(function (user) {
    console.log(user); //{ name: 'Ritesh', age: 23 }
    return user.name; // this return means it will be passed as an argument in .then below it. Means Ritesh will be passed as an arugment and will get printed in next .then block.
  })
  .then(function (username) {
    console.log(username); //Ritesh
  })
  .catch(function (error) {
    console.log(error); //it will handle the error/reject
  })
  .finally(() => {
    console.log("Promise handled successfully"); //Promise handled successfully
  });

// we can also use arrow function
mypromise4
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise handled successfully");
  });








//Example 5: Promise can also be handled by async await
const mypromise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ name: "Ritesh", age: 23 });
    } else {
      reject("Error occured");
    }
  }, 1000);
});

async function myfunction() {
  try {
    const response = await mypromise5;
    console.log(response); // { name: 'Ritesh', age: 23 }
    console.log(response.name); //Ritesh
  } catch (error) {
    console.log(error);
  }
}
myfunction();
//Note: async await do not handle errors so we can use try catch block to handle errors.






//Example: 6
async function getMyGithubDetails() {
  try {
    const response = await fetch("https://api.github.com/users/riteshpatel");
    const data = await response.json(); //converting string to json format.
    console.log(data.login); //riteshpatel;
    console.log(data.id); //1648246
  } catch (error) {
    console.log(error);
  }
}
getMyGithubDetails();
//Code is almost perfect but response.json also takes some time to exectue so we have to use await

//Same example using then-catch
fetch("https://api.github.com/users/riteshpatel")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.id); //1648246
    console.log(data.login); //riteshpatel
  })
  .catch((error) => {
    console.log(error);
  });
