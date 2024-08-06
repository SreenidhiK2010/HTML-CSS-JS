const qns = [
    {
        question:"Which is the fastest animal in the world?",
        answers:[
            { text:"Cheetah", correct:true },
            { text:"Tiger", correct:false },
            { text:"Horse", correct:false },
            { text:"Leopard", correct:false },

        ]
    },{
        question:"Which is the smallest continent in the world?",
        answers:[
            { text:"Asia", correct:false },
            { text:"Africa", correct:false },
            { text:"Australia", correct:true },
            { text:"Antartica", correct:false },
        ]
    },{
        question:"Which is the Largest state in India?",
        answers:[
            { text:"Madhya Pradesh", correct:false },
            { text:"Rajastan", correct:true },
            { text:"Gujarat", correct:false },
            { text:"Karnataka", correct:false },
        ]
    },{
        question:"What is the most common element in the Earth's atmosphere?",
        answers:[
            { text:"Nitrogen", correct:true },
            { text:"Oxygen", correct:false },
            { text:"Carbon dioxide", correct:false },
            { text:"Helium", correct:false },
        ]
    },{
        question:"Which is the smallest city in the world?",
        answers:[
            { text:"Toronto", correct:false },
            { text:"Berlin", correct:false },
            { text:"Tokyo", correct:false },
            { text:"Vatican city", correct:true },

        ]
    },
    {
        question:"Which planet is known as red planet?",
        answers:[
            { text:"Jupiter", correct:false },
            { text:"Saturn", correct:false },
            { text:"Venus", correct:false },
            { text:"Mars", correct:true },

        ]
    },{
        question:"Which is the Largest ocean on world?",
        answers:[
            { text:"Atlantic Ocean", correct:false },
            { text:"Pacific Ocean", correct:true },
            { text:"Indian Ocean", correct:false },
            { text:"Arctic Ocean", correct:false },

        ]
    },{
        question:"Who painted Mono Lisa?",
        answers:[
            { text:"TVincent van Gogh", correct:false },
            { text:" Pablo Picasso", correct:false },
            { text:"Claude Monet", correct:false },
            { text:"Leonardo da Vinci", correct:true },

        ]
    },{
        question:"Which country is known as the Land of the Rising Sun??",
        answers:[
            { text:"Japan", correct:true },
            { text:"China", correct:false },
            { text:"Thailand", correct:false },
            { text:"South Korea", correct:false },

        ]
    },{
        question:"What is the hardest natural substance on Earth?",
        answers:[
            { text:"Gold", correct:false },
            { text:"Iron", correct:false },
            { text:"Platinum", correct:false },
            { text:"Diamond", correct:true },

        ]
    }
];
const questionEle = document.getElementById("question");
const btn = document.getElementById("btn");
const nextbtn = document.getElementById("next");

let currentIndex = 0;
let score = 0;
function startQuiz(){
    currentIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQn = qns[currentIndex];
    let qnNo = currentIndex + 1;
    questionEle.innerHTML = qnNo + "." + currentQn.question;
     
    currentQn.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ans.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });

}
function resetState(){
    nextbtn.style.display = "none";
    while(ans.firstChild){
        ans.removeChild(ans.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
     }else{
        selectedBtn.classList.add("incorrect");

     }
     Array.from(ans.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";

     });
     nextbtn.style.display = "block";
}
function showScore(){
    resetState();
    questionEle.innerHTML = `You scored ${score} out of ${qns.length}!`;
    nextbtn.innerHTML = " Play Again";
    nextbtn.style.display = "block";
}
function handleNextButton(){
    currentIndex++;
    if(currentIndex < qns.length){
        showQuestion();
    }else{
        showScore(); 
    }
}
nextbtn.addEventListener("click",()=>{
    if(currentIndex < qns.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})



startQuiz();

