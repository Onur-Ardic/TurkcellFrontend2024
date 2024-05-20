// Endpoints:
// http://localhost:3000/users
// http://localhost:3000/comments
// http://localhost:3000/profile

class Book {
    constructor(id, title, author, price, category, publicationYear, upDate, updateUser, addDate,img) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.price = price;
      this.category = category;
      this.publicationYear = publicationYear;
      this.upDate = upDate;
      this.updateUser = updateUser;
      this.addDate = addDate;
      this.img = img;
    }
}

  class Request {
    static get(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((err) => reject(err, "Veri alınamadı."));
      });
    }
    static post(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json;",
          },
        })
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((err) => reject(err, "Hata Alındı."));
      });
    }
    static put(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json;",
          },
        })
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((err) => reject(err, "Hata Alındı."));
      });
    }
    static delete(url) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => resolve("Veri Silindi"))
          .catch((err) => reject(err, "Hata Alındı."));
      });
    }
  }

function render(data) {
    const bookList = document.getElementById("book-list");
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }
    data.forEach(bookData => {
        const book = new Book(
        bookData.id,
        bookData.title,
        bookData.author,
        bookData.price,
        bookData.category,
        bookData.publicationYear, 
        bookData.upDate,
        bookData.updateUser,
        bookData.addDate,
        bookData.img
        );
                const bookCard = document.createElement("div");
                bookCard.classList.add("col", "mb-5");

                const card = document.createElement("div");
                card.classList.add("card", "h-100");

                const img = document.createElement("img");
                img.classList.add("card-img-top");
                img.src = book.img;
                img.alt = book.title;
                card.appendChild(img);

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body", "p-4");

                const textCenter = document.createElement("div");
                textCenter.classList.add("text-center");

                const title = document.createElement("h4");
                title.classList.add("fw-bolder");
                title.textContent = book.title;
                textCenter.appendChild(title);

                const author = document.createElement("h4");
                author.textContent = book.author;
                textCenter.appendChild(author);

                const category = document.createElement("h5");
                category.textContent = book.category +"/"+ book.publicationYear;
                textCenter.appendChild(category);

                const price = document.createElement("p");
                price.textContent = `${book.price} ₺`;
                textCenter.appendChild(price);

                cardBody.appendChild(textCenter);
                card.appendChild(cardBody);

                const cardFooter = document.createElement("div");
                cardFooter.classList.add("card-footer", "p-4", "pt-0", "border-top-0", "bg-transparent", "d-flex", "justify-content-between");

                const updateBtn = document.createElement("a");
                updateBtn.classList.add("btn", "btn-outline-dark", "mt-auto");
                updateBtn.href = "#";
                updateBtn.textContent = "Güncelle";
                cardFooter.appendChild(updateBtn);

                const deleteBtn = document.createElement("a");
                deleteBtn.classList.add("btn", "btn-outline-dark", "mt-auto");
                deleteBtn.href = "#";
                deleteBtn.textContent = "Sil";
                cardFooter.appendChild(deleteBtn);

                card.appendChild(cardFooter);
                bookCard.appendChild(card);

                bookList.appendChild(bookCard);
            });
}

document.querySelectorAll('#sortingDropdown .dropdown-item').forEach(item => {
    item.addEventListener('click', async event => {
        const selectedValue = event.target.getAttribute('data-value');  
        render(await sort(selectedValue));
    });
});

async function sort(select, unrafinedData) {
    try {
        let data;
        
        if (unrafinedData) {
            data = unrafinedData;
        } else {
            const response = await fetch("http://localhost:3000/books");
            data = await response.json();
        }
        const navbarTitle=document.getElementById("navbarDropdown");
        switch (select) {
            case "Önerilen":
                navbarTitle.textContent="Önerilen";
                return data;
            case "Fiyat Artan":
                navbarTitle.textContent="Fiyat Artan";
                return data.sort((a, b) => a.price - b.price);
            case "Fiyat Azalan":
                navbarTitle.textContent="Fiyat Azalan";
                return data.sort((a, b) => b.price - a.price);
            case "A-Z":
                navbarTitle.textContent="A-Z";
                return data.sort((a, b) => a.title.localeCompare(b.title));
            case "Z-A":
                navbarTitle.textContent="Z-A";
                return data.sort((a, b) => a.title.localeCompare(b.title)).reverse();
            case "Tarih Artan":
                navbarTitle.textContent="Tarih Artan";
                return data.sort((a, b) => a.publicationYear - b.publicationYear).reverse();
                case "Tarih Azalan":
                    navbarTitle.textContent="Tarih Azalan";
                    return data.sort((a, b) => a.publicationYear - b.publicationYear);
            default:
                return data;
        }
    } catch (err) {
        alert("Dosya Okuma hatası");
    }
}

function filter(filter){

}



let originalData = [];

// Verileri alma işlemi
Request.get("http://localhost:3000/books")
  .then((data) => {
      originalData = data; // Verileri originalData değişkenine atama
      render(data);
  })
  .catch((err) => alert("Dosya Okuma hatası"));

// Arama işlevi
function searchBooks(data, query) {
    return data.filter(book => {
        return book.title.toLowerCase().includes(query.toLowerCase()) ||
               book.author.toLowerCase().includes(query.toLowerCase()) ||
               book.category.toLowerCase().includes(query.toLowerCase());
    });
}

// Arama çubuğu dinleyicisi
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    const filteredData = searchBooks(originalData, query); // originalData, tüm kitapların olduğu veri dizisidir
    render(filteredData);
});

// Form gönderimini engelleme
const searchForm = document.querySelector('.form-inline');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Formun gönderimini engelle
    const query = searchInput.value;
    const filteredData = searchBooks(originalData, query); // originalData, tüm kitapların olduğu veri dizisidir
    render(filteredData);
});



Request.get("http://localhost:3000/books")
  .then((data) => render(data))
  .catch((err) => alert("Dosya Okuma hatası"));