
// function sumOfN(n){
//     if(n <=0){
//         return 0
//     }

//     return n + sumOfN(n-1)
// }

// console.log("this is the sum of n", sumOfN(10))


// function printFactorial(n){
//     if(n <=1) return 1;
//     return n* printFactorial(n-1)
// }

// console.log("This is factorial", printFactorial(5))


// function recursiveFive(repeat = 5){
//     if(repeat <= 0){
//         return "Printing Completed";
//     }

//     console.log("print this all along")
//     return recursiveFive(repeat-1)
// }

// console.log(recursiveFive())


// function printNTimes(n){
//     if(n <=0){
//         return "Printing completed";
//     }

//     console.log("This is my name: Albin");

//     return printNTimes(n -1);
// }

// console.log(printNTimes(5))






// function unionMerge(arr1, arr2){
//     let result = [];
//     for(let i =0; i< arr1.length ; i++){
//         result.push(arr1[i])
//     }

//     for(let i=0; i< arr2.length; i++){
//         if(!result.includes(arr2[i])){
//             result.push(arr2[i])
//         }
//     }
//     return result.sort((a,b) => a-b);
// }

// console.log("This is the union array", unionMerge([1,2,4,5,6], [2,3,4,5,6,6,6,7]))




// function moveZeros(arr){
//     let result = [];
//     for(let i =0; i< arr.length -1; i++){
//         if(arr[i] !== 0){
//             result.push(arr[i])
//         }
//     }
//     while(result.length !== arr.length){
//         result.push(0)
//     }
//     return result
// }

// console.log("This is the result", moveZeros([1,2,0,3,4,6,0, 4,2, 0, 0, 2,0]))



// function leftRotationByN(arr, n) {
//   if(n > arr.length) return arr;
//   while (n > 0) {
//     let first = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = first
//     n--
//   }
//   return arr;
// }

// console.log("this is the left rotation of array by n places", leftRotationByN([2,3,4,6,6,7,5,7,8], 3))

// function rightRotate(arr){
//     if(arr.length === 0) return arr;
//     let last = arr[arr.length -1]
//     for(let i = arr.length - 1; i> 0 ; i--){
//         arr[i] = arr[i - 1];
//     }
//     arr[0] = last
//     return arr;
// }

// console.log("Shifted 1 place to the left", rightRotate([2,3,4,5,6,7,8]))

// function removeDuplicates(arr){
//     let result = [];
//     for(let i =0; i< arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// console.log("Remove duplicates from an array", removeDuplicates([2,44,44,33,5,2,34,1,3,1,3,3,2]))

// function checkSorted(arr) {
//   for (let i = 0; i < arr.length -1 ; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log("This is to check sorted Array", checkSorted([2, 3, 8, 5, 6, 7]));

// function largestEl(arr){
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for(let i =0; i<arr.length; i++){
//         if(arr[i] > largest){
//             secondLargest = largest
//             largest= arr[i]
//         } else if(arr[i] > secondLargest && largest !== secondLargest){
//             secondLargest=arr[i]
//         }
//     }
//     return [largest, secondLargest]
// }

// console.log("this is the largest and second largest numbers", largestEl([2,3,62,6,2,56,2,67,2,2,6,2,234,4,3]))
// console.log("this is the largest and second largest numbers", largestEl([-2,-3,-62,-6]))

// function middleOfArray(arr) {
//   if (arr.length % 2 !== 0) {
//     return arr[Math.floor(arr.length / 2)];
//   } else {
//     return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
//   }
// }

// console.log(middleOfArray([2, 3, 56, 2, 4, 288, 3, 623, 234, 4, 2, 3, 45]));

// function reverseArray (arr){
//     let n = arr.length;
//     for(let i =0; i< Math.floor(n/2);i++){
//         let temp = arr[i];
//         arr[i] = arr[n-i-1]
//         arr[n-i-1] = temp
//     }
//     return arr;
// }

// let arr = [2,3,4,5,2,7,2,5,8,10]
// let reversed = reverseArray(arr)
// console.log("This is the reversed array", reversed)

// // Linear complexity O(n)
