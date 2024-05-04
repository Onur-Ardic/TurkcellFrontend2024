let name = document.querySelector("#name");
let surName = document.querySelector("#surname");
let age = document.querySelector("#age");
let city = document.querySelector("#city");

let cardContainer = document.querySelector("#cardContainer");
let formData = [];

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // sayfayı yenilememiş oluyor
    save();
    resetForm(); //göndere bastıktan sonra inputları boşaltıyor
});

const save = () => {
    let nameVal = name.value; //direkt böyle de kullanılıyormuş keyup ile de kullanılıyor
    let surNameVal = surName.value;
    let ageVal = age.value;
    let cityVal = city.value;

    formData.push({
        Ad: nameVal,
        Soyad: surNameVal,
        Yas: ageVal,
        Şehir: cityVal
    });

    renderCards(); // formu kaydettikten sonra fonksiyonu çağırıyorum kart oluşsun diye
};

const renderCards = () => {
    cardContainer.innerHTML = "";
    formData.forEach(data => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${data.Ad} ${data.Soyad}</h3>
            <p>Age: ${data.Yas}</p>
            <p>City: ${data.Şehir}</p>
        `;
        cardContainer.appendChild(card); // card içeriklerini alt öge olarak eklemek için kullanılıyor kartı oluşturup daha sonra içeriğini oluşturuyor appendChild
    });
};

const resetForm = () => {
    name.value = "";
    surName.value = "";
    age.value = "";
    city.value = "";
};
