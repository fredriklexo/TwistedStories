import { GamePath } from "./interface";

export let gameList: GamePath[] = [


    {
        id: 1,
        question: "Är du nästa super student?",
        introAudio: "../src/assets/sound/pokemon.mp3",
        answer: [
            {
                answer: "ja",
                nextpath: 2,
                input: true,
                img: [{
                    id: 4
                }]
            }



        ],
    },
    {
        id: 2,
        question: "Vad bra då kör vi tycker jag!",
        introAudio: "../src/assets/sound/oldspice.mp3",
        animation: [
            {
                id: 24,
            }
        ],
        answer: [
            {
                answer: "Lets go!",
                nextpath: 3,
 
            },
            {
                answer: "Nä vi skiter i det här",
                nextpath: 11,
            }

        ],
    },
    {
        id: 3,
        question: "En skola hjälper säkert en på vägen!?",
        introAudio: "../src/assets/sound/pain-2.mp3",
        animation: [
            {
                id: 21
            },
            {
                id: 22,
                audio: "../src/assets/sound/muu.mp3"

            }
        ],
        answer: [
            {
                answer: "Medieinstitutet",
                nextpath: 4
            },
            {
                answer: "Chalmers",
                nextpath: 12
            },
            {
                answer: "Handels",
                nextpath: 12
            },
            {
                answer: "Yrgo",
                nextpath: 12
            }

        ],
    },
    {
        id: 4,
        question: "Men vilken utbildning?",
        answer: [
            {
                answer: "Webbutvecklare inom e-handel",
                nextpath: 5,
                audio: "../src/assets/sound/tralala_1.mp3",
                img: [{
                    id: 5
                }]
            },
            {
                answer: "Front End Developer",
                nextpath: 12,
                audio: "../src/assets/sound/sexy-and-i-know-it.mp3",
                img: [{
                    id: 6
                }]
            }

        ],
    },
    {
        id: 5,
        question: "Vilken kurs är bäst?",
        introAudio: "../src/assets/sound/iprenlåten.mp3",
        animation: [{
            id: 23
        }],
        answer: [
            {
                answer: "Frontendutveckling",
                nextpath: 6
            },
            {
                answer: "Databasteknik",
                nextpath: 6
            },
            {
                answer: "Systemutveckling - ramverk",
                nextpath: 6
            }

        ],
    },
    {
        id: 6,
        question: "haha din jävla datanörd! <br> okej, vad gör man för att skriva ut saker i konsolen? ",
        introAudio: "../src/assets/sound/flea.mp3",
        animation: [{
            id: 7
        }],
        answer: [
            {
                answer: "console.dog()",
                nextpath: 12

            },
            {
                answer: "console.log()",
                nextpath: 7
            },
            {
                answer: "console.lög()",
                nextpath: 12
            },
            {
                answer: "kånsål.log()",
                nextpath: 12
            },

        ],
    },
    {
        id: 7,
        question: "Där hade du tur!<br> Vad blir z: x = 6, y = 6 <br> x * y = z ",
        introAudio: "../src/assets/sound/pinkpanther.mp3",
        animation: [
            {
                id: 8
            },
            {
                id: 9
            },
            {
                id: 10
            },
            {
                id: 11
            }

        ],
        answer: [
            {
                answer: "36",
                nextpath: 8,
                input: true
            }



        ],
    },
    {
        id: 8,
        question: 'Time to get dirty!<br>  b = "U" , e = "G" , u = "O" , g = "H" <br> x = g + b + e + u <br> vad är x? ',
        introAudio: "../src/assets/sound/barry.mp3",
        animation: [
            {
                id: 17
            },
            {
                id: 18
            }

        ],

        answer: [
            {
                answer: "hugo",
                nextpath: 9,
                input: true
            }



        ],
    },
    {
        id: 9,
        question: "Fan du är inte lika dum som du ser ut!<br> Vad är sant? ",
        introAudio: "../src/assets/sound/amore.mp3",
        animation: [
            {
                id: 19
            }

        ],
        answer: [
            {
                answer: 'let antonio = "has ananas on pizza"',
                nextpath: 12
            },
            {
                answer: 'let antonio = "ha un grosso cazzo"',
                nextpath: 10
            }

        ],
    },
    {
        id: 10,
        question: "FAAAN! Sista frågna.. <br> Hur blir man en legend i skolan? ",
        introAudio: "../src/assets/sound/heymickey.mp3",
        animation: [
            {
                id: 20
            }

        ],
        answer: [
            {
                answer: "Gör olämpliga spel?",
                nextpath: 12
            },
            {
                answer: "Gör som Martin, ta en fernet",
                nextpath: 11
            }

        ],
    },
    {
        id: 11,
        question: "GRATTIS DU ÄR NU EN SUPERSTUDENT!",
        introAudio: "../src/assets/sound/celebration.mp3",
        animation: [
            {
                id: 26
            },
            {
                id: 27
            },
            {
                id: 28
            },
            {
                id: 29
            },

        ],
        answer: [
            {
                answer: "PLAY AGIN!",
                nextpath: 1
            }

        ],
    },
    {
        id: 12,
        question: "GAME OVER ",
        introAudio: "../src/assets/sound/gameover4.mp3",
        animation: [
            {
                id: 25,
                
            }

        ],
        answer: [
            {
                answer: "PLAY AGIN!",
                nextpath: 1
            },


        ],
    },

]