function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(typeof data ==="string"){
                console.log("Sonuç olumlu");
                resolve("Data alındı.")
            }else{
                console.log("Sonuç olumsuz");
                reject("Data bulunamadı.")
            }
        },3000)
    })
}

getData(1)
    .then((response)=>console.log(response))
    .catch((error)=> console.log(error)
)
