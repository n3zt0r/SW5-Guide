export const nobunaga_chapter2_stage5 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 5",
    stageName: "Battle To Build Sunomata Castle",
    stageImage: 'assets/stages/nobunaga_chapter2_stage5.webp',
    objectives: [
        { 
            name: "The Battle to Erect Sunomata Castle 1",
            description: <span>Secure your supplies by escorting supply captain to Sunomata.</span>
        },
        { 
            name: "The Battle to Erect Sunomata Castle 2",
            description: <span>Secure your personnel by escorting engineer captains to Sunomata.</span>
        },
        { 
            name: "Pelting Down",
            description: <span>Defeat Yorimoto Toki and his allies to complete Sunomata Castle.</span>
        },
        { 
            name: "One Thing After Another",
            description: <span>Defeat Michitoshi Nagai and his allies to defend Sunomata Castle.</span>
        },
        
        // Bonus Objectives
        { 
            only: "hideyoshi_hashiba",
            type: "bonus",
            name: "Getting Ahead", 
            description: <span>Hideyoshi Hashiba must defeat the enemy troops.</span>
        },
        { 
            type: "bonus",
            name: "The Joy of Castle Building", 
            description: <span>Defeat the enemy troops to the north of the Oda Main Camp to advance the front line.</span>,
            tips: 'Trigger is tricky. When escorting, defeat Endo and Takei that are attacking the captains. Do not escort any further until you hear Sandayu comment on clearing the north',
        },
        { 
            only: "sendayu_momochi",
            type: "bonus",
            name: "Defend It With Your Life", 
            description: <span>Sendayu Momochi must defeat the enemy troops surrounding Sunomata Castle to deploy the shield soldiers.</span>
        },

        // Special Objectives
        { 
            type: "special",
            name: "When No One's Home", 
            description: <span>Defeat Ittetsu Inaba, Bozuken Ujiie, and Morinari Ando.</span>
        },
    ],

    rareWeapon: {
        name: "Sakura Princess",
        description: <span>S Rank all with <span className="ally-style">Hideyoshi Hashiba</span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 5-6, Arioka Castle, with Hanbei Takenaka'
    }
}