//const oper = require("./oper"); // mudule export type 1
const {add,sub,mul,div,name} = require('./oper');    // mudule export type 2

// console.log(oper.add(8,8));  // mudule export type 1
// console.log(oper.mul(8,8));  // mudule export type 1
console.log("add:",add(12,6));   // mudule export type 2
console.log("sub:",sub(12,6));   // mudule export type 2
console.log("mul:",mul(12,6));   // mudule export type 2
console.log("div:",div(12,6));   // mudule export type 2
console.log("name:",name) ;      // mudule export type 2