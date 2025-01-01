/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



<script>
        // Function to toggle the visibility of the Google Form
        function toggleForm() {
            var formContainer = document.getElementById("googleFormContainer");
            if (formContainer.style.display === "none" || formContainer.style.display === "") {
                formContainer.style.display = "block";  // Show the form
            } else {
                formContainer.style.display = "none";   // Hide the form
            }
        }
    </script>
<script>
    // Get form elements
    const form = document.getElementById("contactForm");
    const submitButton = document.getElementById("submitButton");
    const successMessage = document.getElementById("submitSuccessMessage");
    const errorMessage = document.getElementById("submitErrorMessage");
    const formContainer = document.getElementById("formContainer");

    // Form submit event
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Clear previous error/success messages
        successMessage.classList.add("d-none");
        errorMessage.classList.add("d-none");

        // Form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Validate form fields
        if (!name || !email || !phone || !message) {
            showErrorMessage("Please fill all fields correctly.");
            return;
        }

        // Prepare form data to send (usually as JSON or URL-encoded)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("message", message);

        // Disable the submit button while sending
        submitButton.disabled = true;

        // Simulate form submission using AJAX (using fetch here)
        setTimeout(() => {
            // Simulate successful response (remove this for real API)
            const isSuccess = true; // Change to false to simulate an error

            if (isSuccess) {
                // Hide the form
                formContainer.classList.add("d-none");
                // Show success message
                successMessage.classList.remove("d-none");
            } else {
                // Show error message
                errorMessage.classList.remove("d-none");
            }

            // Re-enable the submit button
            submitButton.disabled = false;
        }, 2000); // Simulate delay for server response
    });

    // Show error message in the UI
    function showErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove("d-none");
    }
</script>
