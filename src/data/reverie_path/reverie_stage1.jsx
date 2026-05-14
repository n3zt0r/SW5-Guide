// import image from 'assets/stages/reverie_stage1.webp';

export const reverie_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Annihilation at Okehazama",
    // stageImage: image,
    objectives: [
        { 
            name: "Preparing to Counter", 
            description: <span>Defeat Hidetoshi Oda and Morishige Sakuma to capture the Washizu Garrison and Marune Garrison.</span>,
            tips: ``,
        },
        { 
            name: "At the Top of the Okehazama Mountains", 
            description: <span>Defeat Katsuie Shibata and his allies, and prevent the ambush on Dengakuhazama.</span>,
            tips: ``,
        },
        { 
            name: "Oda or Imagawa?", 
            description: <span>Defeat Toshiie Maeda and his allies, and prevent Ieyasu Tokugawa and his allies from being taken out.</span>,
            tips: ``,
        },
        { 
            name: "Onwards to Kutsukake Castle", 
            description: <span>Defeat Kyosuke Hasegawa and Tohachi Sawaki to open the Southern Checkpoint gate.</span>,
            tips: ``,
        },
        { 
            name: "A Fool's Errand", 
            description: <span>Defeat Hideyoshi Hashiba and his allies to prevent a pincer attack.</span>,
            tips: ``,
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Readying the Defense", 
            description: <span>Escort the supply soldiers to Dengakuhazama.</span>,
            tips: ``,
        },
        { 
            only: "",
            type: "bonus",
            name: "Who's in Charge?", 
            description: <span>Defeat Narimasa Sassa and Tsuneoki Ikeda to throw the enemy into disorder.</span>,
            tips: ``,
        },
        { 
            only: "",
            type: "bonus",
            name: "To Die as a Fool", 
            description: <span>Yoshimoto Imagawa must defeat Nobunaga Oda with a Musou Frenzy Attack.</span>,
            tips: ``,
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "The Oda's Ambush", 
            description: <span>Defeat the enemy troops at Zenshoji Garrison, and prevent Noamori Ii from being taken out.</span>,
            tips: ``,
        },
    ],
    
    rareWeapon: [{
        name: "Daikokuten's Mallet",
        description: <span>S Rank all with <span className="ally-style">Yoshimoto Imagawa</span> on Hard or greater.</span>,
        tips: `Other half is on Oda 2-4, Mayhem in Mikawa, with Ieyasu Tokugawa`
    }]
}