const htmlList = document.getElementById('list');

class UI {
    static createCard(item) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = item.name;

        const cardText1 = document.createElement('p');
        cardText1.classList.add('card-text');
        cardText1.textContent = item.department;

        const cardText2 = document.createElement('p');
        cardText2.classList.add('card-text');
        cardText2.textContent = item.salary;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText1);
        cardBody.appendChild(cardText2);
        card.appendChild(cardBody);
        htmlList.appendChild(card);
    }
}