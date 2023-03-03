/* Q2
2.	Starting with an array containing the numbers 1 through 10, use filter, map and reduce to produce the following.  Use console.log to display the results.
a.	An array of odd numbers
b.	An array of numbers divisible by 2 or 5
c.	An array of numbers divisible by 3, squared 
i.	If the number is divisible by 3, square it
d.	The sum of the following: square the numbers divisible by 5

*/

var myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//a
const odd_array = [];
for (const i of myarray) {
  if (i % 2 !== 0) {
    odd_array.push(i);
  }
}

//b
const two_five_array = [];
for (const j of myarray) {
    if (j % 2 == 0 || j % 5 == 0)  {
        two_five_array.push(j);
  }
}


//c
const c_array = [];
for (const b of myarray) {
    if (b % 3 == 0)  {
        c_array.push(b*b);
  }
}


//d
let square_numbers_sum = 0
const d_array = [];
for (const d of myarray) {
    if (d % 5 == 0)  {
        square_numbers_sum += (d*d);
  }
}

console.log("a. An array of odd numbers: " + odd_array);
console.log("b.	An array of numbers divisible by 2 or 5: " + two_five_array);
console.log("c.	An array of numbers divisible by 3, squared: " + c_array);
console.log("d.	The sum of the following: square the numbers divisible by 5: " + square_numbers_sum);