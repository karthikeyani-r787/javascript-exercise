// Task : Find Maximum
const marks = [78, 92, 65, 88, 95, 72];

const result = marks.reduce((max , i) => {
    if (max<i) {max=i;}
    return max;
},marks[0]);

console.log(result);