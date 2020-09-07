var d = document;
var username = document.getElementById("user");
var password = document.getElementById("pass");

const submitBtn = d.getElementById("submit-btn");
const incompleteField = d.getElementById("incomplete-field");

const validate = (e) => {
  e.preventDefault();
  if (username.value.length == 0 || password.value.length == 0) {
    incompleteField.innerHTML = "Todos los campos son obligatorios";
    username.focus();
    return false;
  } else {
    incompleteField.innerHTML = "";
  }
  if (username.value == "user" && password.value == "user") {
    location.href = "./html/inicio-user.html";
  } else if (username.value == "admin" && password.value == "admin") {
    location.href = "./html/inicio-admin.html";
  }
};

submitBtn.addEventListener("click", validate);
