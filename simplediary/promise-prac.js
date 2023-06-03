// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve(1);
//   }, 2000);
// })
//   .then(function (result) {
//     console.log(result);
//     return result + 10;
//   })
//   .then(function (result) {
//     console.log(result);
//     return result + 20;
//   })
//   .then(function (result) {
//     console.log(result);
//   });

//   function getData(){
//     return new Promise(function(resolve, reject){
//       reject('failed');
//     })
//   }

//   getData.then(function(){
//   })

function fetchItems() {
  return new Promise(function (resolve, reject) {
    var items = [1, 2, 3];
    resolve(items);
  });
}

function fetchItems() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var items = [1, 2, 3];
      resolve(items);
    }, 3000);
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems);
}

console.log(logItems());

// HTTP 통신 동작을 모방한 코드
function fetchItems() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var items = [1, 2, 3];
      resolve(items);
    }, 3000);
  });
}

// jQuery ajax 코드
function fetchItems() {
  return new Promise(function (resolve, reject) {
    $.ajax("domain.com/items", function (response) {
      resolve(response);
    });
  });
}
