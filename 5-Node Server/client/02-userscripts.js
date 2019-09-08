/********************
 * POST - /createuser
*********************/
function userSignUp(){
    let userName = document.getElementById('userSignUp').value;  //*1: Grabbing the value of user/password data from "createuser input" within the index.html file. 
    let userPass = document.getElementById('passSignUp').value;
    console.log(userName, userPass);

    let newUserData = { user: {username: userName, password: userPass}};  //*2: variable from DOM gets passed into the values of 'username' and 'password' properties. 
    fetch('http://localhost:3000/api/user/createuser', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newUserData) //*3: request object in 'fetch()' call, pass in 'newUserData' variable to be sent off in the body of our request to the server. 
    })
    .then(response => response.json())
    .then(function(response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;  //*4: get 'sessionToken' from the response and store it ina token variable. 
        localStorage.setItem('SessionToken', token); //*5: in 'localStorage', we call 'setItem' and store the token in 'localStorage'.  This will store in our local window. 
    });
}

function userSignIn(){
    let userName = document.getElementById('userSignIn').value;
    let userPass = document.getElementById('passSignIn').value;
    console.log(userName, userPass);

    let userData = {user : { username: userName, password: userPass}};
    fetch('http://localhost:3000/api/user/signin', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(function(response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
    });
}

/****************************
 * HELPER FUNCTION FOR TOKEN
*****************************/
function getSessionToken(){
    let data = localStorage.getItem('SessionToken');
    console.log(data);
    return data;
}
