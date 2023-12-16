// https://www.w3schools.com/js/js_validation.asp

const regex_email = /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
function validate_form() {}

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
        element.classList.add("invalid-email");
        element.after(create_cross());
    } else {
        console.log(email);
    }
}

function create_cross() {
    const svg = document.createElementNS("", "svg");
    svg.classList.add("error-class");
    
    const path1 = document.createElementNS("", "path");
    path1.setAttribute("d", 'M0,0 L18,18');
    path1.setAttribute('class', 'error-cross1');
    const path2 = document.createElementNS("", "path");
    path2.setAttribute("d", "M18, 0 L0,18" );
    path2.setAttribute('class', 'error-cross2');
    svg.append(path1);
    svg.append(path2);

    return svg
}