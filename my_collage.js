function myFunction(elem) {
    var x = document.getElementById(elem);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function maxwindow(elem) {
  var el = document.getElementById(elem);
    if (el.style.width < "35vw"){
      el.style.width = "35vw"}

    else if (el.className == "column_3") {
        el.style.width = "25vw";
      } 
    else if (el.className == "column_2") {
        el.style.width = "22.5vw";
      }
    else if (el.className == "column_1") {
        el.style.width = "25vw";
      }

  }

function maxslider(elem) {
  var images = document.querySelectorAll(elem)
  imageArray = Array.prototype.slice.call(images);

  imageArray.forEach(function (img) { // Now itterate over each image in the array
    if (img.style.width < "35vw") { // If the width is less than 50
        img.style.width = "35vw" // Set the width
      }  
    else if (img.style.width = "40vw") {
      img.style.width = "25vw"
    }
    })}


function changecolor(elem) {
  document.getElementById(elem).className = "blue"
}

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}


function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


// get all draggie elements
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
    

// init Draggabillies
for ( var i=0, len = draggableElems.length; i < len; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
    handle: '.handle'
  });
  draggies.push( draggie );
}

