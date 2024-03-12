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
// digit **= 2; // exponential and assign  // 0

// // digit++

// console.log( digit );

// Comparision Operator

let num1 = 30;
let num2 = 30;

// console.log( num2 > num1  ); // Greater Than
// console.log( num2 < num1 ); // Less than
// console.log( num1>=num2 );// Greter than or Equal to
// console.log( num1<=num2 );// Less than or Equal to

// console.log( num1 == num2  ); // Equal To

// console.log( num1 === num2 ); // Strict Equal

// console.log( num1 != num2 ); //Not Equal

// console.log( num1 !== num2  );//Strict Not Equal


// Logical Operator

// Logical AND ( && )

// let age = 17; // 18 - 30

// console.log(  age >= 18  && age <= 30 );
//            18 > 18 && 18 < 30 ==> false && true // Short Circuit Evaluation
//            19 > 18 && 19 < 30 ==> true && true
//            30 > 18 && 30 < 30 ==> true && false
//            30 >= 18 && 30 <= 30 ==> true && true

// Logical OR ( ||  )

let idProof = "pan";
// let idProof1 = "license"

// console.log(  idProof1 == "license" || idProof == "voterID"  );
// console.log(  idProof == "license" || idProof == "voterID"  );
//            licence == licence || licence == voterID // true || false ==> true
//            voterID == licence || voterID == voterID // false || true ==> true
//            license == licence || voterID == voterID // true || true ==> true
//            pan == licence || pan == voterID // false || false ==> false

// Logical NOT ( ! )
// console.log(  !(10 == 10) );

// Concatination

// let str = "Javascript"
// let str1 = "is a"
// let str2 = "Scripting Language"

// let newStr = str + " " + str1 + " " +  str2

// console.log( str +" " + "is a scripting Language" );


// Type Conversion

// Implicit Type Conversion or type coercion

// let num = 10;
// let chars = "hii"
// console.log( 10 + "10"  ); // number + string
// console.log( typeof (10 + "10" ) ); 
// console.log( chars + true  );
// console.log( chars + undefined  );
// console.log( chars + null  );

// console.log( num + true  ); // true - 1
// console.log( num + false  ); // false - 0
// console.log( false + false  ); 
// console.log( true + true  ); 
// console.log( Number( undefined )  );
// console.log( typeof (num + undefined) ); // NaN - Not a Number
// console.log( num + undefined );
// console.log(  num + null );  // number + null = number

// console.log( true + "abc" );
// console.log( true + 1 );
// console.log( true + undefined );
// console.log( true + null ); // 1 + 0


// console.log( 10 == "10"  );

// anything +  string  = string
// string + anything   = string


// Explicit Type Conversion

// console.log(  Number( null ) );
// console.log(  String( null ) );
// console.log( Boolean( "" )  );
// console.log( Boolean( "1" )  );
// console.log( Boolean( "abc" )  );
// console.log( Boolean( -10 )  );
// console.log( Boolean( undefined ) );
// console.log( Boolean( null ) );

// Undeclared Variable vs undefined

let a;

console.log(  a  ); // undeclared variable