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
