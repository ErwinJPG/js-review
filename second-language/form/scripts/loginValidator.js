// https://www.w3schools.com/js/js_validation.asp

const regex_email = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

function validate_form() {
    let email = document.getElementById("EmailField").value;
    let pass = document.getElementById("PassField").value;
    validate_email(email);
    validate_pass(pass);
}

// Add ability to turn bottom border of input red when incorrect
function validate_email() {
    let element = document.getElementById("EmailField");
    let email = element.value;
    let x = email.match(regex_email);
    // Should show user that the input is not a valid email by making bottom bar red,
    // Append an animated X to side of email form,
    // Create a text (label) displaying "Invalid email."
    // Implement using element.classList.add("incorrect-email") and .remove(...) 
    if (x == null) {
        console.log("Invalid email");
    } else {
        console.log(email);
    }
}

function validate_pass(pass) {
    //console.log(pass);
    //alert(pass);
}