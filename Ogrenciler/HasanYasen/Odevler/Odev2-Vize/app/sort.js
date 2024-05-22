class Sort {
    static byCustom(books, selectedSort) {
        switch (selectedSort) {
            case "azSort":
                return books.slice().sort((a, b) => a.name.localeCompare(b.name))
            case "zaSort":
                return books.slice().sort((a, b) => b.name.localeCompare(a.name))
            case "yearOldestSort":
                return books.slice().sort((a, b) => a.year - b.year)
            case "yearLatestSort":
                return books.slice().sort((a, b) => b.year - a.year)
            default:
                return books
        }
    }
}