import image from 'assets/stages/nobunaga_chapter1_stage3.webp';

export const nobunaga_chapter1_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Turmoil on Mt. Inaba",
    stageImage: image,
    objectives: [
        { 
            name: "Breaking through the Siege", 
            description: <span>Defeat the <span className='enemy-style'>enemy troops</span> to break through their siege.</span> 
        },
        { 
            name: "Caged Butterfly", 
            description: <span>Defeat <span className='enemy-style'>Dochin Takegoshi</span> to assist <span className='ally-style'>No</span>'s advance.</span> 
        },
        { 
            name: "The Spider's Thread", 
            description: <span>Defeat <span className='enemy-style'>Michitoshi Nagai</span> and <span className='enemy-style'>Morinari Ando</span>.</span>
        },
        { 
            name: "Toshimitsu's Resolve",
            description: <span>Defeat <span className='enemy-style'>Toshimitsu Saito</span>.</span>
        },
        { 
            name: "In the Depths of-Darkness",
            description: <span>Defeat <span className='enemy-style'>Ittetsu Inaba</span> and <span className='enemy-style'>Bozuken Ujiie</span> to open the <span className='place-style'>wooden-floored room</span>.</span>
        },

        // Bonus Objectives
        {
            type: "bonus",
            name: "Taking Precautions",
            description: <span>Prevent <span className='enemy-style'>Mataichi Sengoku</span> from approaching <span className='ally-style'>No</span>.</span>,
            tips: "Triggers in the enclosed room just west of the assassins."
        },
        {
            type: "bonus",
            name: "The Strategist behind the Pincer",
            description: <span>Defeat <span className='enemy-style'>Hironari Hineno</span>.</span>,
            tips: "Triggers in the north central room with the large fire pit."
        },

        // Special Objectives
        {
            type: "special",
            name: "A Genius General Lurks Beneath",
            description: <span>Defeat <span className='enemy-style'>Hanbei Takanaka</span>.</span>,
            tips: "Triggers east of courtyard."
        }
    ]
}