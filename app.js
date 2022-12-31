
const arr = [{text: 21, key: "Foo"}];

function mod(A) {
  A[0].text = 25;
}

mod(arr);
console.log(arr);