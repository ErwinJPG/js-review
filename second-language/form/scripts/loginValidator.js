// https://www.w3schools.com/js/js_validation.asp

const regex_email = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
var is_invalid = false;
var in_focus = false;
var email_field = document.getElementById("EmailField");
if (email_field) {
    email_field.addEventListener('focus', function() {
        in_focus = true;
    })
    email_field.addEventListener('focusout', function() {
        in_focus = false;
    })
}

// Add ability to turn bottom border of input red when incorrect
function validate_email() {
    let email = email_field.value;
    let x = email.match(regex_email);
    let svg = create_cross()
    let p = create_requirements()
    // Should show user that the input is not a valid email by making bottom bar red,
    // Append an animated X to side of email form,
    // Create a text (label) displaying "Invalid email."
    // Implement using email_field.classList.add("incorrect-email") and .remove(...) 
    if (x == null && !is_invalid) {
        is_invalid = true;
        email_field.classList.add("invalid-email-border");
        email_field.after(p);
        email_field.after(svg);
    } 
    if (x != null) {
        is_invalid = false;
        email_field.classList.remove("invalid-email-border");
        document.getElementById("error-div").remove(); // SPAMS CONSOLE WITH ERROR.
        document.getElementById("invalid-message").remove(); // SPAMS CONSOLE WITH ERROR.
    }
    console.log(x, is_invalid, in_focus)
}

function create_cross() {
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

    return svg
}

//terrible naming
function create_requirements() {
    const p = document.createElement("p");
    const text = document.createTextNode("Invalid email.");
    p.setAttribute("class", "invalid-email")
    p.setAttribute("id", "invalid-message")
    p.appendChild(text)
    return p
}

function validate_form() {}