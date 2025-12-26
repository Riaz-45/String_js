const numbers = [1, 2, 3, 4, 5];
const tournament_runs = [[], [], []];
const exam_marks = [
    [98, 87, 45, 12, 63],
    [54, 89, 74, 23, 11],
    [45, 87, 12, 56, 45],
    [78, 65, 32, 87, 54]
]

console.log(exam_marks);

console.log(exam_marks[0][0]); //1st array er 1st upadan er output--->98;
const first_class_marks = exam_marks[0];
console.log(first_class_marks[0]); //etar same kaj korbe new variable use korar maddhome


//array value change
exam_marks[0][1] = 55;
exam_marks[1].pop();
exam_marks[1].push(22);
console.log(exam_marks);


for(const marks of exam_marks){
    console.log(marks);
}