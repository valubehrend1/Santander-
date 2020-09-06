var d = document;


const submitBtn = d.getElementById('submit-btn');
const incompleteField = d.getElementById('incomplete-field');

const validate = (e) => {
  e.preventDefault();
  const name = d.getElementById('name');
  const surename = d.getElementById('sureName');
  const email = d.getElementById('email');
  const username = document.getElementById('user');
  const password = document.getElementById('pass');
    if (name.value.length == 0) {
        incompleteField.innerHTML = "Todos los campos son obligatorios";
        password.focus();
        return false;
    } else {
        incompleteField.innerHTML = '';
    }  
    if (surename.value.length == 0) {
        incompleteField.innerHTML = "Todos los campos son obligatorios";
        surename.focus();
        return false;
    } else {
        incompleteField.innerHTML = '';
    }  
    if (email.value.length == 0) {
        incompleteField.innerHTML = "Todos los campos son obligatorios";
        surename.focus();
        return false;
    } else {
        incompleteField.innerHTML = '';
    }  
    if (password.value.length == 0) {
        incompleteField.innerHTML = "Todos los campos son obligatorios";
        password.focus();
        return false;
    } else {
        incompleteField.innerHTML = '';
    }  
    if (username.value.length == 0) {
        incompleteField.innerHTML = "Todos los campos son obligatorios";
        username.focus();
        return false;
  } else {
    incompleteField.innerHTML = '';
};  

  if (password.value.length == 0) {
    incompleteField.innerHTML = "Todos los campos son obligatorios";
    password.focus();
    return false;
  } else {
    incompleteField.innerHTML = '';
} 
  return true;
};

submitBtn.addEventListener('click', validate);