// JavaScript Function to handle form submission
function getFormValue(event) {
    // Prevent the form from submitting the usual way (reloading the page)
    event.preventDefault();
    
    // Access the first name and last name input fields
    const firstName = document.querySelector('input[name="fname"]').value.trim();
    const lastName = document.querySelector('input[name="lname"]').value.trim();

    // Concatenate first name and last name into a full name
    const fullName = `"${firstName} ${lastName}"`;

    // Display the full name in an alert
    alert(fullName);
}

// Adding event listener to the form
document.getElementById('nameForm').addEventListener('submit', getFormValue);
