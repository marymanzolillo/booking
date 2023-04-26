const auth = firebase.auth();

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

    try {
      await register(email, password);
      registerStatus.innerHTML = '<p class="text-success">Registration successful!</p>';
      // Redirect to another page or update the UI as needed
    } catch (error) {
      registerStatus.innerHTML = '<p class="text-danger">Registration failed: ' + error.message + '</p>';
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
      signInStatus.innerHTML = '<p class="text-success">Sign in successful!</p>';
      // Redirect to another page or update the UI as needed
    } catch (error) {
      signInStatus.innerHTML = '<p class="text-danger">Sign in failed: ' + error.message + '</p>';
    }
  });
}

