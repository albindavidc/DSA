// Bubble sort - Insertion sort
// Selection sort - Quick sort - Merge sort

// Bubble sort - basic sorting - used mainly in interviews because of its poor algorithm comapred to other sorting algorithms.

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr
}

let arr = [2, 5, 4, 6, 8, 3, 2];
console.log(bubbleSort(arr));


// Insertion sort

function insertionSort(arr){
    for(let i =0; i< arr.length; i++){
        let numberToInsert = arr[i];
        let j = i -1;
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j];
            j = j -1;
        }
        arr[j+1] = numberToInsert;
    }
    return arr
}

console.log(insertionSort([6,3,4,2,7,8,3,4]));