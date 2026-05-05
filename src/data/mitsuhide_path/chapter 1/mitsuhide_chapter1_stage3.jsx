export const mitsuhide_chapter1_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Battle of Nagara River",
    stageImage: "assets/stages/mitsuhide_chapter1_stage3.webp",
    objectives: [
        { 
            name: "Unexpected Reinforcements", 
            description: <span>Rendezvous with <span className='ally-style'>Nobunaga Oda</span>.</span>
        },
        { 
            name: "The Nagara River's Guards", 
            description: <span>Defeat <span className='enemy-style'>Dochin Takegoshi</span> and <span className='enemy-style'>Hironari Hineno</span>.</span>,
            tips: 'After meeting up with Nobunaga, you will be tasked with crossing the Nagara River. As you make your way across, you will be ambushed by Dochin and Hironari. Defeat them to continue on with the stage.'
        },
        { 
            name: "The Meddling Three of Mino", 
            description: <span>Defeat <span className='enemy-style'>Ittetsu Inaba</span>, <span className='enemy-style'>Morinari Ando</span>, and <span className='enemy-style'>Bokuzen Ujiie</span>.</span>
        },
        { 
            name: "A Tribute to Our Lord", 
            description: <span>Defeat <span className='enemy-style'>Hanbei Takanaka</span> and <span className='enemy-style'>Yoshitatsu Saito</span>.</span>
        },
        { 
            name: "To Create a Diversion", 
            description: <span>Defeat the <span className='enemy-style'>enemy troops</span> at the <span className="place-style">Central Garrison</span>.</span>
        },
        { 
            name: "The Noblewoman and Mighty Men of Mikawa", 
            description: <span>Defeat <span className='enemy-style'>Sena</span> and <span className='enemy-style'>Ieyasu Tokugawa</span> to reach the <span className="place-style">retreat point</span>.</span>
        },

        // Bonus Objectives
        { 
            type: "bonus",
            name: "Obstruction on the Cliff", 
            description: <span>Defeat the <span className='enemy-style'>archers</span>.</span>,
            tips: 'Southwest of your initial starting position, there\'s a cliff with archer captains on top. Approach them to trigger this objective'
        },
        { 
            type: "bonus",
            name: "Continuing on the Mountain Path", 
            description: <span>Defeat the <span className='enemy-style'>enemy troops</span> at the <span className="place-style">Northwestern Garrison</span>.</span>,
            tips: 'At the beginning of the stage you can travel directly west to the northwest garrison. Once inside, you should trigger this objective'
        },
        { 
            type: "bonus",
            name: "The Path to Kiyosu", 
            description: <span>Defeat <span className='enemy-style'>Mataichi Sengoku</span> and <span className='enemy-style'>Mondo Hayashi</span> to open a path to the <span className="place-style">retreat point</span>.</span>,
            tips: 'After defeating Hanbei during "A Tribute to Our Lord", company will arrive and the gates in the central map will open. Approach these guys to trigger the objective'
        },
        { 
            type: "bonus",
            name: "My Lord's Momento", 
            description: <span>Defeat <span className='enemy-style'>Motonobu Okabe</span> and <span className='enemy-style'>Yasutomo Ashina</span> to prevent <span className="ally-style">Noh</span> from being taken out.</span>,
            tips: 'After defeating Hanbei during "A Tribute to Our Lord", company will arrive and gates along the central map will open. In the southwestern corner Okabe will encounter Noh. The objective should trigger when this happens'
        },
 
        // Special Objectives
        { 
            type: "special",
            name: "Arrows in Tokai", 
            description: <span>Defeat <span className='enemy-style'>Yoshimoto Imagawa</span>.</span>,
            tips: 'Approach Yoshimoto in the southwest to trigger this objective. This needs to be done before "Noblewoman and the Might Men OF Mikawa" is completed. It also has a two minute time limit'
        },
    ],
}