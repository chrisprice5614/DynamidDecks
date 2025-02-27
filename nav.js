fetch('/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#nav_replace");
    let newelem = document.createElement("div");
    newelem.className = "noMarge";
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})


            // Set the date we're counting down to
            var countDownDate = new Date("Feb 27, 2025 12:00:00").getTime();
            
            // Update the count down every 1 second
            var x = setInterval(function() {
            
              // Get today's date and time
              var now = new Date().getTime();
            
              // Find the distance between now and the count down date
              var distance = countDownDate - now;
            
              // Time calculations for days, hours, minutes and seconds
              var days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
              var hours = Math.max(0,Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
              var minutes = Math.max(0,Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
              var seconds = Math.max(0,Math.floor((distance % (1000 * 60)) / 1000))
            
              // Display the result in the element with id="demo"
              var pluralsD = days == 1 ? "" : "s";
              var pluralsH = hours == 1 ? "" : "s";
              var pluralsM = minutes == 1 ? "" : "s";
              var pluralsS = seconds == 1 ? "" : "s";

              document.getElementById("dayBox").innerHTML = days;
              document.getElementById("hourBox").innerHTML = hours;
              document.getElementById("minuteBox").innerHTML = minutes;
              document.getElementById("secondBox").innerHTML = seconds;
            
              // If the count down is finished, write some text
              if (distance < 0) {
                clearInterval(x);
 
              }
            }, 1000);
