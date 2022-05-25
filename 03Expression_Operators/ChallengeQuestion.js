// what will be the output of 3**3?
//=>27
// what will happend add number and string?
//=>hello24 it take number as string
// write a program to swap two number?

// write a program to swap to numbers without third variable?



//Solution 1

console.log(3**3); //=> 27

//Solution 2

console.log("hello" + 24);

//Solution 3

var a = 2;
var b = 3;
var c;
c = a;
a = b;
b = c;
console.log("a :" +a + " b: " + b);

//Solution 4

a = a+b; // 5
b = a-b; // 2
a = a-b; // 3

console.log("a :" +a + " b: " + b);