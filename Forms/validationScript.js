    // JavaScript code for form validation
let form = document.getElementById("myForm");
let regex = /^[a-zA-Z0-9]+$/;
form.addEventListener('submit', function(event) {
  if (!regex.test(inputField.value)) {
    alert("Input isn't alphanumeric");
    event.preventDefault();
  }
  else {
    alert("Form submitted");
  }
});
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message