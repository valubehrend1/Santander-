var d = document;

const form = d.getElementById("register-form");
const incompleteField = d.getElementById("incomplete-field");

const validate = (e) => {
  e.preventDefault();
  const name = d.getElementById("name");
  const surename = d.getElementById("sureName");
  const email = d.getElementById("email");
  const username = d.getElementById("user");
  const password = d.getElementById("pass");
  const inputList = [name, surename, email, username, password];

  for (var i = 0; i < inputList.length; i++) {
    if (inputList[i].value.length == 0) {
      incompleteField.innerHTML = "Todos los campos son obligatorios";
      inputList[i].focus();
      break;
    } else {
      incompleteField.innerHTML = "";
    }
  }
  if (
    name.value.length >= 1 &&
    password.value.length >= 1 &&
    surename.value.length >= 1 &&
    email.value.length >= 1 &&
    username.value.length >= 1 &&
    password.value.length >= 1
  ) {
    location.href = "../html/inicio-user.html";
  }
};

form.addEventListener("submit", validate);
