function largestSubarraySum(array){
    let i = 0;
    let j = array.length;
    let sum1;
    let sum2 = 0;
    let finalI = i;
    let finalJ = j;
    while (j > 0) {
        sum1 = 0
        while (i < j) {
            for (let k = i; k < j; k++) {
                sum1 += array[k];
            }
            if (sum1 >= sum2) {
                finalI = i;
                finalJ = j;
                sum2 = sum1;
            }
            sum1 = 0;
            i++;
        }
        i = 0;
        j--;
    }
    return sum2
   }

   let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
   console.log(largestSubarraySum(array))