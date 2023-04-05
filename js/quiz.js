var questions = [
    ["What is the main language spoken in Paris?",1] , 
    ["Which of these museums in Paris is dedicated to modern art?",2] , 
    ["What is the Vatican?",3] , 
    ["What can visitors do in Central Park of New York city?",4] , 
    ["What is the Imperial Palace in Tokyo?",1] ,  
    ["What is the name of the clock tower located at the north end of the Palace of Westminster?",2] , 
    ["Which street in London is one of the busiest shopping streets in Europe?",3] , 
    ["What is the most famous beach in Sydney?",4] , 
    ["What is the Christ the Redeemer statue, and where is it located?",1] , 
    ["What is the Burj Khalifa?",2]
    ];
    
    var answers = [
    ["French","English","Spanish","German"] , 
    ["Musée d'Orsay","Louvre Museum","Centre Georges Pompidou","Rodin Museum"] , 
    ["The largest church in the world","A famous fountain in Rome","The smallest independent state in the world","A museum dedicated to modern art"] , 
    ["Go for a bikeride","See broadway shows","Have a picnic","All of the above"] , 
    ["The residence of the Emperor of Japan,A famous sushi restaurant","A popular nightclub","A shopping district"] , 
    ["Tower Bridge","Big Ben","The Shard","The London Eye"] , 
    ["Regent Street","Bond Street","Oxford Stret","Carnaby Street"] , 
    ["Coogee Beach","Stephen Beach","Manly Beach","Bondy Beach"] , 
    ["It is a statue of Jesus Christ, and it is located on top of Corcovado Mountain.","It is a statue of a famous Brazilian singer, and it is located on Copacabana Beach.","It is a statue of a famous politician, and it is located in the city center.","It is a statue of a famous soccer player, and it is located in Maracana Stadium."] , 
    ["A luxurious hotel in Dubai","The world's tallest building in Dubai","An artificial island in Dubai","A desert safari attraction in Dubai"] , 
    ];
    var t;
    time = 119;
    var pointer = -1;
    answerState = [
    ["-","-",-1] , 
    ["-","-",-1] , 
    ["-","-",-1] , 
    ["-","-",-1] , 
    ["-","-",-1] , 
    ["-","-",-1] , 
    ["-","-",-1] , 
    ["-","-",-1] , 
    ["-","-",-1] , 
    ["-","-",-1]
    ];
    
    function timer(){
        if (time == 0) {
            document.getElementById('time').innerHTML = time.toString();
            result();
            alert("Timer cancelled");   
        } else {
            document.getElementById('time').innerHTML = time.toString();
        }
        time -= 1;
    }
    
    function start(){
    
        t = setInterval(timer, 1000);
    
        document.getElementById("start").style.display = "none";
        document.getElementById("submit").style.display = "block";
        document.getElementById("next").style.display = "block";
        document.getElementById("back").style.display = "block";
        document.getElementById("answers").style.display = "block";
        document.getElementById('questionBody').style.fontSize ="25px";
        next();
        
    }
    
    
    function back() {
    
        if(pointer != 0){
            var Radio = document.getElementsByName("answer");
            for (var i = 0; i < 4; i++) { Radio[i].checked = false; }
    
            pointer -= 1;
    
            if(answerState[pointer][1] != "-"){
                previousAnswer = answerState[pointer][1];
                Radio[previousAnswer-1].checked = true;
            }
    
            document.getElementById('questionBody').innerHTML =  "(" + (pointer+1).toString() + ").<b>" +questions[pointer][0] + "</b>";
    
            document.getElementById('ans1').innerHTML =  answers[pointer][0];
            document.getElementById('ans2').innerHTML =  answers[pointer][1];
            document.getElementById('ans3').innerHTML =  answers[pointer][2];
            document.getElementById('ans4').innerHTML =  answers[pointer][3];
            console.log(pointer);
        }
    
    
    }
    
    function next() {
    
        if(pointer != 9){
            var Radio = document.getElementsByName("answer");
            for (var i = 0; i < 4; i++) { Radio[i].checked = false; }
    
            pointer += 1;
    
            if(answerState[pointer][1] != "-"){
                previousAnswer = answerState[pointer][1];
                Radio[previousAnswer-1].checked = true;
                console.log(answerState[pointer][1]);
            }
    
            
            document.getElementById('questionBody').innerHTML =  "(" + (pointer+1).toString() + ").<b>" +questions[pointer][0] + "</b>";
            document.getElementById('ans1').innerHTML =  answers[pointer][0];
            document.getElementById('ans2').innerHTML =  answers[pointer][1];
            document.getElementById('ans3').innerHTML =  answers[pointer][2];
            document.getElementById('ans4').innerHTML =  answers[pointer][3];
            console.log(pointer);
        }
    
    }
    
    function reStart() {
    
        window.location = "quiz.html";
    
    }
    function result() {
        Marks = 0;
        clearInterval(t);
    
        document.getElementById("resultTable").style.display = "block";
        document.getElementById("questionBody").style.display = "none";
    
        document.getElementById("submit").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("answers").style.display = "none";
        document.getElementById("reStart").style.display = "block";
        for (var i = 0; i < 10; i++) {
            Marks += answerState[i][2];
        }
        document.getElementById("gotMarks").innerHTML = Marks;
    
        
        var j = 1;
        var i = 0;
        while(i<10) {
    
    
            status1 = answerState[i][0]; 
            answer1 = answerState[i][1]; 
            mark1 = answerState[i][2];
    
            status2 = answerState[i+1][0];
            answer2 = answerState[i+1][1];
            mark2 = answerState[i+1][2];
    
            document.getElementById("MyTable").rows[j].cells[3].innerHTML = status1;
            document.getElementById("MyTable").rows[j].cells[2].innerHTML = answer1;
            document.getElementById("MyTable").rows[j].cells[4].innerHTML = mark1;
    
            document.getElementById("MyTable").rows[j].cells[8].innerHTML = status2;
            document.getElementById("MyTable").rows[j].cells[7].innerHTML = answer2;
            document.getElementById("MyTable").rows[j].cells[9].innerHTML = mark2;
    
    
            i+=2;
            j+=1;
    
        }
    
    }
    function checkAnswer(i) {
        if(i == questions[pointer][1]){
            
            answerState[pointer][0] = "<span style='color:green;'>Correct</span>";
            answerState[pointer][1] = i ;
            answerState[pointer][2] = 2;
        }
        else{
            
            answerState[pointer][0] = "<span style='color:red;'>Wrong</span>";
            answerState[pointer][1] = i ;
            answerState[pointer][2] = -1;
        }
    }	