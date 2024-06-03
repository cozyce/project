function validateForm(email) {
    let x = document.forms["form"]["email"].value;
    let y = document.forms["form"]["confirmation"].value;

    if (x !== y) {
        alert('Emails Do Not Match');
    } else {
        return true;
    }
}