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
     }
}     