console.log("Im in test folder");

const doworkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve(["x", "y", "z"]);
    reject("things went wrong!");
  }, 2000);
});

doworkPromise
  .then((error) => {
    console.log("success!", error);
  })
  .catch((error) => {
    console.log("unable to resolve", error);
  });

//CRUD create read update delete
