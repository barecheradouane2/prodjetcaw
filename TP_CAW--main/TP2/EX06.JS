window.onload = function () {
     var elements = document.getElementsByClassName("boundary");
     
     for (var i = 0; i < elements.length; i++) {
         elements[i].addEventListener('mouseover', changeColor);
     }
     
     function changeColor(){
          const collection = document.getElementsByClassName("boundary");
          for (let i = 0; i < collection.length; i++) {
               collection[i].style.backgroundColor = "red";
             }        
          document.getElementById('status').innerHTML = 'you lost';      
     }
     document.getElementById("end").addEventListener("mouseover", win);
     
     function win() {
          const collection = document.getElementsByClassName("boundary");
          if ( collection[0].style.backgroundColor == "red" ) {
               document.getElementById('status').innerHTML = 'you lost';      
          }else{
               if (document.getElementById('status').innerHTML != 'Stop cheating') {
                    document.getElementById('status').innerHTML = 'you win';  
               }       
     }
     }
     document.getElementById("start").addEventListener("click", reset);
     
     function reset() {
          const collection = document.getElementsByClassName("boundary");
          for (let i = 0; i < collection.length; i++) {
               collection[i].style.backgroundColor = "#eeeeee";
             }
             document.getElementById('status').innerHTML = 'Move your mouse over the "S" to begin.        ';
     }
     }