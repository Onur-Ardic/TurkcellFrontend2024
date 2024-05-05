let formData = [];

function saveData() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;

    const newData = {
        name,
        surname,
        age,
        address
    };

    formData.push(newData);

    // Kaydedilen verileri göster
    showSavedData();

    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('address').value = '';
}

function resetForm() {
    document.getElementById('myForm').reset();
    formData = [];
    document.getElementById('savedData').innerHTML = ''; // Kaydedilen verileri temizle
}

function showSavedData() {
    const savedDataContainer = document.getElementById('savedData');
    savedDataContainer.innerHTML = '';

    formData.forEach((data, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h2>Kaydedilen Veri ${index + 1}</h2>
            <p><strong>Adı:</strong> ${data.name}</p>
            <p><strong>Soyadı:</strong> ${data.surname}</p>
            <p><strong>Yaşı:</strong> ${data.age}</p>
            <p><strong>Adresi:</strong> ${data.address}</p>
        `;

        savedDataContainer.appendChild(card);
    });
}