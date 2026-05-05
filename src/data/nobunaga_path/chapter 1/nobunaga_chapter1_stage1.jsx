import image from 'assets/stages/nobunaga_chapter1_stage1.webp';

export const nobunaga_chapter1_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Raid on the Imagawa",
    stageImage: image,
    objectives: [
        { 
            name: "The Battle Begins",
            description: <span>Defeat the <span className='enemy-style'>Enemy Troops</span></span>
        },
        { 
            name: "Heihachiro's Brave Fight", 
            description: <span>Defeat <span className='enemy-style'>Tadakatsu Honda</span>.</span>
        },
        { 
            name: "Imagawa Reinforcements", 
            description: <span>Defeat <span className='enemy-style'>Motonobu Okabe</span> and <span className='enemy-style'>Yasuyoshi Asishina</span>.</span>
        },
        { 
            name: "Ninja and the Noblewoman", 
            description: <span>Defeat <span className='enemy-style'>Sena</span> and <span className='enemy-style'>Hanzo Hattori</span> to prevent <span className='ally-style'>Nobuyuki Oda</span> and <span className='ally-style'>Katsuie Shibata</span> from being taken out.</span>
        },

        // Special Objectives
        { 
            type: "special",
            name: "Mikawa Wavers", 
            description: <span>Defeat <span className='enemy-style'>Hirotada Matsudaira</span> and <span className='enemy-style'>Masanari Naito</span>.</span>
        }
    ],
}