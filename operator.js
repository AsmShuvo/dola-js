// Arithmatic operator:
let a = 12,
  b = 10;
console.log(a + b); // adition operator
console.log(a - b); // sub operator
console.log(a * b); // mul operator
console.log(a / b); // div operator
console.log(a % b); // modulous operator

//Assignment operator = += -= *= /=
console.log(a + 2);
console.log(a);
console.log((a += 2)); // a = a+2
console.log(a);

console.log(); //new line
console.log(a - 2);
console.log(a);
console.log((a -= 2)); // a = a-2
console.log(a);

console.log(); // new line
console.log(a * 3);
console.log(a);
console.log((a *= 3)); // a = a-2
console.log(a);

// logical operator: && AND , || OR

// conditional operator ? :  condition ? <>if condition true<> : <>if not true<> : ternery operator
const age = 8;
age >= 18 ? console.log("voter") : console.log("not voter");

const name = "shuvo";
name == "shuvo" ? console.log("male") : console.log("females");

const gender = "female",
  Age = 21;

if (gender == "male" || Age >= 18) {
  console.log("gentleman");
} else if (gender == "female" && Age >= 18) {
  console.log("Ladies");
} else {
  console.log("child");
}



const k = 10;
console.log(k>10);
console.log(k<10);
console.log(k>=10);
console.log(k==10)
console.log(k<=10)

