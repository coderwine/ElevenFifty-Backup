const instructors = [
    { name: 'Aaron', specialty: 'Entomology', medals: 7 },
    { name: 'Carolyn', specialty: 'Fencing', medals: 5 },
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 8 },
    { name: 'Paul', specialty: 'Tuvan throat singing', medals: 4 },
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 2 },
    { name: 'Tom', specialty: 'Chemistry', medals: 3 }   
]

//? Let's say that we want to iterate over this array and filter it based on the number of medals each instructor had. We only want to get instructors that have 5 or more medals.

let instructor_name = [];  //managing the new array

for (let i=0; i < instructors.length; i++) {  //figuring the length of the original array and passing through it with i++
    if(instructors[i].medals >= 5){  //setting a factor pointing at the value of "medals"
        instructor_name.push(instructors[i].name);  //moving those names that meet the requirments.
    }
}
console.log(instructor_name);

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

const isntructorNamesTwo = instructors.filter(i => i.medals >= 5);
console.log(isntructorNamesTwo);