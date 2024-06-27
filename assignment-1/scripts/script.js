function friendlyMessage() {
    var age = Number(document.getElementById("age").value);
    var name = document.getElementById("username").value; // Adjusted to match the HTML context
    
    let myHeading = document.querySelector("h4");
    
    if (age >= 60 && age <= 78) {
        myHeading.textContent = "You're part of the Baby Boomer Generation, " + name + "!";
    } else if (age >= 41 && age <= 59) {
        myHeading.textContent = "You're part of Generation X, " + name + "!";
    } else if (age >= 26 && age <= 40) {
        myHeading.textContent = "You're part of Generation Y (Millennials), " + name + "!";
    } else if (age >= 10 && age <= 25) {
        myHeading.textContent = "You're part of Generation Z, " + name + "!";
    } else {
        myHeading.textContent = "You're too young or too old to belong to a specific generation, " + name + "!";
    }
}

var myButton = document.querySelector("button");
myButton.onclick = function(event) {
    event.preventDefault(); // Prevent form submission
    friendlyMessage();
};