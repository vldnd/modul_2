"use strict";

const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

const addPrefix = ([...arr]) => {
  const x = "Mr ";

  for (const key in arr) {
    arr[key] = x + arr[key];
  }
  return arr;
};

console.log(addPrefix(names));
