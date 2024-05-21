// const user = {
//     name: "Onur",
//     sayHello : function(){
//         console.log(this)
//         const a = () => {
//             console.log(this)
//         }
//         a()
//     }

// }

// user.sayHello()

// const arr = [1,2,3,this]

// console.log(arr)

// const arr = [1,2,3,function(){
//     return this
// }]

// console.log(arr[3]())
// arr[3]()

class user {
    constructor (name){
        this.name = name
        // this.sayHello = this.sayHello.bind(this)
        // this.sayHello = this.sayHello
    }
    sayHello(){
        console.log(this)
    }
    deneme(){
        setTimeout(this.sayHello, 1000)
    }
}

const user1 = new user("Veli")
user1.sayHello()
user1.deneme()
// console.log(user1.sayHello())