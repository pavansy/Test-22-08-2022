// Selecting input fields

const nameValue = document.getElementById("name-value");
const emailValue = document.getElementById("email-value");
const numberValue = document.getElementById("number-value");
const messageValue = document.getElementById("message-value");
const btnValue = document.getElementById("btn");

//Selecting error fields

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const numberError = document.getElementById("number-error");
const messageError = document.getElementById("message-error");

//Validation function for name field

function validateName() {
  const name = nameValue.value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    addbtn.disabled = true;
    return false;
  }
  if (!name.match(/^[A-Za-z]{3,}[\s][A-Za-z]{1}[\s][A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name";
    addbtn.disabled = true;
    return false;
  }
  nameError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}
nameValue.addEventListener("keyup", validateName);
nameValue.addEventListener("blur", validateName);

//Validation function for email field

function validateEmail() {
  const email = emailValue.value;
  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    addbtn.disabled = true;
    return false;
  }
  if (!email.match(/^[A-Za-z0-9\._-]+[@][A-Za-z]+[\.][a-z]{2,3}$/)) {
    emailError.innerHTML = "Write correct email";
    addbtn.disabled = true;
    return false;
  }
  emailError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}
emailValue.addEventListener("keyup", validateEmail);
emailValue.addEventListener("blur", validateEmail);

//Validation function for number field

function validateNumber() {
  const number = numberValue.value;
  if (number.length == 0) {
    numberError.innerHTML = "number is required";
    addbtn.disabled = true;
    return false;
  }
  if (!number.match(/^[6789][0-9]{9}$/)) {
    numberError.innerHTML = "Write correct number";
    addbtn.disabled = true;
    return false;
  }
  numberError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}
numberValue.addEventListener("keyup", validateNumber);
numberValue.addEventListener("blur", validateNumber);

//Validation function for message field

function validateMessage() {
  const message = messageValue.value;
  if (message.length == 0) {
    messageError.innerHTML = "message is required";
    addbtn.disabled = true;
    return false;
  }
  if (!message.match(/^[A-Za-z\s]+$/)) {
    messageError.innerHTML = "Write correct message";
    addbtn.disabled = true;
    return false;
  }
  messageError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}
messageValue.addEventListener("keyup", validateMessage);
messageValue.addEventListener("blur", validateMessage);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.defaultPrevented();
  validateName();
  validateEmail();
  validateNumber();
  validateMessage();
  if (
    !validateName() ||
    !validateEmail() ||
    !validateNumber() ||
    !validateMessage()
  ) {
    return false;
  }
  let obj = {
    name: nameValue.value,
    email: emailValue.value,
    number: numberValue.value,
    message: messageValue.value,
  };
  console.log(obj);

  //Reset

  nameValue.value = "";
  email.value = "";
  number.value = "";
  message.value = "";
});
