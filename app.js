
function diplay() {
    var x = document.getElementById("calculator");
      x.style.display = "flex";
  }
function calculate(){
      var i;
      i = document.getElementById("name").value;
      var j;
      j = document.getElementById("Age").value;
      j *= 365;
        document.getElementById("answer").innerHTML = i + "\t you have lived \t" + j + "\tdays";}
      