/* eslint-disable */
const myObject = {
  foo: "bar",
};

myObject.new = "zoo";

const myKey = "my other value";
myObject[myKey] = "hello";

console.log(myObject);

const { foo: andererName } = myObject;

console.log(myObject);

console.log(andererName);

//

const sub2 = (a) => ({
  result: a - 3,
});

console.log(sub2(5, 2));

const numbers = [1, 2, 3, 4];

const square = numbers.map((num) => num * num);

//

const myNewObject = { foo: "bar" };

// myNewObject = { foo: 'baz' };

myNewObject.foo = "baz";

console.log(myNewObject);

const a = 2;

if (1 === 1) {
  const a = 1;

  console.log(a + a);
}

a;

let myValue = 4;
myValue = 6;

//

const myName = "Alex";

const greeting = "Hello " + myName + "!";
const greeting2 = `Hello ${1 === 2 ? myName : "Andre"}!`;

greeting;
greeting2;

//

const num1 = ""; // truthy
const num2 = false;

if (1 == 1 || 2 == 2) {
  console.log("Hello");
}

console.log(num1 == num2);

//

let compareObject1 = { foo: "1" };
let compareObject2 = { foo: "2" };
compareObject2 = compareObject1;

console.log(compareObject1 == compareObject2);
console.log(compareObject1 === compareObject2);

//

const returnSth1 = (param) => {
  return param || "Das war leider nix";
};
const returnSth2 = (param) => {
  return param ?? "Das war leider nix";
};

console.log(returnSth1(0));
console.log(returnSth2(0));
