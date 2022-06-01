var startTime = new Date().getTime();
            var img = new Image();
            setInterval(() => {
                img.onload = function() {
                    var loadtime = new Date().getTime() - startTime;
                    checkConnectionSpeed(loadtime);
                }; 
            }, 3000);
            img.src = "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?"+startTime;
            function checkConnectionSpeed(millisecond) {
                var x = document.getElementById("connection-message");
                if (millisecond > 9000) {
                    x.style.backgroundColor = 'red';
                    x.innerHTML = 'No Connection';
                }else if(millisecond > 8000){
                    x.style.backgroundColor = 'red';
                    x.innerHTML = 'Your Internet Connection is too slow';
                }
                else if(millisecond > 5000){
                    x.style.backgroundColor = 'orange';
                    x.innerHTML = 'Your Internet Connection is a bit slow';
                }else{
                    x.style.backgroundColor = 'green';
                    x.innerHTML = 'Your Internet Connection looks good';
                }

                
            }

            function none(){
                    document.getElementById("connection-message").style.display = "none";
                }

                