export const nobunaga_chapter4_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "The Scorching of Mt. Hei",
    stageImage: 'assets/stages/nobunaga_chapter4_stage3.webp',
    objectives: [
        { 
            name: "UNDEFINED",
            description: <span>UNDEFINED.</span>,
            tips: ''
        },
        { 
            name: "Northeastern Temple",
            description: <span>Defeat the enemy troops surrounding the Northeastern Temple to execute a fire attack.</span>,
            tips: ''
        },
        { 
            name: "Konponchudo Hall",
            description: <span>Defeat Shigetaka Tsuchibashi and Shigeharu Tsuchibashi to execute a fire attack.</span>,
            tips: ''
        },
        { 
            name: "A Fierce Pursuit",
            description: <span>Defeat the enemy troops.</span>,
            tips: ''
        },
        { 
            name: "The Uesugi Army Attacks",
            description: <span>Defeat the Uesugi Army officers.</span>,
            tips: ''
        },
        { 
            name: "The Man Who Shot No",
            description: <span>Defeat Magoichi Saika.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Enemy in the Training Hall", 
            description: <span>Defeat the enemy troops in the Training Hall.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "The Inner Hall and the Bell Tower", 
            description: <span>Defeat all the rifle captains in the Inner Hall and the Bell Tower.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "Relentless", 
            description: <span>Prevent all the peasant leaders from reaching the retreat point.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "Smoking Out the Enemy", 
            description: <span>Defeat Kagemochi Amakasu, Harutsuna Kaji, and Shigenaga Honjo.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            type: "special",
            name: "Dealing with the Dragon of Echigo", 
            description: <span>Defeat Kenshin Uiesugi.</span>,
            tips: 'Trigger by depleting his first health bar'
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