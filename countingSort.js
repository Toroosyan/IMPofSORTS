const countingSort = arr => {
    const n = arr.length;
    const max = Math.max(...arr);
    const countArr = new Array(max + 1).fill(0);
    for(let i = 0; i < n ; ++i){
       const num = arr[i];
       countArr[num]++;

    }
    const res = [];
    for( let i = 0; i < countArr.length; ++i){
        while(countArr[i] > 0){
            res.push(i);
            countArr[i]--;
        }
    }
    return res;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));

/* time complexity O(n * k)
space complexity   O(n+k)
*/