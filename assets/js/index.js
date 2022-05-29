
        //---------------------------------------References----------------------------//
        let userlink = document.getElementById("userlink");
        let welcome = document.getElementById("welcome");
        let signoutlink = document.getElementById("signoutlink");
        let email = document.getElementById("email");
        let name = document.getElementById("name");
        var currentUser = null;
        
 
        //toast
        const buttonss = document.querySelector("buttonss"),
      toast = document.querySelector(".toast")
      closessIcon = document.querySelector(".closess"),
      progress = document.querySelector(".progress");

      let timer1, timer2;

        //----------------functions-----------------------------//
        function getUsername(){
            let keepLoggedIn = localStorage.getItem("keepLoggedIn");

            if (keepLoggedIn == "yes") {
                currentUser = JSON.parse(localStorage.getItem("user"))
            } else {
                currentUser = JSON.parse(sessionStorage.getItem("user"))
            }
        }

        function Signout(){
            sessionStorage.removeItem("user")
            localStorage.removeItem("user")
            localStorage.removeItem("keepLoggedIn")
            window.location = "index.html"
        }

        function toasst(){
        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
          progress.classList.remove("active");
        }, 5300);
      };
      
      closessIcon.addEventListener("click", () => {
        toast.classList.remove("active");
        
        setTimeout(() => {
          progress.classList.remove("active");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
      });
        //======================== windows loads=======================//
        window.onload = function(){
            getUsername();
            if (currentUser == null) {
                userlink.innerText="Register"
                userlink.href = "signin.html"

                signoutlink.innerText="Login"
                signoutlink.href = "login.html"
            }
            else{
                userlink.innerText= currentUser.username   
                welcome.innerText= "Welcome " + currentUser.fullname
                email.value=currentUser.email
                name.value=currentUser.fullname

                userlink.href = "#"
                toasst()
                signoutlink.innerText="Sign Out"
                signoutlink.href = "javascript:Signout()"
            }
        }