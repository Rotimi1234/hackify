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
            
            const username = document.getElementById("username");
            const pass = document.getElementById("pass");
            const submit = document.getElementById("sub-btn");


            // Authenticate process//
        function AuthenticateUser(){
            const dbref = ref(db);

            get(child(dbref, "UsersList/"+ username.value)).then((snapshot)=>{
                if(snapshot.exists()){
                    alert("login Successful")
                    let dbpass = decPass(snapshot.val().password);
                    if(dbpass == pass.value){
                        login(snapshot.val());
                    }

                    else{
                        alert("username or passwod is invalid")
                    }
                
                }
                    else{
                        alert("username or password is invalid");
                    }    
            });
        }

        // -----------------------Decryption process------------------------//
        function decPass(dbpass){
                var pass12 = CryptoJS.AES.decrypt(dbpass, pass.value);
                return pass12.toString(CryptoJS.enc.Utf8);
            }
        
            // ----------------------Login------------------------//
            function login(user){
                let keepLoggedIn = document.getElementById("customswitch1").checked;

                if (!keepLoggedIn) {
                    sessionStorage.setItem('user', JSON.stringify(user));
                    window.location="index.html"
                }

                else{
                    localStorage.setItem('keepLoggedIn', 'yes');
                    localStorage.setItem('user', JSON.stringify(user));
                    window.location="index.html"
                }
            }

            // ----------------------------------Assign the event-------------------//
            submit.addEventListener('click', AuthenticateUser)

      