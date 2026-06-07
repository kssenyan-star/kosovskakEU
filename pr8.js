function migratoryBirds(arr) {
    const freq = new Map();

    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let maxCount = 0;
    let result = Infinity;

    for (let [key, value] of freq.entries()) {
        if (value > maxCount) {
            maxCount = value;
            result = key;
        } else if (value === maxCount) {
            result = Math.min(result, key);
        }
    }

    return result;
}


console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));