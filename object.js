// how to declare an object in js

// primitive objects----> basic or primary data type (ekhane mix variable thakte pare na)
const age = 20;
const school = 'RCPSC';
const country = 'Bangladesh';

let isDeveloper; //undefined variable declaration 

// non primitive objects---> orthat ekhane mix variable thakte pare
// non primitive objects gulo akadhik characteristics or property dharon korte pare
const bottle = {
    brand: 'fresh',
    price: 20,
    color: 'white',
    isClean: true, //last property te (,) dileo hoy ba na dileo hoy
}
console.log(bottle);

const subject = {
    name: 'chemistry',
    teacher: 'selina mam',
    examDate: '30 june',
    chapters: ['first', 'second', 'third'],
    exams: {
        name: 'Final Exam',
        marks: 100,
        time: '3 Hours'
    }
}
console.log(subject);
console.log(subject.name);
console.log(subject.exams);

const keys = Object.keys(subject); //Object er <property> option gulo show korar jonno use kora hoy
console.log(keys);

const values = Object.values(subject); //Object er property option er <value> gulo show korar jonno use hoy
console.log(values);


const college ={
    name: 'RCPSC',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibosh', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(college.unique);
console.log(college.unique.color);
console.log(college.unique.result.merit);

// change value from object property

college.unique.result.merit = 'top top most'; //kono property er value change korar jonno
console.log(college.unique.result.merit);

college.events[1] = '16 December';
console.log(college.events);

// Delete a property from an object

delete college.class;
console.log(college);


// using "for in" loop to see the object property
const mobile = {
    brand: 'samsung',
    color: 'black',
    isNew: true,
    camera: {
        frontCam: '50mp',
        backCam: '12mp',
        ultraDep: '8mp'
    }

}

for(const property in mobile){
    console.log(property, ':', mobile[property]);
    // console.log(mobile[property]);
}


// #task-1
const colors = {
    red: "#ff0000",
    "golden rod": '#daa520',
    physics: {
        subject: "HSC Physics",
        author: 'Shahjahan Tapan',
        marks: 30
    }
}
console.log(colors["golden rod"]);
console.log(colors.physics.marks);


// #task-2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    'passenger capacity': 5
}
console.log(car);


// #task-3
let myObject = {
    name: 'rakibul hasan',
    age: 25,
    city: 'Dhaka',
    isStudent: true
}

console.log(keys.myObject);
