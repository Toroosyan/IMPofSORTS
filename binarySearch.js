const binarySearch = (arr, target) => {
    let left = 0;
    let right  = arr.length - 1;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
    left = mid + 1
}else{
    right = mid - 1;
}
}
return -1;

    };

    console.log(binarySearch([13, 16, 19, 22, 29, 90], 90)); //5
    //console.log(binarySearch([13, 16, 19, 22, 29, 90], 19)); //2

// best case O(1)
// average case O(log n)
// worst case O(log n) 
