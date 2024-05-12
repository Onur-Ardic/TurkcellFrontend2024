function LocalStorage() {

}

LocalStorage.prototype.getCardList = function () {
    const cardList = localStorage.getItem('cardList');
    return cardList ? JSON.parse(cardList) : [];
}

LocalStorage.prototype.setCardList = function (cardList) {
    localStorage.setItem('cardList', JSON.stringify(cardList));
}