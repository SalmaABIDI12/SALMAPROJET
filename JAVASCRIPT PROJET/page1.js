var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function validateForm() {
  // Initialisation du tableau d'erreurs
  var issueArr = [];

  // Validation du nom d'utilisateur
  var username = document.getElementById("username");
  if (username.value.length < 3) {
    issueArr.push("Le nom d'utilisateur doit avoir au moins 3 caractères.");
  }
  if (username.value.length > 25) {
    issueArr.push("Le nom d'utilisateur ne peut pas dépasser 25 caractères.");
  }
  if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(username.value)) {
    issueArr.push("Le nom d'utilisateur ne doit pas contenir de caractères spéciaux.");
  }
}
  

  // Validation du mot de passe
  /*var password = document.getElementById("password");
  if (password.value.length < 8) {
    issueArr.push("Le mot de passe doit avoir au moins 8 caractères.");
  }
  if (password.value.length > 15) {
    issueArr.push("Le mot de passe ne peut pas dépasser 15 caractères.");
  }
  if (!/\d/.test(password.value)) {
    issueArr.push("Le mot de passe doit contenir au moins un chiffre.");
  }
  if (!/[a-z]/.test(password.value)) {
    issueArr.push("Le mot de passe doit contenir au moins une lettre minuscule.");
  }
  if (!/[A-Z]/.test(password.value)) {
    issueArr.push("Le mot de passe doit contenir au moins une lettre majuscule.");
}
if (!/[0-9]/.test(password.value)) {
    issueArr.push("Le mot de passe doit contenir au moins un chiffre.");
}
if (!/[!@#$%^&*]/.test(password.value)) {
    issueArr.push("Le mot de passe doit contenir au moins un caractère spécial (!@#$%^&*).");
  }
  if (issueArr.length > 0) {
    password.setCustomValidity(issueArr.join("\n"));
    password.style.borderColor = alertRedInput;
  } else {
    password.setCustomValidity("");
    password.style.borderColor = defaultInput;
  }

  // Validation de la confirmation du mot de passe
  var confirmPassword = document.getElementById("confirm-password");
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("La confirmation du mot de passe doit être identique au mot de passe.");
    confirmPassword.style.borderColor = alertRedInput;
  } else {
    confirmPassword.setCustomValidity("");
    confirmPassword.style.borderColor = defaultInput;
  }

  // Validation de l'adresse e-mail
  var email = document.getElementById("email");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    email.setCustomValidity("");
    email.style.borderColor = defaultInput;
  } else {
    email.setCustomValidity("L'adresse e-mail n'est pas valide.");
    email.style.borderColor = alertRedInput;
  }
}
*/
function checkForm(event) {
    // Check if the form elements are valid
    if (username.checkValidity() && password.checkValidity() && confirmPassword.checkValidity() && email.checkValidity()) {
      // The form is valid, so allow the form submission to continue
      return true;
    } else {
      // The form is invalid, so prevent the form submission
      event.preventDefault();
    }
  }