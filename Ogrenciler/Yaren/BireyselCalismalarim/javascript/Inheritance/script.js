//ES5 VE ES6 FARKI

//Sub Classes


//ES5
function PersonES5(firstName,lastName) {
    this.firstName=firstName;
    this.lastName=lastName;
}

PersonES5.prototype.sayHi = function(){
    return 'Hello I am  ${this.firstName} ${this.lastName}'
   
}

function CustomerES5 (firstName,lastName,phone,username){
    PersonES5.call(this,firstName,lastName);
    this.phone=phone;
    this.username=username;
}

CustomerES5.prototype = Object.create
(PersonES5.prototype);  //**PersonES5'in protoypeındaki metotlar Customerda kullanılıyor.**

var customer= new CustomerES5('yaren' ,'yavuz','12345','yarenyavuz');

console.log(customer.sayHi());//**Artık CustomerES5'den türetilen nesne  PersonES5'in metotuna erişebiliyor.**

//ES6

class PersonES6 {
    constructor (firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    sayHi(){
        return 'Hello I am  ${this.firstName} ${this.lastName}'
    }
}

class CustomerES6 extends PersonES6{
    constuctor(firstName,lastName,phone,username){
        super(firstName,lastName)
        this.phone=phone;
        this.username=username;

    }
}

let customer1 = new CustomerES6('fatos','yavuz','1234565','fatosyavuz');
console.log(customer1.sayHi());