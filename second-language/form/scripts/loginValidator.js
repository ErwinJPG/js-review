// https://www.w3schools.com/js/js_validation.asp

const regex_email = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

function validate_form() {   
    let email = document.getElementById("EmailField").value;
    let pass = document.getElementById("PassField").value;
    validate_email(email);
    validate_pass(pass);
}

// Add ability to turn bottom border of input red when incorrect
function validate_email(email) {   
    let x = email.match(regex_email);
    if (x == null) {
        alert("Invalid email");
    } else {
        console.log(email);
    }
}

function validate_pass(pass) {  
    //console.log(pass);
    //alert(pass);
}