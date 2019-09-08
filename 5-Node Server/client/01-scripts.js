function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(function (response) {
        console.log('Fetch response:', response)
        return response.text();
    })
    .then(function (text) {
        console.log(text);
    });
}

/*************************
 *  2 POST long hand: /one
 *************************/

function postToOne(){
    let url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',  // fetching the URL - it will seek a POST within the route.
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){  //pass the response into a Promise that returns as plain text.
            return response.text()
    }).catch(
        function(error){  //error handling.
            console.error('Error:', error)
    }).then(
        function(response){  //plain text response to the console.
        console.log('Success:',response);
    })
}

  /***************************************
 * 3 POST /one : Arrow Function
*************************************/

function postToOneArrow() {
    let url = 'http://localhost:3000/test/one';

    fetch(url, {  //reaching out ot an endpoint with POST request.
        method: 'POST',
        headers: new Headers({
            'Content-Type':'application/json'
        })
    }).then(res => res.text())  //asking for a plain text response.
    .catch(error => console.error('Error:', error))  //handling the error if there is one.
    .then(response => console.log('Success:', response)); //print the data to console in the end.
}

function postData() {

    let content = { testdata: {item: 'This was saved!'}};  //object being created.

    let testDataAfterFetch = document.getElementById('test-data'); //DOM targeting
    let createdAtAfterFetch = document.getElementById('created-at'); //DOM targeting

    fetch('http://localhost:3000/test/seven', {  //pass in pre0defined object.
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    })
    .then(response => response.json())
    .then(function (text){
        console.log(text);

        testDataAfterFetch.innerHTML = text.testdata.testdata;
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;
    });
}

/***************************************
 * 4 GET FROM /ONE - Display Data
*************************************/
function fetchFromOneDisplayData(){
    //1  setup URL and targeted thee ID within the DOM
    let url = 'http://localhost:3000/test/one';
    let dataView = document.getElementById('display-one');   

    //2  created a fetch() w/ Headers and a GET method.  
    fetch(url, {
      method: 'GET', 
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
        function(response){
            return response.json()
        })
    .catch(
        function(error){
            console.error('Error:', error)
        })
    .then(
        function(results){
            let myList = document.querySelector('#getjson'); //3  targeting the getjson ID.  

            for (r of results){  //4  setup a "for of" loop
                console.log('Response:', r.testdata); //5  post statement
                var listItem = document.createElement('li');  //6 create the element within the DOM.
                listItem.innerHTML = r.testdata; //7  input the text within the created element.
                myList.appendChild(listItem); //8  add the created element to the selected ID (#getjson)
            }
        })
}