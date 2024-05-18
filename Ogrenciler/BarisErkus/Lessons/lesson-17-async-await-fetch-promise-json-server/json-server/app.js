API.get(usersUrl).then(() => {
    data.map((item) => UI.createCard(item))
});
