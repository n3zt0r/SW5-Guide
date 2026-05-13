// import image from 'assets/stages/mitsuhide_chapter4_stage3.webp';

export const mitsuhide_chapter4_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Battle of Makishima Castle",
    // stageImage: image,
    objectives: [
        { 
            name: "The Path to Makishima Castle", 
            description: <span>Defeat Tomomichi Iwanari and Fujikata Hosokawa to open the gate to Makishima Castle.</span>,
            tips: ''
        },
        { 
            name: "Breaching the Outer Gates", 
            description: <span>Defeat the enemy troops surrounding Makishima Castle to open the Makishima Castle gate.</span>,
            tips: ''
        },
        { 
            name: "Mitsubuchi's Resolve", 
            description: <span>Defeat Fujihide Mitsubuchi.</span>,
            tips: ''
        },
        { 
            name: "Tracking Down Magoichi", 
            description: <span>Find and defeat Magoichi Saika.</span>,
            tips: ''
        },
        { 
            name: "Crushing the Saika Mercenary Base", 
            description: <span>Defeat all the Captains of the Guard to prevent the appearance of Saika Mercenary Officers.</span>,
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
            name: "Truth Shrouded in Gunsmoke", 
            description: <span>Defeat the Saika Mercenary Rifle Captains.</span>,
            tips: 'After defeating a couple targets in "Tracking Down Magoichi", you should hear some dialogue from Magoichi that says, "Let\'s deploy the rest of the riflemen." You will then get a notification of Riflemen being deployed. Check your Log to see the locations and approach them to trigger this objective'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Momochi's Escort", 
            description: <span>Hurry and defeat the Saika Mercenaries while they're still far away. Don't let them get near Sandayu Momochi.</span>,
            tips: 'This one should be fairly straightforward. It might be a good idea to camp a character where Terusuke Hino was. That way you can ambush the northern rifleman that comes running toward Sandayu'
        },
    ],
    
    /*
    rareWeapon: [{
        name: "Daikokuten",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }]
    */
}