import { GamePath, imgaeList, gameList } from "../interface";
import { setCurrentStep } from "../main";
import { gamePage } from "./renderFunctions";
import { gsap } from "gsap";
/* -----------------------------get imagebyid --------------------------------------------- */


export function getImageById(id: number, audio?: string) {
    
    const foundImg = imgaeList.find(image => image.id == id);
    
    const img = document.createElement("img");
    img.classList.add(foundImg!.class!)
    img.src = foundImg!.src!
    
    if(audio){
        let  spin = gsap.to(".fredrik-face-img", { duration: 0.5, ease: "none", x: -1000, delay: 0, repeat: -1, paused: true});
        
        
        img.addEventListener("mouseenter", function( event ) {
            buttonSound(audio)
            spin.play()

        }, false);
        img.addEventListener("mouseleave", function( event ) {
            btnSound.pause()
            spin.restart()
            spin.pause()

        }, false); 

    }


    return img

}

export function getGameStep(id: number): GamePath {
    return gameList.find(gamePath => gamePath.id == id)!
}




/* -----------------------------TIMER --------------------------------------------- */



export function questionTimer(elem: HTMLDivElement) {
    // questionSound()
    resertTimer()
    var timerId = setInterval(countdown, 1000);
    var timeLeft = 500;
    
    function countdown() {

        if (timeLeft == 0) {
            clearTimeout(timerId);
            doSomething();
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }
    function resertTimer(){
        timeLeft = 0
        clearInterval(timerId);
    }


}

function doSomething() {
    let nextStep = getGameStep(12!)
    setCurrentStep(nextStep)
    gamePage()
    
   
}
/* -----------------------------SOUND --------------------------------------------- */
function questionSound() {
    var audio = new Audio('../src/assets/sound/jeopardy-themelq.mp3');
    
    audio.pause();
    audio.currentTime = 0;
    audio.play();

}
var btnSound = new Audio();

export function buttonSound(sound: string) {
    
    btnSound.src = sound
    btnSound.pause();
    btnSound.currentTime = 0;
    btnSound.play();
    
}


