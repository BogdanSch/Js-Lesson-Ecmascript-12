let promise = new Promise(function (resolve, reject) {
  // setTimeout(() => resolve("Success!"), 1000); // задача выполнена успешно (отработает через 1 секунду)
  setTimeout(() => reject(new Error("Error!")), 1000);
});

promise.then(
  function (result) {
    /* обработка успешного выполнения */
    console.log(result);
  },
  function (error) {
    /* обработка ошибки */
    console.log(error);
  }
);

promise.catch(() => console.log("Error"));
promise.finally(() => console.log("Finally"));

let greeting;

async function hello() {
  return (greeting = await new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Success!"), 1000); // задача выполнена успешно (через 1 секунду)
  }));
}

hello().then(function (result) {
  alert(result);
});
