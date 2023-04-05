// Get the modals
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");


// Get the images and insert them inside the modals - use their "alt" text as a caption
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img01");
var captionText1 = document.getElementById("caption");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}

var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}




// Get the <span> elements that close the modals
var span1 = document.getElementById("myModal1").getElementsByClassName("close")[0];
var span2 = document.getElementById("myModal2").getElementsByClassName("close")[0];
var span3 = document.getElementById("myModal3").getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modals
span1.onclick = function() { 
  modal1.style.display = "none";
}

span2.onclick = function() { 
  modal2.style.display = "none";
}

span3.onclick = function() { 
  modal3.style.display = "none";
}


