
    //---------------------------------------References----------------------------//
    let userlink = document.getElementById("userlink");
    let header = document.getElementById("hh");
    let signoutlink = document.getElementById("signoutlink");
    var currentUser = null;

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
           // header.innerText = "Welcome " + currentUser.fullname
            userlink.href = "#"

            signoutlink.innerText="Sign Out"
            signoutlink.href = "javascript:Signout()"
        }
    }
