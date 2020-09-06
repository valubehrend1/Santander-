var d = document;


const submitBtn = d.getElementById('submit-btn');
const incompleteField = d.getElementById('incomplete-field');

const validate = (e) => {
  e.preventDefault();
  const username = document.getElementById('user');
  const password = document.getElementById('pass');
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