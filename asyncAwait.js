function delay(ms) {
  return newPRomise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
// async function helloAsync() {
//   return delay(3000).then(() => {
//     return "hello world";
//   });
// }
async function helloAsync() {
  await delay(3000);
  return "hello world";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
