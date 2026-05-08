export const nobunaga_chapter6_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Mayhem",
    stageImage: 'assets/stages/nobunaga_chapter6_stage3.webp',
    objectives: [
        { 
            name: "Rebellion",
            description: <span>Defeat.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Attack", 
            description: <span>Prevent.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            only: "",
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