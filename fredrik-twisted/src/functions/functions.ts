import { GamePath, ImageType } from "../interface";
import { setCurrentStep } from "../main";
import { gamePage } from "./renderFunctions";
import { gsap } from "gsap";
import { gameList } from "../gamepath";



// ----------------------list for image -------------------------------
var imgaeList: ImageType[] = [
    //intro
    { id: 15, class: "intro-left", src: "../src/assets/image/intro.png" },
    { id: 16, class: "intro-right", src: "../src/assets/image/intro.png" },
    { id: 1, class: "the-super-student-text", src: "../src/assets/image/THE-SUPER-STUDENT.gif" },
    { id: 2, class: "super-fredrik", src: "../src/assets/image/super-fred.gif" },
    { id: 3, class: "intro-play-button", src: "../src/assets/image/PLAY.png" },
    //path 1
    { id: 4, class: "fredrikmon-gif", src: "../src/assets/image/say-hi-pikachu.gif" },
    //path 2
    { id: 24, class: "viktor-img", src: "../src/assets/image/viktor.jpg" },
    //path 3
    { id: 22, class: "kossa-img", src: "../src/assets/image/kossa.png" },
    { id: 21, class: "fredrik-face-img", src: "../src/assets/image/fredrik-face.png" },
    //path 4
    { id: 5, class: "virre-gif", src: "../src/assets/image/virre.gif" },
    { id: 6, class: "david-gif", src: "../src/assets/image/david.gif" },
    //path 5
    { id: 23, class: "iprenjulle-gif", src: "../src/assets/image/iprenjulle.gif" },
    //path 6
    { id: 7, class: "img-bottom", src: "../src/assets/image/dankies-pepe.gif" },
    //path 7
    { id: 8, class: "hugo-bottom", src: "../src/assets/image/hugo.png" },
    { id: 9, class: "hugo-left", src: "../src/assets/image/hugo.png" },
    { id: 10, class: "hugo-right", src: "../src/assets/image/hugo.png" },
    { id: 11, class: "hugo-middel", src: "../src/assets/image/hugo.png" },
    //path 8
    { id: 17, class: "korv-img", src: "../src/assets/image/korv.png" },
    { id: 18, class: "brod-img", src: "../src/assets/image/brod.png" },
    //path 9
    { id: 19, class: "hugo-dance-img", src: "../src/assets/image/hugo-dance.gif" },
    //path 10
    { id: 20, class: "martin-img", src: "../src/assets/image/martin-martin.png" },
    //game over
    { id: 25, class: "donald-gif", src: "../src/assets/image/donald.gif" },
    //Win 
    { id: 26, class: "balloon1", src: "../src/assets/image/balloon.gif" },
    { id: 27, class: "balloon2", src: "../src/assets/image/balloon2.gif" },
    { id: 28, class: "win-png", src: "../src/assets/image/win.png" },
    { id: 29, class: "balloon3", src: "../src/assets/image/balloon.gif" },

];

/* -----------------------------get imagebyid --------------------------------------------- */


export function getImageById(id: number, audio?: string) {

    const foundImg = imgaeList.find(image => image.id == id);

    const img = document.createElement("img");
    img.classList.add(foundImg!.class!)
    img.src = foundImg!.src!

    if (audio) {
        let spin = gsap.to(".fredrik-face-img", { duration: 1, ease: "none", x: -1000, delay: 0, repeat: -1, paused: true });


        img.addEventListener("mouseenter", function (event) {
            buttonSound(audio)
            spin.play()

        }, false);
        img.addEventListener("mouseleave", function (event) {
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
/* ----------------------------- Path --------------------------------------------- */
export function pathEnding() {
    let nextStep = getGameStep(12)
    setCurrentStep(nextStep)
    buttonSound("../src/assets/sound/fuckedup.mp3")
    setTimeout(function () { gamePage(); }, 3000);
}

export function pathContinue(nextpath: number) {
    let nextStep = getGameStep(nextpath!)
    setCurrentStep(nextStep)
    gamePage()
}




/* -----------------------------SOUND --------------------------------------------- */

var btnSound = new Audio();

export function buttonSound(sound: string) {

    btnSound.src = sound
    btnSound.pause();
    btnSound.currentTime = 0;
    btnSound.play();

}


export function animation() {
    gsap.to(".hugo-bottom", { duration: 5, ease: "none", y: -300, delay: 4, yoyo: true, repeat: 10 });

    gsap.to(".hugo-left", { duration: 5, ease: "none", x: 550, delay: 8, yoyo: true, repeat: 10 });
    gsap.to(".hugo-right", { duration: 5, ease: "none", x: -200, delay: 10, yoyo: true, repeat: 10 });
    gsap.to(".hugo-middel", { duration: 7, ease: "none", x: 1920, delay: 15, yoyo: true, repeat: 10 });
    gsap.fromTo(".iprenjulle-gif", { scaleX: 0, scaleY: 0 }, { delay: 1, duration: 2.5, ease: "bounce.out", scaleX: 1, scaleY: 1, });
    gsap.fromTo(".viktor-img", { scaleX: 0, scaleY: 0 }, { delay: 1, duration: 25, ease: "none", scaleX: 1, scaleY: 1, });
    gsap.fromTo(".korv-img", { duration: 20, ease: "none", x: -1200, delay: 2 }, { duration: 30, ease: "none", x: 0, delay: 2 });
    gsap.to(".hugo-dance-img", { rotateY: 180, repeat: -1, repeatDelay: 2, yoyo: true })
    gsap.fromTo(".martin-img", { duration: 20, ease: "none", x: -1100, delay: 2 }, { duration: 20, ease: "none", x: 0, delay: 2 });

    gsap.to(".balloon1", { duration: 2, ease: "none", y: -1920, delay: 0.5, repeat: -1 });
    gsap.to(".balloon2", { duration: 2, ease: "none", y: -1920, delay: 1, repeat: -1 });
    gsap.to(".balloon3", { duration: 2, ease: "none", y: -1920, delay: 1.5, repeat: -1 });
}