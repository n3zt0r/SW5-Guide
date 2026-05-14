export const nobunaga_chapter5_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Battle of Nagashino",
    stageImage: 'assets/stages/nobunaga_chapter5_stage1.webp',
    objectives: [
        { 
            name: "Holding the Front Lines",
            description: <span>Defeat Motonobu Okabe and his allies to prevent Nagahide Niwa and his allies from being taken out.</span>,
            tips: ''
        },
        { 
            name: "The Back Road",
            description: <span>Defeat Masateru Sanada, Nobuchika Komiyama, and Morimitsu Saegusa to capture the Nakayama Garrison.</span>,
            tips: ''
        },
        { 
            name: "To Save Face",
            description: <span>Work with Katsuie Shibata to defeat all the Takeda Cavalry Captains.</span>,
            tips: 'Replaces "The Cavalry Moves Out"'
        },
        { 
            name: "To Nagashino Castle",
            description: <span>Defeat Nobutada Anayama and Masasada Saegusa to capture the Tobigasu Garrison.</span>,
            tips: ''
        },
        { 
            name: "The Calvary Strikes",
            description: <span>Defeat Masakage Yamagata and his allies, and the Takeda Cavalry.</span>,
            tips: ''
        },
        { 
            name: "Red Clad Warriors",
            description: <span>Defeat Katsuyori Takeda.</span>,
            tips: ''
        },
        { 
            name: "Saving Nagashino Castle",
            description: <span>Defeat Masazumi Kosaka, Nobukado Takeda, and Nobuzane Kawakubo to prevent Nobumasa Okudaira from being taken out.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "katsuie_shibata",
            type: "bonus",
            name: "The Cavalry Moves Out", 
            description: <span>Defeat all the Takeda Cavalry Captains, and prevent the rifle captains from being taken out.</span>,
            tips: 'Replaces "To Save Face'
        },
        { 
            type: "bonus",
            name: "Procuring Provisions", 
            description: <span>Defeat Masatsune Tsuchiya and Katsusuke Atobe to steal the Takeda Army's provisions.</span>,
            tips: 'Triggers by approaching the garrison in the southeast corner of the map'
        },
        { 
            type: "bonus",
            name: "A Cry for Help", 
            description: <span>Defeat Nobuyasu Amari, and prevent Sune'emon Torii from being taken out.</span>,
            tips: ''
        },
        { 
            type: "bonus",
            name: "The Unwanted Rendezvous", 
            description: <span>Prevent Shingen Takeda and Masanobu Kosaka from rendezvousing.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            type: "special",
            name: "The Palisade Threatened", 
            description: <span>Prevent the engineer captains from reaching the Palisade.</span>,
            tips: 'These guys come from the westernmost northern guarded access point, near Hanzo'
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