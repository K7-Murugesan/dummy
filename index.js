// let a = 20;
// console.log( a )

// Variable

// Syntax : keyword variable_name = value;


// Keywords

// let var const --- function 

// Identifier 

var user = "Javascript"
var User = "Javascript"
var $User = "Javascript"
var _User = "Javascript"
var User, name = "Javascript"

var newemployeeid = 21;

// Camel Case, Pascal Case, Under Case

var newEmployeeId = 10; // Camel Case
var NewEmployeeId = 20; // Pascal Case
var New_Employee_Id = 20; // under Case or snake Case


var frontEnd = "Javascript" // declaration and initialization

var str; // Declaration

str = "html" // Initialization

var str = "css"; // re-declaration or re-define

str = "dataTypes" //Re-Initialization or Ree-assign

// Primitive Datatype or pre-defined type

let num = 10   //number

// String 
let str3 = "ML" //string literal
let str1 = 'Cyber Security' //string literal
let str2 = `Machine Learning` //template String

// boolean

let condition = true;
let condition1 = false;

// console.log( condition )

//undefined
// let noValue;
let noValue = undefined;

//null

let emptyVal = null;


// Non-primtive datatypes

//array

// let arr = [ 11,22,33,44,55,"six" ]
//  arr = [0,1,2,3,4,5,6]
// console.log( arr[3] )

// console.log( arr[ arr.length-1 ] ) // arr[5]

//Object

// key - value pair

/*  let obj = { newEmpId : 1, empName: "XYZ" }

console.log ( obj.newEmpId )  */

let obj2 = { newVal : "Ml" }


// Single line Comment
/*  Multi-line Comment  */

//Printing Statement

// let user1 = prompt("Enter a value"); //to get Dynamic Value

// console.log ( "Hii" )
// document.write( "Machine Learning" )
// document.writeln( "Cyber Security" )
// alert("Good Luck")
// confirm( "Welcome Guys" )

let user1 = "DataTypes Completed"

// console.log( user1 );

// let arr = [10,20,30,40]

// let newArr = arr.reduce( (acc,val,ind,arr)=>{
//   return( acc.concat(val) );
// }, []  )

// console.log( newArr );


// let currentInput = "1100111100";
// let target = "1"

function longestCons(currentInput,target){
   
  let currentCount=0;
  let maxCount = 0;
  let startIndex = 0;
  
  for ( let i =0; i<currentInput.length; i++  ){
      if( currentInput[i] == target  ){
          if( currentCount ==0 ){
              startIndex = i
          }
          currentCount++;
      }
      else {
          currentCount =0
      }
      // maxCount = Math.max(currentCount , maxCount )
      if(currentCount>maxCount){
          maxCount = currentCount
      }
  }
  
  let lastIndex = startIndex + maxCount -1;
  
  return {maxCount, startIndex, lastIndex };
  
  }
  
  let newVal = longestCons( "111000000000011100000000", "0"  )
  
  console.log(newVal.maxCount, newVal.startIndex, newVal.lastIndex )

  