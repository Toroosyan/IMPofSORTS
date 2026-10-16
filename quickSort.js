const partition = (arr, low, high) => {
    const pivot = arr[low];

    let i = low + 1;
    let j = high;

    while (i <= j) {
        while (i <= high && arr[i] <= pivot) {
            i++;
        }

        while (j > low && arr[j] > pivot) {
            j--;
        }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];

    return j;
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        const p = partition(arr, low, high);

        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }

    return arr;
};

console.log(quickSort([8, 3, 5, 1, 9, 2, 7, 4]));//1, 2, 3, 4 ,5 ,7, 8, 9
/* Time Complexity  O(n log n)
Space Complexity O(1)
*/