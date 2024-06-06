class Person {
    constructor(nameInput, surNameInput, inputEmail, inputTc) {
      this.name = nameInput;
      this.surNameInput = surNameInput;
      this.inputEmail = inputEmail;
      this.inputTc = inputTc;
    }
    static personInfos() {
      return {
        nameInput: inputs.nameInput.value.trim(),
        surNameInput: inputs.surNameInput.value.trim(),
        inputEmail: inputs.inputEmail.value.trim(),
        inputTc: inputs.inputTc.value.trim(),
      };
    }
  } 