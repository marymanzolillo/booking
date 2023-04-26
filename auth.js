// Import the Firebase module
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdL0p-wvapZOdOjdL0PnnBYumHrOcak7k",
  authDomain: "booking-880e4.firebaseapp.com",
  projectId: "booking-880e4",
  storageBucket: "booking-880e4.appspot.com",
  messagingSenderId: "565644278296",
  appId: "1:565644278296:web:40ab2ada7558fd8b5ea16d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register a new user
function register(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

// Sign in an existing user
function signIn(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

// Sign out the current user
function signOut() {
  return auth.signOut();
}

// Handle authentication state changes (e.g., user signed in or signed out)
auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    console.log('User signed in:', user);
  } else {
    // User is signed out
    console.log('User signed out');
  }
});


// Get the registration form and handle its submit event
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = registerForm['register-email'].value;
    const password = registerForm['register-password'].value;
    const registerStatus = document.getElementById('register-status');

    console.log('Trying to register with email:', email);

    try {
      await register(email, password);
      registerStatus.innerHTML = '<p class="text-success">Registration successful!</p>';
      console.log('Registration successful');
      // Redirect to another page or update the UI as needed
    } catch (error) {
      registerStatus.innerHTML = '<p class="text-danger">Registration failed: ' + error.message + '</p>';
      console.error('Registration failed:', error);
    }
  });
}



// Get the sign-in form and handle its submit event
const signInForm = document.getElementById('sign-in-form');
if (signInForm) {
  signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = signInForm['sign-in-email'].value;
    const password = signInForm['sign-in-password'].value;
    const signInStatus = document.getElementById('sign-in-status');

    try {
      await signIn(email, password);
      console.log('Sign-in attempt'); // Add this line
      signInStatus.innerHTML = '<p class="text-success">Sign in successful!</p>';
      // Redirect to another page or update the UI as needed
    } catch (error) {
      signInStatus.innerHTML = '<p class="text-danger">Sign in failed: ' + error.message + '</p>';
    }
  });
}

