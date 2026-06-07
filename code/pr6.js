const findTotalNumbers = (a, b) => {
    let count = 0;

    const limit = Math.min(...b);

    for (let x = 1; x <= limit; x++) {

        const validA = a.every(v => x % v === 0);
        const validB = b.every(v => v % x === 0);

        if (validA && validB) {
            count++;
        }
    }

    return count;
};


console.log(findTotalNumbers([2, 4], [16, 32, 96]));
