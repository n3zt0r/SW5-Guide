import image from 'assets/stages/nobunaga_chapter1_stage2.webp';

export const nobunaga_chapter1_stage2 = {
    id: "nobunaga_chapter1_stage2",
    stageNumber: "Stage 2",
    stageName: "Assault on Mino",
    stageImage: image,
    objectives: [
        { 
            name: "Gaining a Foothold", 
            description: <span>Defeat <span className='enemy-style'>Michikatsu Inoue</span> to capture the <span className='place-style'>Central Garrison</span>.</span>,
            isCompleted: false
        },
        { 
            name: "The Foolish and the Stubborn", 
            description: <span>Defeat <span className='enemy-style'>Mitsuhide Akechi</span>.</span> ,
            isCompleted: false
        },
        { 
            name: "The Viper's Trap", 
            description: <span>Defeat <span className='enemy-style'>Toshimitsu Saito</span> to defend the <span className='place-style'>Oda Main Camp</span>.</span>,
            isCompleted: false
        },
        { 
            name: "We Three of Mino",
            description: <span>Defeat <span className='enemy-style'>Ittetsu Inaba</span>, <span className='enemy-style'>Morinari Ando</span>, and <span className='enemy-style'>Bokuzen Ujiie</span>.</span>,
            isCompleted: false
        },
        { 
            name: "The Young Strategist",
            description: <span>Defeat <span className='enemy-style'>Hanbei Takenaka</span>.</span>,
            isCompleted: false
        },
        {
            name: "Echoes on the Battlefield",
            description: <span>Defeat <span className='enemy-style'>Mitsuhara Fuwa</span> and the <span className='enemy-style'>Drum corps</span>.</span>,
            isCompleted: false
        },
        {
            name: "Rematch",
            description: <span>Defeat <span className='enemy-style'>Mitsuhide Akechi</span>.</span>,
            isCompleted: false
        },
        
        // Bonus Objectives
        {
            type: "bonus",
            name: "Nobuyuki's Struggle",
            description: <span>Defeat <span className='enemy-style'>Michitoshi Nagai</span> and the <span className='enemy-style'>spear captains</span>.</span>,
            isCompleted: false
        },

        // Special Objectives
        {
            type: "special",
            name: "Yoshitatsu the Opportunist",
            description: <span>Prevent <span className='enemy-style'>Yoshitatsu Saito</span> from infiltrating the <span className='place-style'>Oda Main Camp</span>.</span>,
            isCompleted: false
        }
    ]
}