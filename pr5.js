const kangarooRace = (x1, v1, x2, v2) => {

    const canMeet =
        v1 > v2 &&
        (x2 - x1) % (v1 - v2) === 0;

    return canMeet ? "YES" : "NO";
};

console.log(kangarooRace(0, 3, 4, 2));