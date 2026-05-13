// import image from 'assets/stages/mitsuhide_chapter2_stage3.webp';

export const mitsuhide_chapter2_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Joint Struggle with the Uesugi",
    // stageImage: image,
    objectives: [
        { 
            name: "A Firm Foothold", 
            description: <span>Defeat the enemy troops.</span>,
            tips: ''
        },
        { 
            name: "Shingen Smiles", 
            description: <span>Defeat Shingen Takeda.</span>,
            tips: ''
        },
        { 
            name: "Threats from Both Sides", 
            description: <span>Defeat Kansuke Yamamoto and Nobufusa Baba to prevent the enemy's pincer attack.</span>,
            tips: ''
        },
        { 
            name: "The Calvary's Ambush", 
            description: <span>Protect the Uesugi Main Camp by defeating Masakage Yamagata and Toramitsu Oyamada.</span>,
            tips: ''
        },
        { 
            name: "Advance the Front Line!", 
            description: <span>Defeat Masatoshi Hoshina, Katsusuke Atobe, and Nobutane Asari to advance the Uesugi Army's front line.</span>,
            tips: ''
        },
        { 
            name: "The Takeda Army Strikes", 
            description: <span>Defeat Nobukado Takeda and Torasada Morozumi.</span>,
            tips: ''
        },
        { 
            name: "Gate to the Tiger of Kai", 
            description: <span>Defeat Nobutada Anayama and Masatomo Aiki to open the Takeda Main Camp gate.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Provisions Go Unprovided", 
            description: <span>Hurry and defeat Masatoyo Naito to prevent the enemy from transporting their provisions.</span>,
            tips: 'Just approach these guys in the central southern garrison at the beginning of stage'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Sounds of Warhorses", 
            description: <span>Defeat all the cavalry captains.</span>,
            tips: 'In the north central area, there\'s a yellow X that can be opened by defeating guard captain'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Schemer", 
            description: <span>Defeat Masanobu Kosaka and Nobuari Oyamada.</span>,
            tips: 'These guys are in the southeastern garrison. You can get access to it after "Advance the Front Lines" starts'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Nobushige's Plan", 
            description: <span>Defeat Nobushige Takeda to stop the ambush.</span>,
            tips: 'Trigger after "Advance the Front Lines" by moving northeast. Defeating the guard captain in front of the garrison with a yellow X will open the way to Nobushige'
        },
    ],
    
    rareWeapon: [{
        name: "The Great Serpent Slayer",
        description: <span>S Rank all with <span className="ally-style">Nobunaga Oda</span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 6-3, Honnoji, using Nobunaga Oda'
    }]
}