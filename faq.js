const question = document.querySelectorAll(".question");

question.forEach(function(item){
    item.addEventListener("click",function(e){
        const clickedQuestion = e.currentTarget.parentElement.parentElement;
        const showAnswer = clickedQuestion.querySelector(".question-text");
        showAnswer.classList.toggle("non-hidden");
    });
    
});

const btn_1 = document.querySelector(".section-1-btn");
const btn_2 = document.querySelector(".section-2-btn");
const btn_3 = document.querySelector(".section-3-btn");

btn_1.addEventListener("click",function(){
    document.querySelector(".section-1").scrollIntoView({
        behavior: "smooth"
    });
});

btn_2.addEventListener("click",function(){
    document.querySelector(".section-2").scrollIntoView({
        behavior: "smooth"
    });
});
btn_3.addEventListener("click",function(){
    document.querySelector(".section-3").scrollIntoView({
        behavior: "smooth"
    });
});