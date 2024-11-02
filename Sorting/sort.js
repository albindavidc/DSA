// Bubble sort - Insertion sort
// Selection sort - Quick sort - Merge sort

// Bubble sort - basic sorting - used mainly in interviews because of its poor algorithm comapred to other sorting algorithms.

// function bubbleSort(arr) {
//   let swapped;

//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr
// }

// let arr = [2, 5, 4, 6, 8, 3, 2];
// console.log(bubbleSort(arr));

// // Insertion sort
// function insertionSort(arr){
//     for(let i =0; i< arr.length; i++){
//         let numberToInsert = arr[i];
//         let j = i -1;
//         while(j >= 0 && arr[j] > numberToInsert){
//             arr[j+1] = arr[j];
//             j = j -1;
//         }
//         arr[j+1] = numberToInsert;
//     }
//     return arr
// }

// console.log(insertionSort([6,3,4,2,7,8,3,4]));

// //  Quick sort - easy and most used sorting algorithm
// function quickSort(arr){
//     if(arr.length <2) return arr;

//     let pivot = arr[arr.length -1]
//     let left = [];
//     let right = [];
//     for(let i =0; i < arr.length -1 ; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// console.log(quickSort([6,3,5,2,6,2,7,4]))

// //Merge Sort - It is done using tree recursion
// function mergeSort(arr){
//     if(arr.length < 2) return arr;

//     let midd = Math.floor(arr.length /2);
//     let leftSide = arr.slice(0, midd);
//     let rightSide = arr.slice(midd);

//     return merge(mergeSort(leftSide), mergeSort(rightSide));
// }

// function merge(left, right){
//     let sortedArray = [];

//     while(left.length && right.length){
//         if(left[0] <= right[0]){
//             sortedArray.push(left.shift());
//         }else{
//             sortedArray.push(right.shift())
//         }
//     }
//     return [...sortedArray, ...left, ...right]
// }
// console.log(mergeSort([2,6,3,7,3,2,1,4]))


// // Selection sort
// function selectionSort(arr) {
//     for(let i =0; i<arr.length -1; i++){

//         let minIndex = i;

//         for(let j = i+1; j< arr.length; j++){
//             if(arr[minIndex] > arr[j]){
//                 minIndex = j
//             }
//         }

//         if(minIndex !== i){
//             let temp = arr[i]
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([3, 2, 6, 3, 5, 7, 4, 6]));
