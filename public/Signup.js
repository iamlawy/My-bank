

  // Your web app's Firebase configuration
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
  //
  const email = document.getElementById("email")
  const password = document.getElementById("password")
  const lastName = document.getElementById("lastName")
  const firstName = document.getElementById("firstName")

  const register = (ev) =>{
    ev.preventDefault()
    if (email.value =="" || password.value == "" || lastName.value == "" || firstName.value == "") {
      alert("input cannot be empty")
      return
    }


    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
      user.updateProfile({
          displayName : firstName.value + " " + lastName.value
      })
      db.collection("user").doc(user.uid).set({
          userName:user.displayName,
          dob: null,
          country:"Nigeria",
          profile: null,
          email:user.email,
          wallet: 2000,
          transaction_history:[],
          time:new Date(),
      })
      // ...
      setTimeout(() => {
        window.location.href = "login.html"
      }, 2000);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
      
      // ..
    });
  }


