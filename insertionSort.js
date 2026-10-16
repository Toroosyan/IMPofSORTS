const insertionSort = (arr) =>{
    const n = arr.length;
    for(let i = 1; i < n; ++i){
        let j = i - 1;
        let key = arr[i];

        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;

        }
        arr[j+1] = key;
    }
    return arr;
}
const arr = [5, 3, 4, 1, 2];

console.log(insertionSort(arr));//[1, 2, 3, 4, 5]

/* time complexity          space comlexity O(1)
worst case    O(n^2)
average case  O(n^2)
best case     O(n)*/