
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }

    return arr;
};

console.log(bubbleSort([5, 2, 8, 1, 3]));
// [1, 2, 3, 5, 8]

//best case	O(n)
//average case O(n²)
//worst case O(n²)