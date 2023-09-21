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


