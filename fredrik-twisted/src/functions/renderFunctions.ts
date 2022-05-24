// Start landing page
import { app } from "../main";
import { getGameStep, getImageById } from "./functions";
import { currentStep, setCurrentStep } from "../main";
import { questionTimer } from "./functions";
import { buttonSound } from "./functions";
import gsap from "gsap";



export function startPage() {
    buttonSound("../src/assets/sound/intro2.mp3")
    //container
    const container = document.createElement("div");
    container.classList.add("container")
    //row
    const row = document.createElement("div");
    row.classList.add("row")

    app.append(container);
    container.append(row,);
    row.append(getImageById(15),getImageById(16),getImageById(1), getImageById(2), getImageById(3));
    //start the game
    document.getElementsByClassName("intro-play-button")[0].addEventListener("click", function () {
        gamePage()
        
    })

}



export function gamePage() {

    app.innerHTML = ""

    //container
    const container = document.createElement("div");
    container.classList.add("container")
    //row
    let row = document.createElement("div");
    row.classList.add("row")

    if(currentStep.introAudio){
        buttonSound(currentStep.introAudio)

    }

    if(currentStep.id != 12){
        let timer = document.createElement("div");
        timer.id = "Timer";
        questionTimer(timer);
        row.append(timer)
    }

    app.append(container);
    container.append(row,);
    question(row)
    answerPath(row)
    
}

function question(row: HTMLDivElement) {

    const question_container = document.createElement("div");
    question_container.classList.add("question-container")

    const question_row = document.createElement("div");
    question_row.classList.add("question-row")

    const question_text = document.createElement("h1");
    question_text.classList.add("question-text")
    question_text.innerHTML = currentStep.question

    row.append(question_container)
    question_container.append(question_row)
    question_row.append(question_text)

    if(currentStep.animation){
        currentStep.animation.forEach(img => {
            
            question_row.append(getImageById(img.id, img.audio))
            gsap.to(".hugo-bottom", { duration: 5, ease: "none", y: -200, delay: 4 , yoyo:true, repeat:10});
            
            gsap.to(".hugo-left", { duration: 5, ease: "none", x: 200, delay: 8 , yoyo:true, repeat:10});
            gsap.to(".hugo-right", {duration: 5, ease: "none", x: -200, delay: 10 , yoyo:true, repeat:10});
            gsap.to(".hugo-middel", { duration: 2.5, ease: "bounce.in", y: 0, scaleX: 1});

            gsap.fromTo(".korv-img", { duration: 20, ease: "none", x: -1100, delay: 2 },{duration: 20, ease: "none", x: 0, delay: 2});
            gsap.to(".hugo-dance-img",{rotateY:180,repeat: -1, repeatDelay: 2, yoyo: true})
            gsap.fromTo(".martin-img", { duration: 20, ease: "none", x: -1100, delay: 2 },{duration: 20, ease: "none", x: 0, delay: 2});

        });
    }

}

function answerPath(row: HTMLDivElement) {

    const answer_container = document.createElement("div");
    answer_container.classList.add("answer-container")
    row.append(answer_container)

    const answer_row = document.createElement("div");
    answer_row.classList.add("answer-row")

    answer_container.append(answer_row)

    currentStep.answer.forEach(list => {
        if (list.input === true) {
            const awnser_input_container = document.createElement("div"); 
            awnser_input_container.classList.add("awnser-input-container")

            const form = document.createElement("form")

            const answer_input = document.createElement("input");
            answer_input.classList.add("input-text")
            answer_input.type = "text"

            const answer_submit = document.createElement("input")
            answer_submit.type = "submit"
            answer_submit.value = "Submit"

            answer_row.append(awnser_input_container)
            awnser_input_container.append(form)
            form.append(answer_input, answer_submit)
            if (list.img) {

                list.img.forEach(img => {
                    awnser_input_container.append(getImageById(img.id, list.audio!))
                });
            }
            form.addEventListener("submit", function (event) {
                event.preventDefault()
                
                if (answer_input.value.toLowerCase() == list.answer.toLowerCase()) {
                    pathContinue(list.nextpath)
                } else {
                    pathEnding()
                }
            });

            //-----------------ANSWER WITH TEXT AND IMG --------------   
        } else {
            const answer_card = document.createElement("div");
            answer_card.classList.add("answer-card")

            const answer_text = document.createElement("h1");
            answer_text.classList.add("answer-text")
            answer_text.innerHTML = list.answer

            answer_row.append(answer_card)
            answer_card.append(answer_text)
            if (list.img) {
                list.img.forEach(img => {
                    answer_card.append(getImageById(img.id, list.audio!))
                });
            }


            answer_text.addEventListener("click", function () {
                if (list.nextpath != 12) {
                    pathContinue(list.nextpath)
                }else{
                    pathEnding()
                }
  
            })

        }

    });
}

function pathEnding(){
    let nextStep = getGameStep(12)
    setCurrentStep(nextStep)
    buttonSound("../src/assets/sound/fuckedup.mp3")
    setTimeout(function() { gamePage(); }, 3000);
}

function pathContinue(nextpath:number){
    let nextStep = getGameStep(nextpath!)
    setCurrentStep(nextStep)
    gamePage()
}

