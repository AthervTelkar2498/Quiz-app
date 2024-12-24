// Data array containing quiz questions, options, and answers
let data = [
    {
        Q: "Q 1: Who developed Python Programming Language?", // Question
        a: "Wick van Rossum", // Option 1
        b: "Rasmus Lerdorf", // Option 2
        c: "Guido van Rossum", // Option 3
        d: "Niene Stom",      // Option 4
        ans: "ans3",          // Correct answer
    },
    {
        Q: "Q 2: Which type of Programming does Python support?",
        a: "object-oriented programming",
        b: "structured programming",
        c: "functional programming",
        d: "all of the mentioned",
        ans: "ans4",          // Correct answer
    },
    {
        Q: "Q 3: Is Python code compiled or interpreted?",
        a: "Python code is both compiled and interpreted",
        b: "Python code is neither compiled nor interpreted",
        c: "Python code is only compiled",
        d: "Python code is only interpreted",
        ans: "ans1",          // Correct answer
    },
    {
        Q: "Q 4: Is Python case sensitive when dealing with identifiers?",
        a: "no",
        b: "yes",
        c: "machine dependent",
        d: "none of the mentioned",
        ans: "ans2",          // Correct answer
    },
    {
        Q: "Q 5: Which of the following is the correct extension of the Python file?",
        a: ".python",
        b: ".pl",
        c: ".py",
        d: ".p",
        ans: "ans3",          // Correct answer
    }
];

// Selecting necessary DOM elements for displaying questions and options
let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

// Selecting all option radio buttons and other elements
let answers = document.querySelectorAll(".options");
let num = 0;              // To track the current question index
let score = 0;            // To store the player's score
let myScore = document.querySelector(".myScore"); // Score display element
let nextBtn = document.getElementById("next");    // "Next" button

// Initialize the first question and its options
question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;

// Function to check which answer is selected
function checkAns() {
    let ans;
    answers.forEach((curElement) => {
        if (curElement.checked) { // If the radio button is checked
            ans = curElement.id;  // Store the id of the selected answer
        }
    });
    return ans; // Return the selected answer
}

// Function to deselect all options
function disSelect() {
    answers.forEach((curElement) => {
        curElement.checked = false; // Uncheck all radio buttons
    });
}

// Function to handle the "Next" button click
function next() {
    let checkedAns = checkAns(); // Get the user's selected answer

    // Check if the answer is correct and increment the score
    if (checkedAns == data[num].ans) {
        score++;
    }
    num++; // Move to the next question
    disSelect(); // Deselect all options for the next question

    // If there are more questions, update the question and options
    if (num < data.length) {
        question.innerHTML = data[num].Q;
        option1.innerHTML = data[num].a;
        option2.innerHTML = data[num].b;
        option3.innerHTML = data[num].c;
        option4.innerHTML = data[num].d;
    } else {
        // If all questions are answered, display the final score
        myScore.innerHTML = `You Scored ${score}/${data.length} <br/><br/>
        <button onclick="location.reload()">Play Again</button>`; // Replay button

        nextBtn.style.display = "none"; // Hide the "Next" button
        document.querySelector(".btn").style.backgroundColor = "lightBlue"; // Style adjustment
    }
}

    
      

   
