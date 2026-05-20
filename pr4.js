const checkFruits = (start, end, tree, fruits) => {
    return fruits.filter(fruit => {
        const position = tree + fruit;
        return position >= start && position <= end;
    }).length;
};

const s = 7;
const t = 11;

const a = 5;
const b = 15;

const apples = [-2, 2, 1];
const oranges = [5, -6];

const applesInside = checkFruits(s, t, a, apples);
const orangesInside = checkFruits(s, t, b, oranges);

console.log(applesInside);
console.log(orangesInside);