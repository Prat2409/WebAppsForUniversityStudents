// Event listener for form submission
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const rating = document.querySelector('input[name="rating"]:checked');
  const message = document.getElementById('message').value;
  
  if (name && email && rating && message) {
    // Perform further processing with the feedback, rating, name, and email
    // For this example, we simply log them to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Rating:', rating.value);
    console.log('Message:', message);
    
    // Reset the form
    feedbackForm.reset();
  } else {
    alert('Please fill in all fields and provide a rating and feedback message.');
  }
});
