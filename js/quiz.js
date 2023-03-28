var questions = [
    ["Which country broke the record of consecutive international wins?",1] , 
    ["Who was the highest points scorer in the Six Nations?",2] , 
    ["How many tries were scored in the fifteen Six Nations games played?",3] , 
    ["How many Grand Slams have France won in all, following their success this year?",4] , 
    ["Clermont finally won the Top 14 title after how many attempts in previous finals?",1] ,  
    ["Which position did Australia finish in the 2009/2010 IRB Sevens World Series?",2] , 
    ["How many Super 14 games did the Lions win?",3] , 
    ["Who topped the Super 14 try-scoring charts this year?",4] , 
    ["Who are the Guinness/Aviva Premiership defending champions?",1] , 
    ["Who are the Magners League defending champs?",2]
    ];
    
    var answers = [
    ["Lithuania","England","New Zealand","South Africa"] , 
    ["Jonah Lomu","Stephen Jones","Richie McCaw","Dan Carter"] , 
    ["20","40","48","60"] , 
    ["Two","Five","Seven","Nine"] , 
    ["11","15","8","9"] , 
    ["1st","3rd","6th","4th"] , 
    ["One","Four","Zero","Five"] , 
    ["Dan Carter","Stephen Jones","Richie McCaw","Joe Rokocoko"] , 
    ["Leicester","Jonah Lomu","Alun Wyn Jones","Martin Johnson"] , 
    ["Brian o'Driscoll","Ospreys","Leicester","Stephen Jones"] , 
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