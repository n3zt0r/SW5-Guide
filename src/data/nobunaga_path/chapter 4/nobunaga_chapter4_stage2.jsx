export const nobunaga_chapter4_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "Battle of Anegawa River",
    stageImage: 'assets/stages/nobunaga_chapter4_stage2.webp',
    objectives: [
        { 
            name: "Demon Shibata's Pride",
            description: <span>Defeat Katsuiie Shibata and his allies.</span>,
            tips: ''
        },
        { 
            name: "Clash at Anegawa River",
            description: <span>Defeat the enemy troops to secure the front line.</span>,
            tips: ''
        },
        { 
            name: "Quickly and Carefully",
            description: <span>Defeat Kagenori Asakura, Naotaka Magara, and Naozumi Magara before the Asakura Army notices you.</span>,
            tips: ''
        },
        { 
            name: "Cornering Yoshikage",
            description: <span>Defeat Kagetake Asakura and his allies to advance toward the Asakura Main Camp.</span>,
            tips: ''
        },
        { 
            name: "The Azai's Raid",
            description: <span>Prevent Naotsune Endo and Naoyori Shinjo from infiltrating the Oda Main Camp.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "For Reinforcements", 
            description: <span>Defeat Naotaka Nomura and Hidetoshi Onogi to clear a path for the reinforcements.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "The Mercenary's Shadow", 
            description: <span>Defeat all the Saika Mercenaries to minimize ally losses.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "Azai-Asakura Army Reinforcements", 
            description: <span>Defeat the enemy troops in the Central Battlefield to secure the front line.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "A Mercenary's Clutches", 
            description: <span>Defeat Magoichi Saika before he approaches Nobunaga Oda.</span>,
            tips: 'Replaces "A Mercenary\'s Job" ( ↓ )'
        },
        { 
            only: "nobunaga_oda",
            type: "bonus",
            name: "A Mercenary's Job", 
            description: <span>Defeat Magoichi Saika.</span>,
            tips: 'Replaces "A Mercenary\'s Clutches" ( ↑ )'
        },

        // Special Objectives
        { 
            type: "special",
            name: "A Wife's Feelings", 
            description: <span>Defeat Oichi.</span>,
            tips: ''
        },
    ],

    rareWeapon: {
        name: "Divine Power",
        description: <span>S Rank all with <span className="ally-style">Mtsuki</span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 6-2, Conquest of Kai, with Yasuke'
    }
}