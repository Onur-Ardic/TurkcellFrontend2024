
const saveNextButton = document.getElementById("saveNextButton");

const inputs = {
    nameInput: document.getElementById("nameInput"),
    surNameInput: document.getElementById("surNameInput"),
    inputEmail: document.getElementById("inputEmail"),
    inputTc: document.getElementById("inputTc"),
};

class Person {
    constructor(nameInput, surNameInput, inputEmail, inputTc,) {
        this.name = nameInput;
        this.surNameInput = surNameInput;
        this.inputEmail = inputEmail;
        this.inputTc = inputTc;
    };
    static personInfos() {
            return{
                nameInput: inputs.nameInput.value.trim(),
                surNameInput: inputs.surNameInput.value.trim(),
                inputEmail: inputs.inputEmail.value.trim(),
                inputTc: inputs.inputTc.value.trim(),
            };
}
};
document.getElementById("saveNextButton").addEventListener("click", (first) => {
        first.preventDefault();
        const personInfo = Person.personInfos();
    localStorage.setItem("save", JSON.stringify(personInfo));
    window.location.href = "choosemovie.html";
});
 

