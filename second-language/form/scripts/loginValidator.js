const emailRegex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
const userRegex = /^(?=.$)[a-zA-Z0-9._]/i; // https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
var isInvalidEmail = false;
var isInvalidUsername = false;
var isFieldInFocus = false;
var emailField = document.getElementById("EmailField");

if (emailField) {
    emailField.addEventListener('focus', function() {
        isFieldInFocus = true;
    });

    emailField.addEventListener('focusout', function() {
        isFieldInFocus = false;
        validateEmail();
    });
}

function validateEmail() {
    let emailValue = emailField.value;
    let isValidEmail = emailValue.match(emailRegex);

    var errorDiv = document.getElementById("error-div");
    var invalidMessage = document.getElementById("invalid-message");
    var checkDiv = document.getElementById("check-div");

    if (isValidEmail === null && !isInvalidEmail && !isFieldInFocus) {
        isInvalidEmail = true;
        emailField.classList.remove("valid-email-border")
        emailField.classList.add("invalid-email-border");
        if (!errorDiv) emailField.after(createRequirements());
        if (!errorDiv) emailField.after(createCross());
        if (checkDiv) { checkDiv.remove(); }
    } else if (isValidEmail !== null) {
        isInvalidEmail = false;
        emailField.classList.remove("invalid-email-border");
        emailField.classList.add("valid-email-border");
        if (!checkDiv) emailField.after(createCheck());
        if (errorDiv) { errorDiv.remove(); }
        if (invalidMessage) { invalidMessage.remove(); }
    }
}

function createCross() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "error-div");
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

function createCheck() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "check-div");
    svg.classList.add("valid-class");

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", 'M0,9 L7,18, L18,0');
    path1.setAttribute('class', 'check1');
    
    svg.append(path1);

    return svg; 
}

function validateUsername() {
}

function createRequirements() {
    const p = document.createElement("p");
    const text = document.createTextNode("Invalid email.");
    p.setAttribute("class", "invalid-email");
    p.setAttribute("id", "invalid-message");
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