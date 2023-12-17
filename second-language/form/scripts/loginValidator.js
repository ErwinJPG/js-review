const emailRegex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
const userRegex = /^[a-z0-9_-]{6,32}$/i; // https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
var isInvalidEmail = false;
var isInvalidUsername = false;
var isFieldInFocus = false;
var FieldInFocus = ""
var usernameField = document.getElementById("UsernameField");
var emailField = document.getElementById("EmailField");
var passField = document.getElementById("PassField");

if (emailField) {
    emailField.addEventListener('click', function() {
        FieldInFocus = "email"
        isFieldInFocus = true;
        validateEmail();
    });
    emailField.addEventListener('focus', function() {
        FieldInFocus = "email"
        isFieldInFocus = true;
    });
    emailField.addEventListener('focusout', function() {
        FieldInFocus = "email"
        isFieldInFocus = false;
        validateEmail();
    });
}

function validateUsername() {
    let usernameValue = usernameField.value;
    let isValidUsername = usernameValue.match(userRegex);

    let errorDiv = document.getElementById("error-div-username");
    let invalidMessage = document.getElementById("invalid-message-username");
    let checkDiv = document.getElementById("check-div-username");
    console.log(isValidUsername === null, !isInvalidUsername, !isFieldInFocus,usernameValue != "")
    if (isFieldInFocus) {
        isInvalidUsername = false
        usernameField.classList.remove("valid-email-border")
        usernameField.classList.remove("invalid-email-border");
        if (checkDiv) { checkDiv.remove(); }
        if (errorDiv) { errorDiv.remove(); }
        if (invalidMessage) { invalidMessage.remove(); }
    }
    else if (isValidUsername === null && !isInvalidUsername && !isFieldInFocus && usernameValue != "") {
        console.log(2)
        isInvalidUsername = true;
        usernameField.classList.add("invalid-email-border");
        usernameField.classList.remove("valid-email-border")
        if (!errorDiv) usernameField.after(createRequirements("username"));
        if (!errorDiv) usernameField.after(createCross("username"));
        if (checkDiv) { checkDiv.remove(); }
        
    } 
    else if (isValidUsername !== null && !isFieldInFocus) {
        console.log(3)
        isInvalidUsername = false;
        usernameField.classList.add("valid-email-border");
        usernameField.classList.remove("invalid-email-border");
        if (!checkDiv) usernameField.after(createCheck("username"));
        if (errorDiv) { errorDiv.remove(); }
        if (invalidMessage) { invalidMessage.remove(); }
    }
}

function validateEmail() {
    let emailValue = emailField.value;
    let isValidEmail = emailValue.match(emailRegex);

    let errorDiv = document.getElementById("error-div-email");
    let invalidMessage = document.getElementById("invalid-message-email");
    let checkDiv = document.getElementById("check-div-email");
    if (isFieldInFocus) {
        isInvalidEmail = false
        emailField.classList.remove("valid-email-border")
        emailField.classList.remove("invalid-email-border");
        if (checkDiv) { checkDiv.remove(); }
        if (errorDiv) { errorDiv.remove(); }
        if (invalidMessage) { invalidMessage.remove(); }
    }
    // Does regex find a match? Is there already an error displayed?
    // Is the email field in focus? Is there nothing in the email field?
    else if (isValidEmail === null && !isInvalidEmail && !isFieldInFocus && emailValue != "") {
        isInvalidEmail = true;
        emailField.classList.add("invalid-email-border");
        emailField.classList.remove("valid-email-border")
        if (!errorDiv) emailField.after(createRequirements("email"));
        if (!errorDiv) emailField.after(createCross("email"));
        if (checkDiv) { checkDiv.remove(); }
        
    } 
    else if (isValidEmail !== null && !isFieldInFocus) {
        isInvalidEmail = false;
        emailField.classList.add("valid-email-border");
        emailField.classList.remove("invalid-email-border");
        if (!checkDiv) emailField.after(createCheck("email"));
        if (errorDiv) { errorDiv.remove(); }
        if (invalidMessage) { invalidMessage.remove(); }
    }
}

function validatePassword() {

}

function createCross(identifier) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", `error-div-${identifier}`);
    svg.classList.add("error-class");

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", 'M0,0 L18,18');
    path1.setAttribute('class', 'error-cross1');
    
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M18, 0 L0,18" );
    path2.setAttribute('class', 'error-cross2');
    
    svg.append(path1);
    svg.append(path2);

    return svg;
}

function createCheck(identifier) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", `check-div-${identifier}`);
    svg.classList.add("valid-class");

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", 'M0,9 L7,18, L18,0');
    path1.setAttribute('class', 'check1');
    
    svg.append(path1);

    return svg; 
}

function createRequirements(identifier) {
    console.log(identifier)
    const p = document.createElement("p");
    const text = document.createTextNode(`Invalid ${identifier}.`);
    p.setAttribute("id", `invalid-message-${identifier}`);
    p.setAttribute("class", "invalid-email");

    p.appendChild(text);
    return p;
}

function validateForm() {
    // Implementation for form validation if needed
}

function nerd() {
    console.log("nerd");
    console.log(document.body.style.backgroundImage);
    document.body.style.backgroundImage = "url(https://media1.tenor.com/m/xCc58fEqFREAAAAd/nerd-nerdy.gif)";
}