export const nobunaga_chapter4_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "Battle of Makishima Castle",
    stageImage: 'assets/stages/nobunaga_chapter4_stage4.webp',
    objectives: [
        { 
            name: "The Path to Makishima Castle",
            description: <span>Defeat Tomomichi Iwanari and Fujitaka Hosokawa to open the gate to Makishima Castle.</span>,
            tips: ''
        },
        { 
            name: "Breaching the Outer Gates",
            description: <span>Defeat the enemy troops surrounding Makishima Castle to open the Makishima Castle Gate.</span>,
            tips: ''
        },
        { 
            name: "Mitsubuchi's Resolve",
            description: <span>Defeat Fujihide Misubuchi.</span>,
            tips: ''
        },
        { 
            name: "Tracking Magoichi",
            description: <span>Find and defeat Magoichi Saika.</span>,
            tips: ''
        },
        { 
            name: "Crushing the Saika Mercenary Base",
            description: <span>Defeat all the Captains of the Guard to prevent the appearance of the Saika Mercenary Officers.</span>,
            tips: ''
        },
        { 
            name: "The Castle Stained Crimson",
            description: <span>Escort Sandayu Momochi to Makishima Castle, and get ready for a fire attack.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "The Threat Lurks Behind", 
            description: <span>Defeat Terusuke Hino.</span>,
            tips: 'At the very beginning of the stage, find Hidemasa Ueno. To the east of him, there\'s a red X. Behind that red X is a garrison full of archers. Take 2P and run into that garrison and wait until you "discover" Terusuke Hino in there'
        },
        { 
            only: "",
            type: "bonus",
            name: "Bringing Down the Enemy's Defenses", 
            description: <span>Defeat the archer captains.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "Guns without Bullets", 
            description: <span>Defeat the supply soldiers carrying ammunition to the Northern Garrison.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            type: "special",
            name: "Momochi's Escort", 
            description: <span>Hurry and defeat the Saika Mercenaries while they're still far away. Don't let them get near Sandayu Momochi.</span>,
            tips: 'This one should be fairly straightforward. It might be a good idea to camp a character where Terusuke Hino was. That way you can ambush the northern rifleman that comes running toward Sandayu'
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