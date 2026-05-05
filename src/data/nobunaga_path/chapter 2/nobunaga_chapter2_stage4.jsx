export const nobunaga_chapter2_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "Mayhem in Mikawa",
    stageImage: 'assets/stages/nobunaga_chapter2_stage4.webp',
    objectives: [
        { 
            name: "To Crush A Rebellion",
            description: <span>Defeat Nobumoto Mizuno and his allies to prevent Tadayu Okubo and his allies from being taken out.</span>
        },
        { 
            name: "The Pride of the Men OF Mikawa",
            description: <span>Defeat Sadayoshi Okudaira and Jinjiro Matsudaira without taking out the peasant leaders.</span>
        },
        { 
            name: "Recurring Rebellion",
            description: <span>Defeat Sadakatsu Okudaira and Chikanori Matsudaira to crush the rebellion.</span>
        },
        { 
            name: "Lady Sena's Rescue",
            description: <span>Defeat Hideyoshi Hashiba, Yoshinari Mori, and Nobushige Suzuki, to prevent Sena from being taken out.</span>
        },
        { 
            name: "Budding Romance",
            description: <span>Work with Sena to defeat Katsuiie Shibata.</span>
        },
        
        // Bonus Objectives
        { 
            type: "bonus",
            name: "Attack of the Wanderers", 
            description: <span>Prevent any wanderers from infiltrating Okazaki Castle.</span>
        },
        { 
            type: "bonus",
            name: "The Waderer's Retrun", 
            description: <span>Defeat all the wanderers to clear a path to the Southern Garrison.</span>
        },
        { 
            only: "ieyasu_tokugawa",
            type: "bonus",
            name: "The Demon Shibata and the Mighty Men OF Mikawa", 
            description: <span>Ieyasu Tokugawa must defeat Katsuiie Shibata with a Musou Attack.</span>
        },

        // Special Objectives
        { 
            type: "special",
            name: "Okazaki Castle Under Threat", 
            description: <span>Prevent Sadatomo Okudaira and Takekiyo Miyake from infiltrating Okazaki Castle.</span>
        },
    ],

    rareWeapon: {
        name: "Daikokuten's Mallet",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }
}