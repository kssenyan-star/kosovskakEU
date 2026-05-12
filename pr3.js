function gradingStudents(grades) {
    return grades.map(g => {
        if (g < 38) return g;

        let next = Math.ceil(g / 5) * 5;

        return (next - g < 3) ? next : g;
    });
}

const grades = [73, 67, 38, 33];

const result = gradingStudents(grades);

console.log(result.join('\n'));