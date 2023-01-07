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
     document.getElementById("end").addEventListener("mouseover", win);

function win() {
     const collection = document.getElementsByClassName("boundary");
     if ( collection[0].style.backgroundColor == "red" ) {
          alert("you lost");      
     }else{
          alert("you win");       
}
}

document.getElementById("start").addEventListener("click", reset);

function reset() {
     const collection = document.getElementsByClassName("boundary");
     for (let i = 0; i < collection.length; i++) {
          collection[i].style.backgroundColor = "#eeeeee";
        }
}

}     