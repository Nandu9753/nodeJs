const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;
const name = "narendra";

// module.exports.add = add;  // mudule export type 1
// module.exports.sub = sub;  // mudule export type 1
// module.exports.mul = mul;  // mudule export type 1
// module.exports.div = div;   // mudule export type 1
 
module.exports = {  add,sub,mul,div,name };   // mudule export type 2
