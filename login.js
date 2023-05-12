// Function to handle login form submission
function login(event) {
  event.preventDefault();
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;
  var users = JSON.parse(localStorage.getItem('users')) || [];
  var user = users.find(u => u.username === username && u.password === password);
  if (user) {
      alert('Login successful!');
      // You can redirect to another page or perform any other action her
      window.location.href = "http://127.0.0.1:5500/menu.html";
  } else {
      alert('Invalid username or password.');
  }
}

// Function to handle signup form submission
function signup(event) {
  event.preventDefault();
  var username = document.getElementById('signupUsername').value;
  var password = document.getElementById('signupPassword').value;
  var users = JSON.parse(localStorage.getItem('users')) || [];
  var user = users.find(u => u.username === username);
  if (user) {
      alert('Username already exists. Please choose a different username.');
  } else {
      users.push({ username: username, password: password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful!');
      // You can redirect to another page or perform any other action here
  }
}

// Attach event listeners to the forms
document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('signupForm').addEventListener('submit', signup);
