function newPassword() {
    var website = prompt("Enter password location:")
    var password = prompt("Enter password to location:")
    localStorage.setItem(website, password);
    console.log(website, "created");
}

function allPasswords() {
    console.log(localStorage);
}

function removePassword() {
    var website = prompt("Enter website name:")
    localStorage.removeItem(website);
    console.log(website, "password", "removed!")
}