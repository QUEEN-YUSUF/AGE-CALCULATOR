
function diplay() {
    var x = document.getElementById("calculator");
      x.style.display = "flex";
  }

  function calculate(){
      var i = "";
      i = document.getElementById("name").value;
      var j = 0;
      j = document.getElementById("year").value;

      j *= 365;
    
      document.getElementById("age").innerHTML = 