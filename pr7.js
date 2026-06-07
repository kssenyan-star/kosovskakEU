const breakingRecords = (scores) => {
    let best = scores[0], worst = scores[0];
    let bestBreaks = 0, worstBreaks = 0;

    for (const s of scores.slice(1)) {
        if (s > best) best = ++bestBreaks && s;
        else if (s < worst) worst = ++worstBreaks && s;
    }

    return [bestBreaks, worstBreaks];
};


console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));