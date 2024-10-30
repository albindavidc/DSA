
// function binarySearch(arr, value){
//     let left = 0;
//     let right = arr.length -1

//     while(left <= right){

//         let midd = Math.floor((left + right)/2)
    
//         if(arr[midd] === value){
//             return midd
//         }
    
//         if(value > arr[midd]){
//             left = midd + 1;
//         }else{
//             right = midd - 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([2,3,4,5,6,7,8,9,10], 8))

// function mostOccurance(arr){
//     let count = {};

//     for(item of arr){
//         count[item] = (count[item] || 0) + 1
//     }

//     let maxKey = null;
//     let maxValue = -Infinity

//     for(let [key, value] of Object.entries(count)){
//         if(value > maxValue){
//             maxValue = value;
//             maxKey = key;
//         }
//     }

//     return maxKey
// }


// console.log(mostOccurance([2,4,4,5,3,5,5,2,3,6,0,8]))


// function firstSingleOccurance(arr){
//     let count = {};

//     for(item of arr){
//         count[item] = (count[item] || 0) + 1
//     }

//     for([item] of arr){
//         if(count[item] ===1){
//             return item;
//         }
//     }

//     return null
// }


// console.log(firstSingleOccurance([2,4,4,5,3,5,5,2,3,6,0,8]))



// function secondLargest(arr){

//     if(arr.length < 2) return null;

//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for(let i =0; i< arr.length; i++){
//         if(firstLargest < arr[i]){
//             secondLargest = firstLargest;
//             firstLargest = arr[i]
//         }else if(firstLargest < arr[i] && firstLargest !== arr[i]){
//             secondLargest = arr[i]
//         }
//     }

//     return secondLargest
// }

// console.log(secondLargest([1,2,3,4,5,8,5,7,9,4]))