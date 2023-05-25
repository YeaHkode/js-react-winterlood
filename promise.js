function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      reject("숫자형 값을 넣어주세요");
    }
  }, 2000);
}

isPositive(
  10,
  (res) => {
    console.log("성공적으로 수행됨: ", res);
  },
  (err) => {
    console.log("실패: ", err);
  }
);

/****************************************/

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        reject("숫자형 값을 넣어주세요");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(101);

res
  .then((res) => {
    console.log("작업 성공: ", res);
  })
  .catch((err) => {
    console.log("실패: ".err);
  });
