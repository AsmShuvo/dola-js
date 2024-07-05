// 1. Check if a number is odd or even in JavaScript
// const x = 11;

// if (x % 2 == 0) {
//   console.log("Even");
// } else {
//   console.log("odd");
// }

// x = 10
// x%2 gives 0, checks 0 == 0 : ture -> if

// x=9
// x%2 -> 1 == 0 : false -> else

// 2. Check if input variable is a number or not
const y = 10,
  z = "dola";
console.log(typeof y);

if (typeof z == "number") {
  console.log("Yes Number");
} else {
  console.log("nan/NAN");
}
// HW: check a variable is a string or not
// HW: check a variable is undefined or not ***

// step 1: typeof y will return "number"
// step 2: comparing "number" == "number";
// step 3: if returns true-> if otherwise else

// 3. Find the largest of two number
const p = 10 - 1,
  q = 10;
if (p > q) {
  console.log("P is greater");
} else if (p == q) {
  console.log("p and q is equal");
} else {
  console.log("q is greater");
}
