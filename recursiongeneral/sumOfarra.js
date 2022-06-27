function sum(array, n) {
    n ||= 0;
    if (n === array.length) {
        return 0;
    } else {
        return array[n] + sum(array, n + 1);
    }
}
