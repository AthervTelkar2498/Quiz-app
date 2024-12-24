let data = [
    {
        Q : "Q 1: Who developed Python Programming Language?",
        a : "Wick van Rossum",
        b : "Rasmus Lerdorf",
        c : "Guido van Rossum",
        d : "Niene Stom", 
        ans : "ans3",

    },
    {
       Q : "Q 2: Which type of Programming does Python support?",
       a : "object-oriented programming",
       b : "structured programming",
       c : "functional programming",
       d : "all of the mentioned",
        ans :"ans4 ",

    },
    {
        Q : "Q 3:  Is Python code compiled or interpreted?",
        a : "Python code is both compiled and interpreted",
        b : "Python code is neither compiled nor interpreted",
        c : "Python code is only compiled",
        d : "Python code is only interpreted",
        ans :"ans1",
    },
    {
        Q : "Q 4: Is Python case sensitive when dealing with identifiers?",
        a : "no",
        b : "yes",
        c : "machine dependent",
        d : "none of the mentioned",
        ans :"ans2",
    },
    {
        Q : "Q 5: Which of the following is the correct extension of the Python file?",
        a : ".python",
        b : ".pl",
        c : ".py",
        d : ".p",
        ans :"ans3",
    }
] 
 
let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let answers = document.querySelectorAll(".options");
let num = 0;
let score = 1;
let myScore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");

question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;

function checkAns(){
 let ans;
  answers.forEach((curElement)=>{
    if(curElement.checked){
        ans = curElement.id;
        console.log(ans);
    }
  })
  return ans;
}

function disSelect(){
    answers.forEach((curElement)=>{
        curElement.checked=false;
    })
}
function next(){

    let checkedAns = checkAns();

    if(checkedAns == data[num].ans){
        score++;
    }
    num++;
    disSelect();

    if(num < data.length){
question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;
    }else{
        myScore.innerHTML=`You Scored ${score}/${data.length} <br/><br/>
        <button onclick="location.reload()">Play Again</button>`;

        nextBtn.style.display="none";
        document.querySelector(".btn").style.backgroundColor="lightBlue"
    }

}