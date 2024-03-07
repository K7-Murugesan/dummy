// Operators 

// Arithmetic Operator

// console.log( 10 + 20 ); //add
// console.log( 20 - 10 ); //subtract
// console.log( 10 * 5 ); // multiply
// console.log( 14 / 5 ); // division ----> Quotient
// console.log( 14 % 5 ); // modulus ----> Remainder
// console.log( num**3 ); // Exponential

// var num = 4; // 5

// num = num + 1 ; // 5

// num = num + 1 ; // 5 + 1 = 6
// num = num - 1 ; // 6 - 1 = 5

// console.log( num );


// Increment & Decrement

//Increment -- ( ++  )
// Pre-Increment ( ++b )
// Post-Increment ( b++ )

// let b = 10; // 11
// // let c = ++b ; // c = 1+10 = 11
// let c = b++ ; // c = 10

//Post-increment
/* 
   1.Substitute 
   2.Operation
   3.Increment --Increase one value in Memory 
*/ 
// console.log( b );
// console.log( c );
// //Pre-increment
/* 1.Increment - first 1 assigned
   2.Substitute 
   3.Operation
*/ 

// let num1 = 10; // 11 - 12 - 13

// let sum1 = num1++ + ++num1 + num1++
// //  sum1 = 10++ + ++11 + 12++
// //  sum1 = 10 + 12 + 12 = 34

// console.log(num1, sum1 );


let a1 = 5; // 6 - 7
let b1 = 10; // 11 - 12

let c1 = a1++ + ++a1 + ++b1 + b1++;
// c1 = 5++ + ++6 + ++10 + 11++
// c1 = 5 + 7 + 11 + 11 = 34

// console.log( a1,b1,c1 );

//Decrement - Post & Pre

let a2 = 10; // 9 
let b2 = 11; // 10
let c2 = a2-- + --b2
// c2 = 10-- + --11
// c2 = 10 + 10 = 20

// console.log( a2,b2,c2 );

// Assignment Operator -- perform operation for same variable

let digit = 100; // 500

// digit = digit + 50;

// digit += 50; // add and assign
// digit -= 50; // subtract and assign
// digit *= 50; // multiply and assign // 500
// digit /= 50; // divide and assign  // 500/50
// digit %= 50; // modulus and assign  // 0
digit **= 2; // exponential and assign  // 0

// digit++

console.log( digit );

