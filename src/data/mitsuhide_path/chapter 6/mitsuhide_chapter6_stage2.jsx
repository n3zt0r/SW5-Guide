// import image from 'assets/stages/mitsuhide_chapter6_stage2.webp';

export const mitsuhide_chapter6_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "Defense",
    // stageImage: image,
    objectives: [
        {
            name: "Defeat",
            description: <span>Defeat.</span>,
            tips: ``,
        },

        // Bonus Objectives
        {
            only: "",
            type: "bonus",
            name: "Work",
            description: <span>Work.</span>,
            tips: ``,
        },

        // Special Objectives
        {
            only: "",
            type: "special",
            name: "Prevent",
            description: <span>Prevent.</span>,
            tips: ``,
        },
    ],

    /*
    rareWeapon: [
        {
            name: "Daikokuten",
            description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
            tips: `Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa`
        }
    ],
    */
};