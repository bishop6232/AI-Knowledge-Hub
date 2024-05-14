
function changeMood() {
        const body = document.body;
        const bgColor = body.style.backgroundColor;
        const textColor = body.style.color;
      
        if (bgColor === "black" && textColor === "white") {
          //  remove dark mode if it is already active,
          body.style.backgroundColor = "";
          body.style.color = "";
          localStorage.removeItem("mode");
        } 
        else {
          // Enable dark mode
          body.style.backgroundColor = "black";
          body.style.color = "white";
          localStorage.setItem("mode", "dark");
        }
      }
      
      // Check if dark mode was  enabled after close
      const savedMode = localStorage.getItem("mode");
      if (savedMode === "dark") {
        changeMood();
      }
    
function showSummary() {
  document.getElementById("quizForm").style.display = "none";
  document.getElementById("quizSummary").style.display = "block";
 

  const answers = {
    question1: document.querySelector('input[name="question1"]:checked')?.value,
    question2: document.querySelector('input[name="question2"]:checked')?.value,
    question3: document.querySelector('input[name="question3"]:checked')?.value,
    question4: document.querySelector('input[name="question4"]:checked')?.value,
    question5: document.querySelector('textarea[name="question5"]').value
  };

  const grade = calculateGrade(answers);

  const QuestionAnswered = Object.values(answers).some(answer => answer !== undefined && answer !== '');
  if(!QuestionAnswered){
    document.getElementById("answers").style.display = "none";
  }
    document.getElementById("answers").innerHTML = `
    <p>Question 1: ${answers.question1 || 'No answer'}</p>
    <p>Correct answer: True</p>
    <p>Question 2: ${answers.question2 || 'No answer'}</p>
    <p>Correct answer: a</p>
    <p>Question 3: ${answers.question3 || 'No answer'}</p>
    <p>Correct answer: a </p>
    <p>Question 4: ${answers.question4 || 'No answer'}</p>
    <p>Correct answer: c</p>
    <p>Question 5: ${answers.question5 || 'No answer'}</p>
  `;

  document.getElementById("grade").textContent = grade;

  const emailCheckbox = document.getElementById("emailCheckbox");
  if (emailCheckbox.checked) {
    document.getElementById("emailField").style.display = "block";
  }
}

  function calculateGrade(answers) {
    let grade = 0;

    if (answers.question1 === "true") {
      grade += 2;
    }
   
    if (answers.question2 === "a") {
      grade += 2;
    } 

    if (answers.question3 === "a") {
      grade += 2;
    }

   if(answers.question4 === "c"){
    grade += 2;
   }

   if(answers.question5.trim() === '' ){
    grade += 0;
   }
   else if(answers.question5 !== ''){
    grade += 2;
   }
   
    return grade;
  }

  function showEmailField() {
    const emailCheckbox = document.getElementById("emailCheckbox");
    const emailField = document.getElementById("emailField");
   
    if (emailCheckbox.checked) {
      emailField.style.display = "block";
      document.getElementById("email").required = true;
      
    } else {
      emailField.style.display = "none";
      document.getElementById("email").required = false;
      document.querySelector(".js-askEmail").innerHTML = " ";
      emailCheckbox.style.display = "none";
    }
    document.querySelector(".firstSubmitBtn").style.display = "none";
    document.querySelector(".secondSubmitBtn").style.display = "block";
  }

  function showMessage(){
    if(emailField.value !== ''){
      document.getElementById('sent').style.display = "block";
      document.getElementById('sent').innerHTML = "Email sent";
    }
    else if(emailField.value.trim() === ''){
      document.getElementById('sent').style.display = "none";
    }
  }

  function showquestion2() {
    document.querySelector(".question1").style.display = "none";
    document.getElementById("q2").style.display = "block";
  }
  function showquestion3(){
    document.querySelector(".question2").style.display = "none";
    document.getElementById("q3").style.display = "block"
  }
  function showquestion4(){
    document.querySelector(".question3").style.display = "none";
    document.getElementById("q4").style.display = "block"
  }
  function showquestion5(){
    document.querySelector(".question4").style.display = "none";
    document.getElementById("q5").style.display = "block"
  }  
  /*
  function showquestion2(){
   const input = document.getElementById("next");
   const quest2 = document.getElementById("q2");
   input.onclick = function() {
    document.querySelector(".question1").innerHTML = " ";
    quest2.style.display = "block";
   }
}
function showquestion3(){
    const quest3 = document.getElementById("q3");
    const input = document.getElementById("next");
    input.onclick = function() {
        document.querySelector(".question2").innerHTML = "";
        quest3.style.display = "block";
       }
}
function showquestion4(){
    const quest4 = document.getElementById("q4");
    const input = document.getElementById("next");
    input.onclick = function() {
        document.querySelector(".question3").innerHTML = "";
        quest4.style.display = "block";
       }
}
function showquestion5(){
    const quest5 = document.getElementById("q5");
    const input = document.getElementById("next");
    input.onclick = function() {
        document.querySelector(".question4").innerHTML = "";
        quest5.style.display = "block";
       }
}*/
  
  