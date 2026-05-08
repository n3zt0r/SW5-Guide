export const mitsuhide_chapter2_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Defense",
    stageImage: 'assets/stages/mitsuhide_chapter2_stage1.webp',
    objectives: [
        { 
            name: "Defeat", 
            description: <span>Defeat.</span>,
            tips: ""
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Work", 
            description: <span>Work.</span>,
            tips: ""
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Prevent", 
            description: <span>Prevent.</span>,
            tips: ""
        },
    ],
    
    /*
    rareWeapon: {
        name: "Daikokuten",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }
    */
}