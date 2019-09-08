function fetchAllFromAuthRoute() {
    const fetch_url = 'http://localhost:3000/authtest/getall'
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            'Authorization': accessToken
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
}

/***************************************
 * FETCH/POST to Auth/Create
*************************************/
function postToAuthRouteCreate() {
    const fetch_url = 'http://localhost:3000/authtest/create'
    const accessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').value;
    let authInputData = { authtestdata: { item: authTestDataInput}};

    const response = fetch(fetch_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    })
    .then(response => { return response.json();
    })
    .then(data => { console.log(data)})
}

/***************************************
 * GET ITEM BY USER
*************************************/
function getOneByUser() {
    let postIdNumber = document.getElementById("getNumber").value; //1

    const fetch_url = `http://localhost:3000/authtest/${postIdNumber}` //2
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function (response) {
            console.log(response); 
            var myItem = document.getElementById('getItemValue'); //3
            myItem.innerHTML = response.authtestdata; //4
        })
}

/***************************************
 * PUT to authtest/update/:id
*************************************/

function updateItem(){
    let postIdNumber = document.getElementById('updateNumber').value;
    let authTestDataInput = document.getElementById('updateValue').value;

    const fetch_url = `http://localhost:3000/authtest/update/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    let authInputData = { authtestdata: { item: authTestDataInput}};
    const response = fetch(fetch_url, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        let myItem = document.getElementById('newItemValue')
        myItem.innerHTML = data.authtestdata;
        fetchAllFromAuthRoute();
    })
}

function showCurrentData(e) { //1
    const fetch_url = `http://localhost:3000/authtest/${e.value}` //2
    const accessToken = localStorage.getItem('SessionToken')

    fetch(fetch_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            var myItem = document.getElementById('updateValue'); //3
            if (!response) return; //4
            else myItem.value = response.authtestdata; //5
        })
}

function deleteItem() {
    let postIdNumber = document.getElementById('deleteNumber').value;

    const fetch_url = `http://localhost:3000/authtest/delete/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
    .then(response => {
        console.log(response);
        fetchAllFromAuthRoute()
    })
}

function deleteItemById(paramNum) {
    const fetch_url = `http://localhost:3000/authtest/delete/${paramNum}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Authorization':accessToken
        }
    })
    .then(response => {
        console.log(response);
        fetchAllFromAuthRoute();
    })
}

function fetchFromOneDisplayData() {
    const url = 'http://localhost:3000/authtest/getall';
    const accessToken = localStorage.getItem('SessionToken')

    fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        })
    }).then(
        function (response) {
            return response.json()
        })
        .catch(
            function (error) {
                console.error('Error:', error)
            })
        .then(
            function (response) {
                let text = '';
                var myList = document.querySelector('ul#fourteen'); //1
                while (myList.firstChild) { //2
                    myList.removeChild(myList.firstChild)
                }

                console.log(response);
                for (r of response) { //3
                    var listItem = document.createElement('li'); //4
                    var textData = r.id + ' ' + r.authtestdata; //5
                    listItem.innerHTML = textData;
                    listItem.setAttribute('id', r.id); //6
                    myList.appendChild(listItem); //7
                    myList.addEventListener('click', removeItem);  //8
                }
            })
}

function removeItem(e) {
    console.log(e);
    let target = e.target;
    if (target.tagName !== 'LI') return;
    else target.parentNode.removeChild(target);

    let x = target.getAttribute('id')
    deleteItemById(x);
    // console.log('The id number for this item is ' + x)
}