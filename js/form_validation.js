/*
   Created by: Ngoc Khanh Trinh
   Created on: 13/06/2022
*/

// Get the modal
var modal_login = document.getElementById('login');
var modal_register = document.getElementById('register');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_login) {
        modal_login.style.display = "none";
    }
    if (event.target == modal_register) {
        modal_register.style.display = "none";
    }
}

// Validate login form
function validateLoginForm() {
    alert("Something is broken, please try again later!");
}

// Validate register form
function validateRegisterForm() {
    let email = document.forms["register_form"]["email"].value;
    let pwd = document.forms["register_form"]["pwd"].value;
    let _pwd = document.forms["register_form"]["pwd-repeat"].value;
    if (!email.includes("@")) {
        alert("Invalid email address. Try again!");
        return false;
    }
    if (pwd != _pwd) {
        alert("Your password and confirmation password do not match. Try again!");
        return false;
    }
    alert("Something is broken, please try again later!");
    return false
}

// Validate feedback form
function validateFeedbackForm() {
    let email = document.forms["yourFeedback"]["email"].value;
    let phone = document.forms["yourFeedback"]["phone"].value;
    if (!email.includes("@")) {
        alert("Invalid email address. Try again!");
        return false;
    }
    if (isNaN(phone)) {
        alert("Invalid phone number. Try again!");
        return false;
    }
}