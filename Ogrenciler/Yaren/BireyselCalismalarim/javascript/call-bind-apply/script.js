
// Bu metotlar bize function prototype'ı ile gelir

var welcome= function(){
    console.log('Welcome ' + this.name);

}
var yaren= {name : 'Yaren'};
var su= {name : 'Su'};

welcome.call (yaren);
welcome.call (su);

welcome.apply (yaren);
welcome.apply (su);
// Fonksiyon parametre almıyorsa apply ve call metodunun kullanımı aynıdır.

welcomeYaren = welcome.bind(yaren);  //fonksiyonu bir değişkene atıyoruz
welcomeYaren();


//Parametreli
var welcome= function(){
    console.log('Welcome ' + this.name +'.Are you interested in ' + a + ' and ' + b  );

}
//CALL ve APPLY FARKI
welcome.call (yaren ,'asp.net','react');



welcome.apply (yaren,['asp.net','react']);


welcomeYaren = welcome.bind(yaren);  //fonksiyonu bir değişkene atıyoruz
welcomeYaren('asp.net' , 'react');