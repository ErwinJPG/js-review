const emailRegex = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
const userRegex = /^[a-z0-9_-]{6,32}$/i; // https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/i;
var isInvalidEmail = false;
var isInvalidUsername = false;
var isInvalidPass = false;
var isAccountCreated = false;
var isUsernameFieldFocused = false;
var isEmailFieldFocused = false;
var isPassFieldFocused = false;
var usernameField = document.getElementById("UsernameField");
var emailField = document.getElementById("EmailField");
var passField = document.getElementById("PassField");
var tosCheck = document.getElementById("TOScheckbox");
var submitButton = document.getElementById("submit-field");
var PassRequirements = document.getElementById("PassRequirements");

if (usernameField) {
    usernameField.addEventListener('click', function () {
        isUsernameFieldFocused = true;
        validateUsername();
    });
    usernameField.addEventListener('focus', function () {
        isUsernameFieldFocused = true;
    });
    usernameField.addEventListener('focusout', function () {
        isUsernameFieldFocused = false;
        validateUsername();
    });
}
if (emailField) {
    emailField.addEventListener('click', function () {
        isEmailFieldFocused = true;
        validateEmail();
    });
    emailField.addEventListener('focus', function () {
        isEmailFieldFocused = true;
    });
    emailField.addEventListener('focusout', function () {
        isEmailFieldFocused = false;
        validateEmail();
    });
}
if (passField) {
    passField.addEventListener('click', function () {
        isPassFieldFocused = true;
        validatePassword();
    });
    passField.addEventListener('focus', function () {
        isPassFieldFocused = true;
    });
    passField.addEventListener('focusout', function () {
        isPassFieldFocused = false;
        validatePassword();
    });
}

function validateUsername() {
    let usernameValue = usernameField.value;
    let isValidUsername = usernameValue.match(userRegex); // 6 characters, no special characters except -_

    let errorDiv = document.getElementById("error-div-username");
    let invalidMessage = document.getElementById("invalid-message-username");
    let checkDiv = document.getElementById("check-div-username");
    if (isUsernameFieldFocused) {
        isInvalidUsername = false
        usernameField.classList.remove("valid-border")
        usernameField.classList.remove("invalid-border");
        if (checkDiv) { checkDiv.remove(); }
        if (errorDiv) { errorDiv.remove(); }
        if (invalidMessage) { invalidMessage.remove(); }
    }
    else if (isValidUsername === null && !isInvalidUsername && !isUsernameFieldFocused && usernameValue != "") {
        isInvalidUsername = true;
        usernameField.classList.add("invalid-border");
        usernameField.classList.remove("valid-border");
        if (!errorDiv) usernameField.after(createRequirements("username"));
        if (!errorDiv) usernameField.after(createCross("username"));
        if (checkDiv) { checkDiv.remove(); }
    }
    else if (isValidUsername !== null && !isUsernameFieldFocused) {
        isInvalidUsername = false;
        usernameField.classList.add("valid-border");
        usernameField.classList.remove("invalid-border");
        if (!checkDiv) usernameField.after(createCheck("username"));
        if (errorDiv) { errorDiv.remove(); };
        if (invalidMessage) { invalidMessage.remove(); };
        return true;
    }
    return false;
}

function validateEmail() {
    let emailValue = emailField.value;
    let isValidEmail = emailValue.match(emailRegex); // example@domain.com

    let errorDiv = document.getElementById("error-div-email");
    let invalidMessage = document.getElementById("invalid-message-email");
    let checkDiv = document.getElementById("check-div-email");
    if (isEmailFieldFocused) {
        isInvalidEmail = false;
        emailField.classList.remove("valid-border");
        emailField.classList.remove("invalid-border");
        if (checkDiv) { checkDiv.remove(); }
        if (errorDiv) { errorDiv.remove(); }
        if (invalidMessage) { invalidMessage.remove(); }
    }
    // Does regex find a match? Is there already an error displayed?
    // Is the email field in focus? Is there nothing in the email field?
    else if (isValidEmail === null && !isInvalidEmail && !isEmailFieldFocused && emailValue != "") {
        isInvalidEmail = true;
        emailField.classList.add("invalid-border");
        emailField.classList.remove("valid-border");
        if (!errorDiv) emailField.after(createRequirements("email"));
        if (!errorDiv) emailField.after(createCross("email"));
        if (checkDiv) { checkDiv.remove(); }

    }
    else if (isValidEmail !== null && !isEmailFieldFocused) {
        isInvalidEmail = false;
        emailField.classList.add("valid-border");
        emailField.classList.remove("invalid-border");
        if (!checkDiv) emailField.after(createCheck("email"));
        if (errorDiv) { errorDiv.remove(); }
        if (invalidMessage) { invalidMessage.remove(); }
        return true;
    }
    return false;
}

