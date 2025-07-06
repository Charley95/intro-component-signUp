const form = document.querySelector("#form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

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
    if (email.value.trim() === "") {
        let emailError = document.getElementById("email-error");
        emailError.textContent = "Looks like this is not an email";
        email.classList.add("error", "color-placeholder");
        email.placeholder = "email@example/com"; // Change placeholder text
    }
    if (password.value.trim() === "") {
        let pwordError = document.getElementById("pword-error");
        pwordError.textContent = "Password cannot be empty";
        password.classList.add("error", "hide-placeholder");
    }

});

//Function to validate first name using a regular expression
function validateName(fname) {
    const re = /^[A-Z][a-z]+(?:[-'][A-Z][a-z]+)?$/;
    return re.test(String(fname));
}

// Function to validate the email format using a regular expression
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}