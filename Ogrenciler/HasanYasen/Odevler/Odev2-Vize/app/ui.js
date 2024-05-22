class UI {
	constructor() {
		this.bookNameForAdd = document.getElementById("bookNameForAdd")
		this.bookAuthorForAdd = document.getElementById("bookAuthorForAdd")
		this.bookCategoryForAdd = document.getElementById("bookCategoryForAdd")
		this.bookYearForAdd = document.getElementById("bookYearForAdd")
		this.bookImgUrlForAdd = document.getElementById("bookImgUrlForAdd")

		this.bookNameForEdit = document.getElementById("bookNameForEdit")
		this.bookAuthorForEdit = document.getElementById("bookAuthorForEdit")
		this.bookCategoryForEdit = document.getElementById("bookCategoryForEdit")
		this.bookYearForEdit = document.getElementById("bookYearForEdit")
		this.bookImgUrlForEdit = document.getElementById("bookImgUrlForEdit")

		this.addToList = document.getElementById("addToList")
		this.saveChanges = document.getElementById("saveChanges")
		this.bookList = document.getElementById("bookList")

		this.searchInput = document.getElementById("searchInput")

		this.defaultSort = document.getElementById("defaultSort")
		this.azSort = document.getElementById("azSort")
		this.zaSort = document.getElementById("zaSort")
		this.yearOldestSort = document.getElementById("yearOldestSort")
		this.yearLatestSort = document.getElementById("yearLatestSort")

		this.JKRowling = document.getElementById("JKRowling")
		this.CahitZarifoğlu = document.getElementById("CahitZarifoğlu")
		this.SabahattinAli = document.getElementById("SabahattinAli")
		this.Romance = document.getElementById("Romance")
		this.Fantasty = document.getElementById("Fantasty")
		this.Poetry = document.getElementById("Poetry")
		this.Technology = document.getElementById("Technology")
	}
	static showBooks(books) {
		UI.renderBooks(books)

		defaultSort.addEventListener("click", handleSort)
		azSort.addEventListener("click", handleSort)
		zaSort.addEventListener("click", handleSort)
		yearOldestSort.addEventListener("click", handleSort)
		yearLatestSort.addEventListener("click", handleSort)

		function handleSort(e) {
			let selectedSort = e.target.value
			const sortedBooks = Sort.byCustom(books, selectedSort)
			bookList.innerHTML = ""
			UI.renderBooks(sortedBooks)
		}

		let userInput = ""
		searchInput.addEventListener("keyup", (e) => {
			userInput = e.target.value
			const filteredBooks = Filter.bySearch(books, userInput)
			bookList.innerHTML = ""
			UI.renderBooks(filteredBooks)
		})

		JKRowling.addEventListener("click", handleFilterByAuthor)
		CahitZarifoğlu.addEventListener("click", handleFilterByAuthor)
		SabahattinAli.addEventListener("click", handleFilterByAuthor)

		let selectedAuthors = []
		function handleFilterByAuthor(e) {
			if (e.target.checked) {
				selectedAuthors = [...selectedAuthors, e.target.value]
			}
			else {
				const index = selectedAuthors.indexOf(e.target.value)
				if (index > -1) {
					selectedAuthors.splice(index, 1)
				}
			}
			const filteredByAuthor = Filter.byAuthor(books, selectedAuthors)
			bookList.innerHTML = ""
			UI.renderBooks(filteredByAuthor)
		}

		Romance.addEventListener("click", handleFilterByCategory)
		Fantasy.addEventListener("click", handleFilterByCategory)
		Poetry.addEventListener("click", handleFilterByCategory)
		Technology.addEventListener("click", handleFilterByCategory)

		let selectedCategories = []
		function handleFilterByCategory(e) {
			if (e.target.checked) {
				selectedCategories.push(e.target.value)
			}
			else {
				const index = selectedCategories.indexOf(e.target.value)
				if (index > -1) {
					selectedCategories.splice(index, 1)
				}
			}
			const filteredByCategory = Filter.byCategory(books, selectedCategories)
			bookList.innerHTML = ""
			UI.renderBooks(filteredByCategory)
		}
	}

	static renderBooks(booksToShow) {
		const p = document.createElement("p")
		p.className = "text-center text-muted fw-bold"

		if (booksToShow.length !== 0) {
			const pText = document.createTextNode("My Books")
			p.classList.add("fs-3")
			p.appendChild(pText)
			bookList.appendChild(p)
		}

		booksToShow.forEach((book) => {
			const col = document.createElement("div")
			col.className = "col-6 col-md-4 col-lg-3 col-xxl-2"
			bookList.append(col)

			const card = document.createElement("div")
			card.className = "card my-3 bg-dark text-white px-2"
			col.appendChild(card)

			const bookName = document.createElement("p")
			const bookNameText = document.createTextNode(`${book?.name}`)
			bookName.appendChild(bookNameText)
			bookName.className = "text-info fw-bold mt-3 text-overflow"
			bookName.style.height = "2rem"
			card.appendChild(bookName)

			const bookAuthor = document.createElement("p")
			const bookAuthorText = document.createTextNode(`${book?.author}`)
			bookAuthor.appendChild(bookAuthorText)
			bookAuthor.className = "text-overflow"
			bookAuthor.style.height = "1.5rem"
			card.appendChild(bookAuthor)

			const bookCategory = document.createElement("p")
			const bookCategoryText = document.createTextNode(`${book?.category}`)
			bookCategory.appendChild(bookCategoryText)
			bookCategory.className = "text-overflow"
			bookCategory.style.height = "1.5rem"
			card.appendChild(bookCategory)

			const bookYear = document.createElement("p")
			const bookYearText = document.createTextNode(`${book?.year}`)
			bookYear.appendChild(bookYearText)
			bookYear.className = "text-overflow"
			bookYear.style.height = "1.5rem"
			card.appendChild(bookYear)

			const bookImg = document.createElement("img")
			if (book?.imgUrl === "") {
				bookImg.src = "./assets/placeholder.webp"
			} else {
				bookImg.src = `${book?.imgUrl}`
			}
			bookImg.style.height = "220px"
			card.appendChild(bookImg)

			const cardFooter = document.createElement("div")
			cardFooter.className = "card-footer d-flex justify-content-around"
			card.appendChild(cardFooter)

			const bookEditButton = document.createElement("button")
			bookEditButton.setAttribute("type", "button")
			bookEditButton.setAttribute("data-bs-toggle", "modal")
			bookEditButton.setAttribute("data-bs-target", "#editBookModal")
			const editIcon = document.createElement("i")
			editIcon.className = "bi bi-pencil-fill text-info fs-5"
			bookEditButton.appendChild(editIcon)
			bookEditButton.className = "btn btn-dark"
			bookEditButton.addEventListener("click", () =>
				Book.editBook(booksToShow, `${book?.id}`)
			)
			cardFooter.appendChild(bookEditButton)

			const bookDeleteButton = document.createElement("button")
			const deleteIcon = document.createElement("i")
			deleteIcon.className = "bi bi-trash3 text-warning fs-5"
			bookDeleteButton.appendChild(deleteIcon)
			bookDeleteButton.className = "btn btn-dark"
			bookDeleteButton.addEventListener("click", () =>
				Book.deleteBook(`${book?.id}`)
			)
			cardFooter.appendChild(bookDeleteButton)
		})
	}
}

addToList.addEventListener("click", () => {
	Book.addBook()
})