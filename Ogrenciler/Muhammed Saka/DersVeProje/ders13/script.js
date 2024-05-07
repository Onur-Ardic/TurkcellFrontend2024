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
    
    showSavedData();

    name.value = '';
    surname.value = '';
    age.value = '';
    address.value = '';
}

function resetForm() {
    document.getElementById('myForm').reset();
    formData = [];
    document.getElementById('savedData').innerHTML = '';
}

function showSavedData() {

        const card = document.createElement('div');
        card.classList.add('card'); 

        card.innerHTML = `
            <h3><strong>Adı:</strong> ${newData.name}</h3>
            <h3><strong>Soyadı:</strong> ${newData.surname}</h3>
            <h3><strong>Yaşı:</strong> ${newData.age}</h3>
            <h3><strong>Adresi:</strong> ${newData.address}</h3>
        `;

        savedDataContainer.appendChild(card);
    }