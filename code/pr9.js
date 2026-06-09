function sockMerchant(n, ar) {
    const colorCount = {};
    let pairs = 0;

    for (let sock of ar) {
        colorCount[sock] = (colorCount[sock] || 0) + 1;
    }

    for (let color in colorCount) {
        pairs += Math.floor(colorCount[color] / 2);
    }

    return pairs;
}


const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, ar));
