function hi(arr) {
    let subarrays = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            let subarray = [];
            for (var k = i; k <= j; k++) {
                subarray.push(arr[k]);
            }
            subarrays.push(subarray);
        }
    }

    return subarrays;
}

console.log(hi([2, 3, 5, 1, 9]));
------------------------------------------------
  sub array sum
------------------------------------------------------------------------------------
  function hi(arr,T) {
    let len =0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            let sum = 0;
            for (var k = i; k <= j; k++) {
                sum=sum + arr[k];
            }
            // console.log(sum);
            if(sum === T) {
                len =Math.max(len, j - i + 1);

            }
        }
    }

    return len;
}

console.log(hi([2, 3, 5, 1, 9],15));
