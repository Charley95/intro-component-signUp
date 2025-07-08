const form = document.querySelector("#form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const emailInput = document.querySelector(".email");
const password = document.querySelector(".password");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // these IF statements check if first name, last name, and
  //  password fields are empty and add error messages respectively
  if (firstName.value.trim() === "") {
    let fnameError = document.getElementById("fname-error");
    fnameError.textContent = "First Name cannot be empty";
    firstName.classList.add("error", "hide-placeholder");
  }
  if (lastName.value.trim() === "") {
    let lnameError = document.getElementById("lname-error");
    lnameError.textContent = "Last Name cannot be empty";
    lastName.classList.add("error", "hide-placeholder");
  }
  if (password.value.trim() === "") {
    let pwordError = document.getElementById("pword-error");
    pwordError.textContent = "Password cannot be empty";
    password.classList.add("error", "hide-placeholder");
  }

  // Validate email format
  let userEmail = emailInput.value.trim();
  if (validateEmail(userEmail)) {
    emailInput.classList.remove("error", "color-placeholder");
    document.getElementById("email-error").textContent = ""; // Clear error message
  } else if (!validateEmail(userEmail) && userEmail !== "") {
    let emailError = document.querySelector("#email-error");
    emailError.textContent = "Looks like this is not an email";
    emailInput.classList.add("error", "color-placeholder");
  } else {
    emailInput.classList.add("error", "color-placeholder");
    emailInput.placeholder = "email@example/com"; // Change placeholder text
    document.getElementById("email-error").textContent = "Email cannot be empty";
  }
});

// Function to validate the email format using a regular expression
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}