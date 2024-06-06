const inputs = {
  nameInput: document.getElementById("nameInput"),
  surNameInput: document.getElementById("surNameInput"),
  inputEmail: document.getElementById("inputEmail"),
  inputTc: document.getElementById("inputTc"),
};

class Person {
  constructor(nameInput, surNameInput, inputEmail, inputTc) {
    this.name = nameInput;
    this.surname = surNameInput;
    this.email = inputEmail;
    this.tc = inputTc;
  };

  static personInfos() {
    return {
      name: inputs.nameInput.value.trim(),
      surname: inputs.surNameInput.value.trim(),
      email: inputs.inputEmail.value.trim(),
      tc: inputs.inputTc.value.trim(),
    };
  }
}
