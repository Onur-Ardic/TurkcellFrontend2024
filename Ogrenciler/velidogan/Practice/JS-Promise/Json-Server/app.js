class Request {
    async get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data; 
    }
    async del(url){
        const response = await fetch(url);
        const data = await response.json();
        return data; 
    }
    
}

const req = new Request();

// req.get("db.json")
//     .then(response => response.users)
//     .then(data => {console.log(data);displayUsers(data)});

// const displayUsers = (data) => {
//     let tag = ``;
//     for (let i of data){
//         tag += `
//             <div class="col-4">
//                 <div class="card">
//                     <div class="card-body">
//                         <h2 class="name">${i.name}</h2>
//                         <h4 class="department">${i.department}</h2>
//                         <h4 class="salary">${i.salary}</h2>
//                     </div>
//                 </div>
//             </div>
//         `
//     }
//     document.querySelector(".row").innerHTML = tag;
// }

req.del("db.json/users/0")
    .then(response => {
        console.log(response)
    })
