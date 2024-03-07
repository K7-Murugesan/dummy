// 1 to 10

// let x = 3;

// for(let num=1; num<=10; num++ ){
//     // 5X1=5
//     //5X2 = 10
//     //5x10=50
//     console.log( x +"X" + num + "=" + (x*num) );
// }

// for( let num =10; num>=1; num-- ){
//     console.log( num );
// }

// let digit = 143; // 1 + 4 + 3 = 8 // 0*10 + 3 = 3 ---- 3*10 + 4 

// let reverse = 0;

// while( digit>0 ){
//     let last = digit%10; // 143%10 == 3
//     // reverse = reverse*10 + last
//     reverse
//     digit = parseInt( digit/10 ) // 143/10 ==  14.3 == 14

// }

// console.log( reverse );

let num = 143;

let sum = 1;

while(num>0){
    let last = num%10
    sum = sum * last
    num = parseInt( num/10 )
}

console.log( sum );
