document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun sayfa yenilenmesini engelle

    // Formdaki değerleri al
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var city = document.getElementById('city').value;

    // Kullanıcı bilgilerini bir nesneye kaydet
    var userInfo = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        city: city
    };

    // Konsola kullanıcı bilgilerini yazdır
    console.log('Kullanıcı Bilgileri:', userInfo);

    // İsteğe bağlı olarak başka bir işlem yapabilirsiniz, örneğin veriyi bir sunucuya gönderme
});