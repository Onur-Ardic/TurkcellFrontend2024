class UI {
    static addStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
          .custom-card {
            margin: 10px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            background-color: #fff;
            height: 500px;
            display: flex;
            flex-direction: column;
          }
    
          .custom-card-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #333;
            flex-shrink: 0;
          }
    
          .custom-card-text {
            font-size: 1rem;
            color: #666;
            overflow-y: auto;
            flex-grow: 1;
          }
    
          .card-img-top {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 10px 10px 0 0;
            margin-bottom: 15px;
            flex-shrink: 0;
          }
        `;
        document.head.appendChild(style);
    }

    static createCard(titleText, textText, imageUrl) {
        const col = document.createElement("div");
        col.classList.add("col-md-6");

        const card = document.createElement("div");
        card.classList.add("card", "custom-card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = imageUrl;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title", "custom-card-title");
        title.textContent = titleText;

        const text = document.createElement("p");
        text.classList.add("card-text", "custom-card-text");
        text.textContent = textText;

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);

        return col;
    }
}

UI.addStyles();
