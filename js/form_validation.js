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
    let pwd = document.forms["register_form"]["rpwd"].value;
    let _pwd = document.forms["register_form"]["rpwd-repeat"].value;
    if (pwd != _pwd) {
        alert("Your password and confirmation password do not match. Try again!");
    }
    alert("Something is broken, please try again later!");
}

// Validate feedback form
function validateFeedbackForm() {
    alert("Something is broken, please try again later!");
}