function getTextFile(){
    fetch("text.txt")
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
} 

getTextFile();


function getJsonFile(){
    fetch("users.json")
        .then((response)=> response.json())
        .then((data)=>console.log(data))
        .catch(()=> console.log(err));
}

getJsonFile();


function getApi(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> {
            response.json();
            console.log(response);
        })
        .then((data)=> console.log(data))
        .catch((err)=>console.log(err));
}

getApi();