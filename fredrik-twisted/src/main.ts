import '../src/assets/css/style.css'
import { startPage } from './functions/renderFunctions'
import { gameList, GamePath } from './interface'
import gsap from 'gsap'

export const app = document.querySelector<HTMLDivElement>('#app')!

export let currentStep: GamePath = gameList[0]


export const setCurrentStep: (nextPath: GamePath) => void = (nextPath) => {
  currentStep = nextPath

}

function initSite() {
  startPage()
  
  gsap.to(".intro-left", { duration: 10, ease: "none", x: -1000 , delay: 4});
  gsap.to(".intro-right", { duration: 10, ease: "none", x: +1000, delay: 4 });
  gsap.from(".super-fredrik", { duration: 5, ease: "none", x: -1000, delay: 4 });

}


window.addEventListener("load", initSite);