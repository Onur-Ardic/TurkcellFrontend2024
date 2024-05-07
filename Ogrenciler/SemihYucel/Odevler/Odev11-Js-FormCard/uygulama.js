let name = document.querySelector("#name");
let surName = document.querySelector("#surname");
let title = document.querySelector("#title");
let telephone = document.querySelector("#telephone");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let backgroundColor = document.querySelector("#background-color");
let textColor = document.querySelector("#text-color");
let logo = document.querySelector("#logo");

let cardContainer = document.querySelector("#cardContainer");
let formData = [];

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // sayfayı yenilememiş oluyor
    save();
    resetForm(); //göndere bastıktan sonra inputları boşaltıyor
});

const save = () => {
    let nameVal = name.value;
    let surNameVal = surName.value;
    let titleVal = title.value;
    let telephoneVal = telephone.value;
    let emailVal = email.value;
    let cityVal = city.value;
    let backgroundColorVal = backgroundColor.value;
    let textColorVal = textColor.value;
    let logoVal = logo.value.split('\\').pop(); //dosya adını alır tam yolunu almadan 

    formData.push({
        Name: nameVal,
        Surname: surNameVal,
        Title: titleVal,
        Telephone: telephoneVal,
        Email: emailVal,
        City: cityVal,
        BgColor: backgroundColorVal,
        TextColor: textColorVal,
        Logo: logoVal
    });

    renderCards(); // formu kaydettikten sonra fonksiyonu çağırıyorum kart oluşsun diye
};

const renderCards = () => {
    document.getElementById("cardHeader").textContent = "Your Design is here!";
    cardContainer.innerHTML = "";
    formData.forEach(data => {
        let card = document.createElement("div");
        card.classList.add("col-6");
        card.innerHTML = `
        <div class="p-2" style="color: ${data.TextColor}">
          <div class="p-2">
            <div class="row rounded-4" style="background-color: ${data.BgColor}">
              <div class="col-6 pt-3">
                <h5>${data.Name}  ${data.Surname}</h5>
                <h6>${data.Title}</h6>
                <hr />
                <div class="my-4">
                  <div class="row align-items-center">
                    <div class="col-2 text-end">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="col-10"><h6 class="m-0">${data.Telephone}</h6></div>
                  </div>
                  <div class="row mt-2 align-items-center">
                    <div class="col-2 text-end">
                      <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="col-10"><h6 class="m-0">${data.Email}</h6></div>
                  </div>
                  <div class="row mt-2 align-items-center">
                    <div class="col-2 text-end">
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div class="col-10"><h6 class="m-0">${data.City}</h6></div>
                  </div>
                </div>
              </div>
              <div class="col-6 d-flex align-items-center">
                <figure class="">
                  <img
                    src="./image/logo.png"
                    alt=""
                    class="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        `;
        cardContainer.appendChild(card); // card içeriklerini alt öge olarak eklemek için kullanılıyor kartı oluşturup daha sonra içeriğini oluşturuyor appendChild
    });
};

const resetForm = () => {
    name.value = "";
    surName.value = "";
    title.value = "";
    telephone.value = "";
    email.value = "";
    city.value = "";
};