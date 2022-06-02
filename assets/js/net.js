setInterval(network, 9000)


function network() {

    var startTime = new Date().getTime();
            var img = new Image();
            
                img.onload = function() {
                    var loadtime = new Date().getTime() - startTime;
                    checkConnectionSpeed(loadtime);
                }; 
                

            img.src = "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?"+startTime;
            
            function checkConnectionSpeed(millisecond) {
                var x = document.getElementById("connection-message");
                if (millisecond > 9000) {
                    x.style.backgroundColor = 'red';
                    x.innerHTML = 'Connection is Very Bad';
                }else if(millisecond > 8000){
                    x.style.backgroundColor = 'orange';
                    x.innerHTML = 'Your Internet Connection is too slow';
                }
                else if(millisecond > 5000){
                    x.style.backgroundColor = 'yellow';
                    x.innerHTML = 'Your Internet Connection is a bit slow';
                }else{
                    x.style.backgroundColor = 'green';
                    x.innerHTML = 'Back Online';
                }

                
            }
}


            function none(){
                    document.getElementById("connection-message").style.display = "none";
                }

                