console.log("Learning Javascript Basics");

// Variables

const PI = 22 / 7;

console.log(PI);
const accountId = 14432;
let accountEmail = "saurav@google.com";
var accountPassword = "12345";
accountCity = "Vrindavan";

// accountId = 21548;

console.log(accountId);

console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
});

accountEmail = "saurav@yahoo.com";
accountPassword = "485963";
accountCity = "parasganj";

console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
});

/*
  Prefer not to use var, use let for variables and const for fixed values.
  - because of issues in the block scope and functional scope in var.
*/
