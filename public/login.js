const firebaseConfig = {
    apiKey: "AIzaSyDbhCzjUeEvIr3mEoVjdzuRKPeW21r_jFo",
    authDomain: "bank-f1ffb.firebaseapp.com",
    projectId: "bank-f1ffb",
    storageBucket: "bank-f1ffb.appspot.com",
    messagingSenderId: "846921552510",
    appId: "1:846921552510:web:42320b1567e940f21b3e2f"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()

  const loginUser = (ev) =>{
    ev.preventDefault()
    if (password.value == "" || email.value == "") {
        alert("input cannnot be empty")
        return
    }
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message);
    
  });

  }