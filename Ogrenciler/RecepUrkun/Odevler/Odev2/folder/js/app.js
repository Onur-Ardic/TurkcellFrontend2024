let selectedCategory = "";
let currentSort = "";
let selectedAuthor = ""
const baseUrl = "http://localhost:3000/books";
const secondUrl = "http://localhost:3000/sentence"
const kitapKapakResmi = document.getElementById("kitapKapakResmi");
const kitapAdi = document.getElementById("kitapAdi");
const kitapYazari = document.getElementById("kitapYazari");
const kitapKategori = document.getElementById("kitapKategori");
const kitapTarih = document.getElementById("kitapTarih");
const bookContainer = document.querySelector("#bookContainer");
const searchInput = document.getElementById("searchInput");
const headerSentence = document.getElementById("sentence")
const kitapEkleBtn = document.getElementById("kitapEkle")
const kitapGuncelleBtn = document.getElementById("kitapGuncelle")
const modalCloseBtn = document.getElementById("modalCloseBtn")
const kitapModalTitle = document.getElementById("kitapModalLabel")
const kitapModal = new bootstrap.Modal(document.getElementById('kitapModal'));

document.addEventListener("DOMContentLoaded", () => {
    UI.getRandomSentence()
    UI.renderBooks();
    UI.sortAllBooksToUI()
    UI.addFiltersToDropdown();
    isEditMode(false)
    changeTheme()
});

const changeTheme = () => {
    const button = document.getElementById('theme-toggle');

    button.addEventListener('click', function () {
        const currentTheme = document.body.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-bs-theme', newTheme);
        const allButtons = document.querySelectorAll(".btnChange")
        allButtons.forEach(button => {
            if (newTheme === 'dark') {
                button.classList.remove('btn-outline-dark');
                button.classList.add('btn-outline-light');
            } else {
                button.classList.remove('btn-outline-light');
                button.classList.add('btn-outline-dark');
            }
        });
    });
}

const runAllEventListener = () => {
    document.getElementById("sifirla").addEventListener("click", () => {
        UI.resetFiltersandCategory()
    })

    searchInput.addEventListener("input", (e) => {
        const searchBook = e.target.value.toLowerCase();
        UI.renderBooks(searchBook);
    });

    kitapEkleBtn.addEventListener("click", () => {
        yeniKitapOlustur();
    });

    modalCloseBtn.addEventListener("click", () => {
        UI.clearInputs()
        isEditMode(false)
    })
}

const yeniKitapOlustur = () => {
    if (kitapKapakResmi.value == "" || kitapAdi.value == "" || kitapYazari.value == "" || kitapKategori.value == "" || kitapKategori.value == "" || kitapTarih.value == "")
        UI.showAlert("hatali")
    else {
        const yeniKitap = new Book(
            kitapAdi.value,
            kitapYazari.value,
            kitapKategori.value,
            kitapTarih.value,
            kitapKapakResmi.value
        );
        kitapEkleDb(yeniKitap);
        // UI.showAlert("success");
        kitapModal.hide();
        UI.clearInputs();
    }
}

const kitapEkleDb = async (kitap) => {
    await apiHelper.addBookToDb(kitap);
    UI.renderBooks();
    await UI.addFiltersToDropdown();
}

const deleteBook = async (kitapId) => {
    await apiHelper.deleteBookFromDb(kitapId)
    UI.renderBooks();
};

const updateBook = async (kitapId) => {
    UI.clearInputs()
    isEditMode(true)
    kitapModal.show()

    const book = await apiHelper.getBookFromDb().then(books => books.find(book => book.id == kitapId));

    kitapAdi.value = book.name;
    kitapYazari.value = book.author;
    kitapKategori.value = book.category;
    kitapTarih.value = book.written_date;
    kitapKapakResmi.value = book.img;

    kitapGuncelleBtn.addEventListener("click", () => {
        changeInfoBook(kitapId)
    }, { once: true })
}

const changeInfoBook = async (kitapId) => {
    const updatedBook = {
        name: kitapAdi.value,
        author: kitapYazari.value,
        category: kitapKategori.value,
        written_date: kitapTarih.value,
        img: kitapKapakResmi.value
    };
    await apiHelper.updateBookFromDb(kitapId, updatedBook)
    UI.clearInputs()
    kitapModal.hide();
    UI.renderBooks();
    await UI.addFiltersToDropdown();
    isEditMode(false)
}

const isEditMode = (edit) => {
    kitapModalTitle.textContent = edit ? "Kitap Güncelle" : "Kitap Ekle";
    kitapEkleBtn.classList.toggle("d-none", edit);
    kitapGuncelleBtn.classList.toggle("d-none", !edit);
}

runAllEventListener()