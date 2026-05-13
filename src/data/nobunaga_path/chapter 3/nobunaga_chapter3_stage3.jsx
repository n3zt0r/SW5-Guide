export const nobunaga_chapter3_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Battle of Rokujo",
    stageImage: 'assets/stages/nobunaga_chapter3_stage3.webp',
    objectives: [
        { 
            name: "Unexpected Reinforcements",
            description: <span>Defeat Yoshikata Rokkaku and his allies.</span>,
            tips: ''
        },
        { 
            name: "A Saito Never Quits",
            description: <span>Prevent Tatsuoki Saito from approaching Yoshiaki Ashikaga.</span>,
            tips: ''
        },
        { 
            name: "Making Use of Lord Saito",
            description: <span>Defeat Masayasu Sogo and his allies, and prevent the Captains of the Guard from being taken out.</span>,
            tips: ''
        },
        { 
            name: "A Cleansing Fire",
            description: <span>Escort all the engineers to each target point to prepare a fire attack.</span>,
            tips: ''
        },
        { 
            name: "Flashy Attacks",
            description: <span>Defeat the enemy troops in the Honkokuji Western Garrison to throw the enemy into disarray.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Suspicious Movements", 
            description: <span>Prevent Sadakage Namazue from reaching the escape point.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "The Vulnerable Garrison", 
            description: <span>Defeat the enemy troops in the Honkokuji Southwestern Garrison while the enemy's defenses are weak.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "Rescuing Murashige Araki", 
            description: <span>Defeat Yasunaga Miyoshi and Akimoto Hosokawa, and prevent Murashige Araki from being taken out.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            type: "special",
            name: "Destroy Everything", 
            description: <span>Defeat all enemy officers.</span>,
            tips: ''
        },
    ],

    /*
    rareWeapon: [{
        name: "Daikokuten's Mallet",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }]
    */
}