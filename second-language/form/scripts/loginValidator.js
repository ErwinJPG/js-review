const emailRegex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
let isInvalidEmail = false;
let isFieldInFocus = false;
let emailField = document.getElementById("EmailField");

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
    let errorDiv = document.getElementById("error-div");
    let invalidMessage = document.getElementById("invalid-message");

    if (isValidEmail === null && !isInvalidEmail && !isFieldInFocus) {
        isInvalidEmail = true;
        emailField.classList.add("invalid-email-border");
        emailField.after(createRequirements());
        emailField.after(createCross());
    } else if (isValidEmail !== null) {
        isInvalidEmail = false;
        emailField.classList.remove("invalid-email-border");
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
