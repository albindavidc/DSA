
// function rotateString(str,num){
//     if(num <1){
//         return str
//     }

//     str = str.slice(1) + str[0]

//     return rotateString(str, num - 1)

// }

// console.log(rotateString("this", 1))



// function reverseString(str, n = str.length, splitStr = str.split('')){
//     if(n <= Math.ceil(splitStr.length/2)){
//         return splitStr.join('')
//     }

//     [splitStr[splitStr.length - n], splitStr[n - 1]] = [splitStr[n - 1], splitStr[splitStr.length - n]];
//     return reverseString(str, n-1, splitStr)
// }

// console.log(reverseString("thisklmji"))

// function fibonacciNum(n, start = 0, whole = 1){
//     if(n===0) return start
//     if(n===1) return whole
    
//     return fibonacciNum(n -1 , whole,  start + whole)
// }

// console.log(fibonacciNum(1))

// function factorialOfN(n){
//     if(n<=0){
//         return 1
//     }

//     return n * factorialOfN(n-1)
// }

// console.log(factorialOfN(3))

// function sumOfFirstN(n){
//     if(n<=0){
//         return 0
//     }
//     return n + sumOfFirstN(n -1)
// }

// console.log(sumOfFirstN(4))

// function recursionPrint1toN (n, start = 1){
//     if(start>n){
//         return 
//     }
//     console.log(start)
//     recursionPrint1toN(n, start +1)
// }

// recursionPrint1toN(4)

// function recursionPrint(n){
//     if(n<=0){
//         return "Successfully completed printing"
//     }
//     console.log("this is my name")
//     recursionPrint(n-1)
// }

// recursionPrint(2)