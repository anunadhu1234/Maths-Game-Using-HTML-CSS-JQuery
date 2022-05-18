        var flag = false;
        var score = 0;
       var i ; 
        var counter;
    document.getElementById("startreset").onclick = function() {
            if (flag == true) {
                location.reload();
                flag = false;
            } else {
                score = 0;
                document.getElementById("scorevalue").innerHTML = score;
                document.getElementById("timerem").style.visibility = "visible";
                document.getElementById("startreset").innerHTML = "Reset Game";
                flag = true;
                i = 60;
                startCountdown();
            }
        }
        
        function startCountdown(){
            counter = setInterval(function(){
                i-=1;
                document.getElementById("timevalue").innerHTML = i;
                  if(i===0){
                stopCountdown();
                      document.getElementById("gameover").style.display = "block";
                      document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your Score is " + score + ".</p>";
                      document.getElementById("timerem").style.visibility = "hidden";
            }
            },1000);
        }
        function stopCountdown(){
            clearInterval(counter);
        }