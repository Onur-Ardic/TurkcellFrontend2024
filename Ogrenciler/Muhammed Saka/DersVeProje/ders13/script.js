const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');
const address = document.getElementById('address');
const savedDataContainer = document.getElementById('savedData');
const newData = { 
    name,
    surname,
    age,
    address
}
function saveData() { 
    
    newData.name = name.value;
    newData.surname = surname.value;
    newData.age = age.value;    
    newData.address = address.value;  
    


    // Kaydedilen verileri göster
    showSavedData();

    name.value = '';
    surname.value = '';
    age.value = '';
    address.value = '';
}

function resetForm() {
    document.getElementById('myForm').reset();
    formData = [];
    document.getElementById('savedData').innerHTML = ''; // Kaydedilen verileri temizle
}

function showSavedData() {
    savedDataContainer.innerHTML = '';

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <p><strong>Adı:</strong> ${newData.name}</p>
            <p><strong>Soyadı:</strong> ${newData.surname}</p>
            <p><strong>Yaşı:</strong> ${newData.age}</p>
            <p><strong>Adresi:</strong> ${newData.address}</p>
        `;

        savedDataContainer.appendChild(card);
    }