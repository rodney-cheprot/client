document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let feedback = document.getElementById("feedback");

    if (name === "" || email === "" || message === "") {
        feedback.textContent = "Please fill in all fields.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Message sent successfully!";
        feedback.style.color = "green";
    }
});