const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');
const form = document.querySelector(".form-container");
const overlay = document.querySelector(".overlay-container");


// Function to handle the sign-up button click event
function signMeButton() {
    // Add event listener to the sign-up button
    signUpButton.addEventListener('click', function() {
      container.classList.add('right-panel-active');

      // console.log(Signupbuttonclicked);
      // You can include further actions here after the class is added
    });
  }
  
  // Add event listener to the sign-in button
  signInButton.addEventListener('click', function() {
    container.classList.remove('right-panel-active');
  });
  
  // Add event listener to the form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // You can include further actions here after the form is submitted
  });
  
  // You mentioned an 'activateOverlay()' function here, but it's not defined in the provided code snippet.
  // You might want to define and call it as needed.
  
  // Call the function to handle the sign-up button click event
  signMeButton();
  