function validatePassword() {
    let passValue = passField.value;
    let isValidPass = passValue.match(passRegex); // Min 6 char, 1 number, 1 special char

    let errorDiv = document.getElementById("error-div-password");
    let invalidMessage = document.getElementById("invalid-message-password");
    let checkDiv = document.getElementById("check-div-password");
    if (isPassFieldFocused) {
        isInvalidPass = false;
        passField.classList.remove("valid-border")
        passField.classList.remove("invalid-border");
        if (checkDiv) { checkDiv.remove(); }
        if (errorDiv) { errorDiv.remove(); }
        if (invalidMessage) { invalidMessage.remove(); }
    }
    // Does regex find a match? Is there already an error displayed?
    // Is the email field in focus? Is there nothing in the email field?
    else if (isValidPass === null && !isInvalidPass && !isPassFieldFocused && passValue != "") {
        isInvalidPass = true;
        passField.classList.add("invalid-border");
        passField.classList.remove("valid-border");
        if (!errorDiv) passField.after(createRequirements("password"));
        if (!errorDiv) passField.after(createCross("password"));
        if (checkDiv) { checkDiv.remove(); }

    }
    else if (isValidPass !== null && !isPassFieldFocused) {
        isInvalidPass = false;
        passField.classList.add("valid-border");
        passField.classList.remove("invalid-border");
        if (!checkDiv) passField.after(createCheck("password"));
        if (errorDiv) { errorDiv.remove(); }
        if (invalidMessage) { invalidMessage.remove(); }
        if (PassRequirements) { PassRequirements.classList.add("hidden") }
        return true;
    }
    return false;
}

function createCross(identifier) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", `error-div-${identifier}`);
    svg.classList.add("error-class");

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", 'M0,0 L18,18');
    path1.setAttribute('class', 'error-cross1');

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M18, 0 L0,18");
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

// https://www.w3schools.com/howto/howto_js_password_validation.asp
function createRequirements(identifier) {
    const p = document.createElement("p");
    const text = document.createTextNode(`Invalid ${identifier}. `);
    p.setAttribute("id", `invalid-message-${identifier}`);
    p.setAttribute("class", "invalid");
    p.appendChild(text);

    if (identifier == "username") {
        let details = document.createTextNode("Must contain at least 6 characters");
        p.appendChild(details);
    }
    else if (identifier == "email") {
        let details = document.createTextNode("Do you not know what email is?");
        p.appendChild(details);
    }
    else if (identifier == "password") {
        PassRequirements.classList.remove("hidden");
    }
    return p;
}

function validateForm() {
    let formUsername = document.getElementById("UsernameForm");
    let formEmail = document.getElementById("EmailForm");
    let formPass = document.getElementById("PassForm");
    let tosElement = document.getElementById("tos");
    if (!validateUsername()) {
        formUsername.classList.remove("border-shake");
        void formUsername.offsetWidth;
        formUsername.classList.add("border-shake");
    }
    if (!validateEmail()) {
        formEmail.classList.remove("border-shake");
        void formEmail.offsetWidth;
        formEmail.classList.add("border-shake");
    }
    if (!validatePassword()) {
        formPass.classList.remove("border-shake");
        void formPass.offsetWidth;
        formPass.classList.add("border-shake");
    }
    if (!tosCheck.checked) {
        tosElement.classList.remove("border-shake");
        void tosElement.offsetWidth;
        tosElement.classList.add("border-shake");
    }
    if (validateUsername() && validateEmail() && validatePassword() && tosCheck.checked && !isAccountCreated) {
        isAccountCreated = true;
        let p = document.createElement("p");
        let text = document.createTextNode("Your account has been created.");
        p.append(text);
        submitButton.after(p);
    }
}

function nerd() {
    let x = document.getElementById("background");
    x.style.backgroundImage = "url(https://media1.tenor.com/m/xCc58fEqFREAAAAd/nerd-nerdy.gif)";
}