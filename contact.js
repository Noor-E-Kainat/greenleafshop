function submitForm() {
    const name = document.getElementById('name').value;
    alert("Thank you " + name + ", your message has been sent!");
    return false; // Prevents page reload after form submission
}