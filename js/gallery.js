// Get the modals
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");


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

var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption");
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}

var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption");
img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
}

var img7 = document.getElementById("myImg7");
var modalImg7 = document.getElementById("img07");
var captionText7 = document.getElementById("caption");
img7.onclick = function(){
  modal7.style.display = "block";
  modalImg7.src = this.src;
  captionText7.innerHTML = this.alt;
}

var img8 = document.getElementById("myImg8");
var modalImg8 = document.getElementById("img08");
var captionText8 = document.getElementById("caption");
img8.onclick = function(){
  modal8.style.display = "block";
  modalImg8.src = this.src;
  captionText8.innerHTML = this.alt;
}

var img9 = document.getElementById("myImg9");
var modalImg9 = document.getElementById("img09");
var captionText9 = document.getElementById("caption");
img9.onclick = function(){
  modal9.style.display = "block";
  modalImg9.src = this.src;
  captionText9.innerHTML = this.alt;
}




// Get the <span> elements that close the modals
var span1 = document.getElementById("myModal1").getElementsByClassName("close")[0];
var span2 = document.getElementById("myModal2").getElementsByClassName("close")[0];
var span3 = document.getElementById("myModal3").getElementsByClassName("close")[0];

var span4 = document.getElementById("myModal4").getElementsByClassName("close")[0];
var span5 = document.getElementById("myModal5").getElementsByClassName("close")[0];
var span6 = document.getElementById("myModal6").getElementsByClassName("close")[0];

var span7 = document.getElementById("myModal7").getElementsByClassName("close")[0];
var span8 = document.getElementById("myModal8").getElementsByClassName("close")[0];
var span9 = document.getElementById("myModal9").getElementsByClassName("close")[0];

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


span4.onclick = function() { 
  modal4.style.display = "none";
}

span5.onclick = function() { 
  modal5.style.display = "none";
}

span6.onclick = function() { 
  modal6.style.display = "none";
}

span7.onclick = function() { 
  modal7.style.display = "none";
}

span8.onclick = function() { 
  modal8.style.display = "none";
}

span9.onclick = function() { 
  modal9.style.display = "none";
}


//change color
  var colorDropdown = document.querySelector('.dropdown-content');
  colorDropdown.addEventListener('click', function(event) {
    event.preventDefault();
    var color = event.target.getAttribute('href');
    document.body.style.backgroundColor = color;
  });


//change font size
var fontSizeBtn = document.querySelector(".dropdown:nth-of-type(2) .dropbtn");
var fontSizeOptions = document.querySelectorAll(".dropdown:nth-of-type(2) .dropdown-content a");

fontSizeOptions.forEach(function(option) {
  option.addEventListener("click", function() {
    var selectedSize = option.textContent;

    if (selectedSize === "AAA") {
      document.body.style.fontSize = "13px"; // H5 font size
    } else if (selectedSize === "AAA") {
      document.body.style.fontSize = "18px"; // H4 font size
    } else if (selectedSize === "AAA") {
      document.body.style.fontSize = "20px"; // H3 font size
    }
  });
});




