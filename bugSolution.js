function foo(a,b){return Number(a) + Number(b);}
console.log(foo(1, "1")); // Output: 2
This version explicitly converts both arguments to numbers using Number(), ensuring numerical addition regardless of the input types.