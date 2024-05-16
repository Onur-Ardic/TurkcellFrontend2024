class CardManager {
  constructor(apiUrl, containerId) {
      this.apiUrl = apiUrl;
      this.container = document.getElementById(containerId);
  }

  getAlldata() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", this.apiUrl, true);
      xhr.onload = () => {
          if (xhr.status === 200) {
              const data = JSON.parse(xhr.responseText);
              const limitedData = data.slice(0, 20);
              this.renderCards(limitedData);
          } else {
              console.error("Bir hata oluştu, veriler alınamadı.");
          }
      };
      xhr.send();
  }

  renderCards(data) {
      data.forEach(user => {
          const card = this.createCard(user);
          this.container.appendChild(card);
      });
  }

  createCard(user) {
      const card = document.createElement('div');
      card.className = 'card';
      
      const randomImage = `https://picsum.photos/id/${Math.round((Math.random() * 10)) + 10}/300/185`;
      const limitedTitle = user.body.length > 50 ? user.body.substring(0, 50) + '...' : user.body;

      const img = document.createElement('img');
      img.src = randomImage;
      img.className = 'card-img-top';
      img.alt = 'ÖrnekResim';
      card.appendChild(img);

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      card.appendChild(cardBody);

      const title = document.createElement('h5');
      title.className = 'card-title';
      title.textContent = user.title;
      cardBody.appendChild(title);

      const text = document.createElement('p');
      text.className = 'card-text';
      text.textContent = limitedTitle;
      cardBody.appendChild(text);

      const button = document.createElement('button');
      button.className = 'btn btn-primary';
      button.id = 'oku';
      button.textContent = 'Devamını Oku';
      button.onclick = () => {
          this.openBlog(user.id);
      };
      cardBody.appendChild(button);

      return card;
  }

  openBlog(id) {
      window.open(`blog.html?id=${id}`, "_blank");
  }
}

window.onload = function() {
  const cardManager = new CardManager("https://jsonplaceholder.typicode.com/posts", "cards");
  cardManager.getAlldata();
};
