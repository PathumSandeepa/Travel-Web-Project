function formValidate() {
    var rateVal = document.forms["feedback"]["rating"].value;
    var nameVal = document.forms["feedback"]["name"].value;
    var comments = document.forms["feedback"]["comment"].value;
    if (rateVal == "" || nameVal == ""){
        alert("Rating and the Name should be filled out");
    } else{
        var alertmsg;
        if(confirm("Are you sure you want to submit the provided details?")){
            if(comments == "") {
                alert("Form submitted\n******************************\nThank you for your feedback " + nameVal + " !\n" +
                    "You rated us " + rateVal + "\n")
            }else{
                alert("Form submitted\n******************************\nThank you for your feedback " + nameVal + " !\n" +
                    "You rated us " + rateVal + "\nCommented us: "+comments)
            }
        }
    }
}

