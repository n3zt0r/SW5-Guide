export const nobunaga_chapter6_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "Mayhem",
    stageImage: 'assets/stages/nobunaga_chapter6_stage2.webp',
    objectives: [
        { 
            name: "Rebellion",
            description: <span>Defeat.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            type: "bonus",
            name: "Attack", 
            description: <span>Prevent.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            type: "special",
            name: "Okazaki", 
            description: <span>Prevent.</span>,
            tips: ''
        },
    ],

    /*
    rareWeapon: {
        name: "Daikokuten's Mallet",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }
    */
}