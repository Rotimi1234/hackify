 // (B) ENCRYPT & DECRYPT FUNCTIONS
 var crypt = {
    // (B1) THE SECRET KEY
    secret : "AIzaSyBdLJlK7W-WBJqm4KrVHXPw5tBrbScV-dE",

    // (B2) ENCRYPT
    encrypt : (clear) => {
      var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
      cipher = cipher.toString();
      return cipher;
    },

    // (B3) DECRYPT
    decrypt : (cipher) => {
      var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
      decipher = decipher.toString(CryptoJS.enc.Utf8);
      return decipher;
    }
  };

  // (C) TEST
  // (C1) ENCRYPT CLEAR TEXT
  var cipher = crypt.encrypt(crypt.secret);
  console.log(cipher);

  // (C2) DECRYPT CIPHER TEXT
  var decipher = crypt.decrypt(cipher);
  console.log(decipher);

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
 
 const firebaseConfig = {
   apiKey: decipher,
   authDomain: "login-db-70f93.firebaseapp.com",
   databaseURL: "https://login-db-70f93-default-rtdb.firebaseio.com",
   projectId: "login-db-70f93",
   storageBucket: "login-db-70f93.appspot.com",
   messagingSenderId: "527342224730",
   appId: "1:527342224730:web:5dca29c8d48bc73bf6df63",
   measurementId: "G-FXQPLKEGZR"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 import { getDatabase, ref, set, child, get, update, remove }
 from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js"

 const db = getDatabase();

 //-----------------------------The reference------------------------------//
 const name = document.getElementById("name");
 const username = document.getElementById("username");
 const email = document.getElementById("email");
 const pass = document.getElementById("password");
 const submit = document.getElementById("sub-btn");


 //--------------------------validation -------------------------------//
 function isEmptyOrSpaces(str){
     return str === null || str.match(/^ *$/) !==null;
 }
 
 function Validation(){
     let nameregex = /^[a-zA-Z\s]+$/;
     let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
     let userregex = /^[a-zA-Z0-9]{5,}$/;

     if(isEmptyOrSpaces(name.value) || isEmptyOrSpaces(email.value) || isEmptyOrSpaces(username.value) ||
     isEmptyOrSpaces(pass.value)){
         alert("you cannot leave any field empty")
         return false;
     }

     if(!nameregex.test(name.value)){
         alert("the name should only contain alphabet!");
         return false;
     }
     if(!emailregex.test(email.value)){
         alert("enter a valid email");
         return false;
     }
     if(!userregex.test(username.value)){
         alert("-username can only be alphanumeric\n-username must be atleast 5 characters\n-username cannot contain spaces");
         return false;
     }
     return true;
  }

//------------------------------- register to firebase------------//
function RegisterUser(){
if(!Validation()){
return; 
};
const dbRef = ref(db);

get(child(dbRef, "UsersList/"+ username.value)).then((snapshot)=>{
if(snapshot.exists()){
 alert("Account already exist")
}

else{
 set(ref(db, "UsersList/"+ username.value),
 {
     fullname: name.value,
     email: email.value,
     username: username.value,
     password: encPass()
 })
 .then(()=>{
     alert("user added successfully.");
     window.location="login.html"
 })
 .catch((error)=>{
     alert("error"+ error);
 })
}
});
}

// -----------------------Encryption------------------------//
 function encPass(){
     var pass12 = CryptoJS.AES.encrypt(pass.value, pass.value)
     return pass12.toString();
 }

// ----------------------------------Assign the event-------------------//
 submit.addEventListener('click', RegisterUser)
 