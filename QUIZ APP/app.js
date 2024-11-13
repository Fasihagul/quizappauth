var firebaseConfig = {
    apiKey: "AIzaSyDyodnuy4GezaF45mfNA2KeEi7BeYaeUIo",
    authDomain: "fasihafirbase.firebaseapp.com",
    projectId: "fasihafirbase",
    storageBucket: "fasihafirbase.firebasestorage.app",
    messagingSenderId: "1026228203274",
    appId: "1:1026228203274:web:d1801d3d388aa13b0a54f3"
  };

  var app = firebase.initializeApp(firebaseConfig);



  
function signUp() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  console.log (name.value)
  console.log (email.value)
  console.log (password.value)




    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}
function Login(){
    var email = document.getElementById("Loginemail");
  var password = document.getElementById("Loginpassword");
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    window.location.href = "./home.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}