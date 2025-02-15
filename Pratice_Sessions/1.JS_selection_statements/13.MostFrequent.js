function mostFrequent(arr){
    let freq = {};
    let maxNum = arr[0] , maxCount = 0;
    for (let num of arr){
        freq[num] = (freq[num] || 0) + 1 ;
        if(freq[num] > maxCount){
            maxCount = freq[num];
            maxNum = num;
        }
    }
    return maxNum;
}
console.log(mostFrequent([2, 3, 2, 5, 3, 2, 4]));