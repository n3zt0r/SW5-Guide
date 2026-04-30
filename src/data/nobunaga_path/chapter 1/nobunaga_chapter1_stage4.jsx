import image from 'assets/stages/nobunaga_chapter1_stage4.webp';

export const nobunaga_chapter1_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "Battle of Muraki Garrison",
    stageImage: image,
    objectives: [
        { 
            name: "Breaking through the Western Garrison", 
            description: <span>Defeat <span className='enemy-style'>Yasutomo Asahina</span> and <span className='enemy-style'>Chikanori Niino</span> to break through the <span className='place-style'>Western Garrison</span>.</span> ,
            isCompleted: false
        },
        { 
            name: "Breaching the Imagawa Main Camp", 
            description: <span>Defeat <span className='enemy-style'>Sena</span> to break through the <span className='place-style'>Imagawa Main Camp</span>.</span> ,
            isCompleted: false
        },
        { 
            name: "Nobunaga Must Be Saved", 
            description: <span>Escort <span className='ally-style'>Nobunaga Oda</span> to the <span className='place-style'>retreat point</span>.</span>,
            isCompleted: false
        },

        // Bonus Objectives
        { 
            type: "bonus",
            name: "Rescuing Mitsuyasu",
            description: <span>Defeat <span className='enemy-style'>Sadamura Sugamuna</span> and <span className='enemy-style'>Kagetaka Yamada</span> before <span className='ally-style'>Mitsuyasu Akechi</span> is taken out.</span>,
            isCompleted: false
        },
        { 
            type: "bonus",
            name: "Oda Army Rescue Mission",
            description: <span>Defeat <span className='enemy-style'>Nobutada Fuji</span> and <span className='enemy-style'>Chikanaga Sekiguchi</span> to prevent <span className='ally-style'>Nobumori Sakuma</span> and <span className='ally-style'>Nobumitsu Oda</span> from being taken out.</span>,
            isCompleted: false
        },
        {
            type: "bonus",
            name: "Capturing the Southeastern Garrison",
            description: <span>Defeat <span className='enemy-style'>Naomori Ii</span> to capture the <span className='place-style'>Southeastern Garrison</span>.</span>,
            isCompleted: false
        },
        {
            type: "bonus",
            name: "Burn Your Boats",
            description: <span><span className='ally-style'>Ieyasu Tokugawa</span> must defeat <span className='enemy-style'>enemy troops</span> surrounding the <span className='place-style'>retreat point</span> in or to assist the <span className='ally-style'>allies</span> retreat.</span>,
            isCompleted: false
        },

        // Special Objectives
        {
            type: "special",
            name: "The Supreme Ruler of Tokai",
            description: <span>Defeat <span className='enemy-style'>Yoshimoto Imagawa</span>.</span>,
            tips: "On hard mode, wow, packs a punch but peaces out at 1/8 health.",
            isCompleted: false
        }
    ]
}