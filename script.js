$(document).ready(function(){

    $("#p1").clicl(function(){
        alert("You entered p1!");
      });
  
  });
  window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    
    //Resizing 
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });

function myFunction() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("kitchen");
  ctx.drawImage(img, 0, 0, 750, 500);
  };
  
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function(){
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet."
    }

})

var canvas = document.getElementById("my_canvas");
function download_image(){
  var canvas = document.getElementById("my_canvas");
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}