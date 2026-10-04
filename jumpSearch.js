const jumpSearch = (arr, target) => {
    const n = arr.length;

    let prev = 0;
    let step = Math.floor(Math.sqrt(n));


    while(arr[Math.min(step, n) - 1] < target){
        prev = step;
        step += Math.floor(Math.sqrt(n));

        if(prev >= n){
            return -1;
        
        }
    }
    while(arr[prev] < target){
        prev++;

        if(prev === Math.min(step, n)){
            return -1;
        }
    }
    if(arr[prev] === target){
    return prev;
    }
    return -1;
};


const arr = [2, 3, 8 ,9, 13, 20, 21, 25 , 29, 31, 38, 40, 45, 46];

    console.log(jumpSearch(arr, 40)); //11
//best case O(1)
//average case O(√n)
//worst case O(√n)
