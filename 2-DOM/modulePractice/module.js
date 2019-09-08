
document.getElementById('testParagraph').style.color = 'blue';
console.log(document.getElementById('testParagraph').style.color);

console.log(document.querySelectorAll("p.sampleClass"));

document.querySelectorAll("p.sampleClass")[0].innerText = "New Information is being placed here!";
document.querySelectorAll("p.sampleClass")[0].innerHTML = "<span>New info being placed by innerHTML</span>";

document.getElementById('clickButton').addEventListener('click', (details) => {
    details.target.style.backgroundColor = 'red';
});

document.getElementById('nameInput').addEventListener('keyup', (event) => { 
    if (event.target.value === '') {
        document.getElementsByTagName('p')[3].innerText = 'No name yet';
    }else{
        document.getElementsByTagName('p')[3].innerText = `Everyone, welcome ${event.target.value}.`;
    }
});