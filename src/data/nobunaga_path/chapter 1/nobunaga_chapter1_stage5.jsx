import image from 'assets/stages/nobunaga_chapter1_stage5.webp';

export const nobunaga_chapter1_stage5 = {
    id: "nobunaga_chapter1_stage5",
    stageNumber: "Stage 5",
    stageName: "Battle of Nagara River",
    stageImage: image,
    objectives: [
        { 
            name: "Father and Mitsuhide", 
            description: <span>Rendezvous with <span className='ally-style'>Mitsuhide Akechi</span> to rescue <span className='ally-style'>Dosan Saito</span>.</span> ,
            isCompleted: false
        },
        { 
            name: "The Oda's Crossing", 
            description: <span>Defeat the <span className='enemy-style'>shield soldiers</span> on the <span className='place-style'>opposite bank</span>.</span> ,
            isCompleted: false
        },
        { 
            name: "Yoshiatsu in the Way", 
            description: <span>Defeat <span className='enemy-style'>Ittetsu Inaba</span> and <span className='enemy-style'>Morinari Ando</span>.</span>,
            isCompleted: false
        },
        { 
            name: "On the Edge of Despair",
            description: <span>Defeat <span className='enemy-style'>Michikatsu Inoue</span> and <span className='enemy-style'>Michitoshi Nagai</span> to open the gates around <span className='place-style'>Sagiyama Castle</span>.</span>,
            isCompleted: false
        },
        { 
            name: "A Diversion",
            description: <span>Defeat the <span className='enemy-style'>enemy troops</span> at the <span className='place-style'>Central Garrison</span>.</span>,
            isCompleted: false
        },
        {
            name: "The Lady and the Hostage",
            description: <span>Defeat <span className='hostile-style'>Sena</span> and <span className='hostile-style'>Ieyasu Tokugawa</span> to reach the <span className='place-style'>escape point</span>.</span>,
            isCompleted: false
        },

        // Bonus Objectives
        {
            type: "bonus",
            name: "So That We May Retreat",
            description: <span>Defeat <span className='enemy-style'>Bokuzen Ujiie</span> and <span className='enemy-style'>Mataichi Sengoku</span> to open up a path to the <span className='place-style'>retreat point</span>.</span>,
            isCompleted: false
        },
        {
            type: "bonus",
            name: "Father's Ruin",
            description: <span>Defeat <span className='enemy-style'>Yoshitatsu Saito</span>.</span>,
            isCompleted: false
        },
        {
            type: "bonus",
            name: "The Strategist's Betrayal",
            description: <span>Defeat <span className='enemy-style'>Hanbei Takanaka</span>.</span>,
            isCompleted: false
        },
        {
            type: "bonus",
            name: "What He Left Behind",
            description: <span>Defeat <span className='hostile-style'>Motonobu Okabe</span> and <span className='hostile-style'>Yasutomo Asahina</span> to prevent <span className='ally-style'>No</span> from being taken out.</span>,
            isCompleted: false
        },

        // Special Objectives
        {
            type: "special",
            name: "The Supreme Ruler of Tokai",
            description: <span>Defeat <span className='hostile-style'>Yoshimoto Imagawa</span>.</span>,
            isCompleted: false
        }
    ]
}