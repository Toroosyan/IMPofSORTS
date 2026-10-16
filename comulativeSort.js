const comulativeSort = (arr) =>{
if(arr.length === 0) return [];

    const n = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const range = max - min + 1;
    const countArr = new Array(range).fill(0);
    for(let i = 0; i < n; ++i){
        const val = arr[i];
        countArr[val - min]++;
    }
        for(let i = 1; i < countArr.length; ++i){
            countArr[i] += countArr[i - 1];
        }
        const result = new Array(n).fill(0);
        
        for(let i = arr.length - 1; i >= 0; --i){
            const num = arr[i];
            const idx = countArr[num - min] - 1;
            result[idx] = num;
            countArr[num - min]--;
        }
        return result;
    };

    console.log(comulativeSort([4, 2, 8, 3, 2, 1])); //[ 1, 2, 2, 3, 4, 8 ]

    /*time complexity O(n + k)
    space complexity O(n + k)
    */
