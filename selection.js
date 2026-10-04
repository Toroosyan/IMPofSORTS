const selection = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
};

console.log(selection([5, 2, 8, 1, 3])); // [1, 2, 3, 5, 8]
//best case O(n²)
//average case O(n²)
//worst case O(n²)
