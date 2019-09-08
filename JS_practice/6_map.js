const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics' },
    { name: 'Kenn', specialty: 'Norse Mythology' },
    { name: 'Paul', specialty: 'Tuvan throat singing' },
    { name: 'Aaron', specialty: 'Entomology' },
    { name: 'Carolyn', specialty: 'Kung Fu' }
]

let instructor_names = [];

for (let i=0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name);
}
console.log('Using a forLoop')
console.log(instructor_names);

console.log('Using a map function')
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

console.log('Different Params');
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

console.log('fix')
const instructorInfo = `${instructors.map(instructor => instructor.name && instructor.specialty)}`;
// const instructorInfo = instructors.map(i => i.specialty);
console.log(instructorInfo);
// console.log(`Instructor Name: ${instructorNames} specializing in ${instructorInfo}`);

var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];
console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})

console.log(reformattedArray);