const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');
const form = document.querySelector(".form-container");
const overlay = document.querySelector(".overlay-container");

// Get references to the form and submit button on notification nav bar

function submitForm() {
  const contentEmail = document.getElementById("email-form");
  // const submitButton = document.getElementById("my-btn")
  
  // Add an event listener to the form submission   
  contentEmail.addEventListener("submit", function (event) {
    event.preventDefault();
    

    // Change the content of the message element and increase display size
    
    contentEmail.innerHTML = "Thank you. Your code will automatically apply at checkout.";
    contentEmail.style.fontSize = "15px";
    contentEmail.style.color = "white";
  });

};


function signMeButton() {
    // Add event listener to the sign-up button
    signUpButton.addEventListener('click', function() {
      container.classList.add('right-panel-active');

      // console.log(Signup button clicked);
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


  // Function to generate bubbles dynamically on footer
  function generateBubbles() {
    var bubble = document.createElement('div');

    for (let i = 0; i < 128; i++) {
      var bubble = create('dev');
      bubble.classList.add('bubble');

      var size = 2 + Math.random() * 4;
      var distance = 6 + Math.random() * 4;
      var position = -5 + Math.random() * 110;
      var time = 2 + Math.random() * 2;
      var delay = -1 * (2 + Math.random() * 2);

      bubble.style.setProperty('--size', `${size}rem`);
      bubble.style.setProperty('--distance', `${distance}rem`);
      bubble.style.setProperty('--position', `${position}%`);
      bubble.style.setProperty('--time', `${time}s`);
      bubble.style.setProperty('--delay', `${delay}s`);

      bubblesContainer.appendChild(bubble);
    }
  };

  // Call the function to generate bubbles
  generateBubbles();