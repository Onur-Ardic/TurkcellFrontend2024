class UI {
    static createCard = (post) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';

        const img = document.createElement('img');
        img.src = `https://picsum.photos/id/${post.id}/200/200`;
        img.classList.add('card-img-top');
        img.alt = 'cardImage';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = post.title;

        const text = document.createElement('p');
        text.classList.add('card-text');
        text.textContent = post.body;

        cardBody.appendChild(title);
        cardBody.appendChild(text);

        card.appendChild(img);
        card.appendChild(cardBody);

        return card;
    }

    static renderPosts = (posts) => {
        const container = document.getElementById('cards');
        for (const post of posts) {
            const card = this.createCard(post);
            container.appendChild(card);
        }
    }

    static loadContent = () => {
        API.getPosts((posts) => {
            this.renderPosts(posts);
        });
    };
}