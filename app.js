var Questions = [
    { Qusetion : "What does HTML stand for?",
      options :[
            "Hyper Tag Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyperlinking Text Marking Language"],
            answer : "Hyper Text Markup Language"
        },
    { Qusetion : "Which language is used for creating Web Pages?",
    options :[
            "PASCAL",
            "C",
            "HTML",
            "Python"],
            answer : "HTML"
        },
    { Qusetion : "What is the abbreviation of HTTP?",
    options :[
            "Hypertext tag path",
            "Hyper Text Transfer Protocol",
            "Hypertext transfer path",
            "None"],
            answer : "Hyper Text Transfer Protocol"
        },
    { Qusetion : "The entire web document is contained within ____",
    options :[
            "Comments",
            "Tags",
            "Web page",
            "HTML Element"],
            answer : "HTML Element"
        },
    { Qusetion : "HTML document should begin with the ____",
    options :[
            "<HEAD> tag",
            "<BODY> tag",
            "<HTML> tag",
            "<TITLE> tag"],
            answer : "<HTML> tag"
        },
    { Qusetion : "GIF is the abbreviation for ___",
    options :[
            "Graphics Interchange Format",
            "Graphics Instruction Format",
            "Graphics Item Format",
            "Graphics Information Format"],
            answer : "Graphics Interchange Format"
        },
    { Qusetion : "The <Font> tag is similar to ____",
    options :[
            "<BIG>tag",
            "<SMALL>tag",
            "<MARQUEE>tag",
            "<BIG>and<Small> tags"],
            answer : "<BIG>and<Small> tags"
        },
        { Qusetion : "The HTML and HTTP standard are defined by ____",
        options :[
              "Web client",
              "Internet association",
              "WWW consortium",
              "WWW"],
              answer : "WWW consortium"
          },
          { Qusetion : "The tag used to add images to the HTML document is ____",
          options :[
                "<FONT>",
                "<HR>",
                "<HI>",
                "<IMG>"],
                answer : "<IMG>"
            },
            { Qusetion : "____is used to store the data within the documents on the server.",
            options :[
                  "XML",
                  "HTML",
                  "DHTML",
                  "CGI"],
                  answer : "XML"
              }

    ];
    var div = document.getElementById("main");
    var username; 
    
function showQuestion(){
    
    username = document.getElementById("name").value;
    if(username == ""){
        alert("Please fill your name")
    }
    else{
    document.getElementById("name").style.display = "none";
    document.getElementsByTagName("button")[0].style.display= "none";

    
    div.setAttribute("class", "questionCard");


    var para = document.createElement("p");
    question = document.createTextNode(Questions[0].Qusetion );
    div.appendChild(para)
    
    for(var i =0; i<4;i++){
    var p2 = document.createElement("p");
    var x1 = document.createElement("INPUT");
    x1.setAttribute("type", "radio");
    x1.setAttribute("name", "options");
    x1.classList.add("options");
    x1.setAttribute("onclick","selectAnswer(this)");
    opt1 = document.createTextNode(Questions[0].options[i]);

     
    div.appendChild(x1)
    div.appendChild(opt1);
    para.appendChild(question);
    lineBreak1 = document.createElement("br");
    div.appendChild(lineBreak1);}
    
    
    
   
    nextbtn = document.createElement("button");
    nextbtn.setAttribute("class","nextbtn");
    nextbtn.innerHTML = "Next";
    nextbtn.setAttribute("onclick","next()");
    div.appendChild(nextbtn);
    
   
   
    
    
    }
    
}
var k=1;
function nextQuestion(){
    div.innerHTML = "";
    
       
        console.log(k)
        div.setAttribute("class", "questionCard");
    
        if(k<=9){
        var para = document.createElement("p");
        question = document.createTextNode(Questions[k].Qusetion );
        div.appendChild(para)
        
        for(var i =0; i<4;i++){
        var p2 = document.createElement("p");
        var x1 = document.createElement("INPUT");
        x1.setAttribute("type", "radio");
        x1.setAttribute("name", "options");
        x1.setAttribute("onclick","selectAnswer(this)");
        x1.classList.add("options");
        opt1 = document.createTextNode(Questions[k].options[i]);
    
         
        div.appendChild(x1)
        div.appendChild(opt1);
        para.appendChild(question);
        lineBreak1 = document.createElement("br");
        div.appendChild(lineBreak1);


        



        
    }
    nextbtn = document.createElement("button");
    nextbtn.setAttribute("class","nextbtn");
    nextbtn.innerHTML = "Next";
    nextbtn.setAttribute("onclick","next()");
    
    div.appendChild(nextbtn);
}
if(k==9){
    nextbtn.style.display = "none";
        finishbtn = document.createElement("button");
        finishbtn.setAttribute("class","nextbtn");
        finishbtn.innerHTML = "Finish";
        finishbtn.setAttribute("onclick","nextFinish()");
        div.appendChild(finishbtn);
    
        
    }
    k++;    
}
function next(){
    
    getMarks();
    
}
var selectedAnswer ="";
function selectAnswer(cell){
    selectedAnswer = cell.nextSibling.nodeValue;    
}
var marks = 0;
function getMarks(){
    if(selectedAnswer ==""){
        
        alert("Please select any option to continue.......");
    }
    else{

    nextQuestion();
    console.log(selectedAnswer)
    console.log(Questions[k-2].answer)
    console.log(selectedAnswer==Questions[k-2].answer);
    if(selectedAnswer==Questions[k-2].answer){
    console.log("Right answer")
    marks++;    
} 
    else{
        console.log("Wrong");
    }
    selectedAnswer ="";
    console.log(marks);}

}
function finish(){
    div.innerHTML = "";
    div.classList.remove("questionCard");
    if(marks>=5){
        var congratz = document.createElement("h1");
        congratz.appendChild(document.createTextNode("Congratulations! "+username+"  \nYou got "+marks+" marks"));
        congratz.classList.add("tryAgain");
        /*congratz.style.color = "white";
        congratz.style.marginTop = "30%";*/
        div.appendChild(congratz);
    }
    else{
                
        var tryAgain = document.createElement("h1");
        tryAgain.style.marginBottom = "30px";
        tryAgain.appendChild(document.createTextNode(username+"  \nYou got "+marks+" marks. You failed"));
        tryAgain.classList.add("tryAgain");
        /*tryAgain.style.color = "white";
        congratz.style.marginTop = "30%";*/
        div.appendChild(tryAgain);


        tryAgainbtn = document.createElement("button");
        tryAgainbtn.setAttribute("class","nextbtn");
        tryAgainbtn.classList.add("tryAgainbtn");
        tryAgainbtn.innerHTML = "Try Again";
        tryAgainbtn.setAttribute("onclick","location.href='index.html'");
        div.appendChild(tryAgainbtn);
    }
    
}
function nextFinish(){
    if(selectedAnswer == ""){
        alert("Please select any option to continue.......");
    }
    else{
        finish();
    }
}