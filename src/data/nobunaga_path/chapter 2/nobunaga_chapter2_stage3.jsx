export const nobunaga_chapter2_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Battle of Inabayama Castle",
    stageImage: 'assets/stages/nobunaga_chapter2_stage3.webp',
    objectives: [
        { 
            name: "Forward March to Sunomata Castle",
            description: <span>Defeat <span className="enemy-style">Yoshitaka Endo</span> and <span className="enemy-style">Masanori Nonomura</span> to advance toward <span className="place-style">Sunomata Castle</span>.</span>
        },
        { 
            name: "Sunomata Castle Must Not Fall",
            description: <span>Prevent <span className="ally-style">Sandayu Momochi</span> from being defeated until the allied officers arrive.</span>
        },
        { 
            name: "Yoshitatsu Struggles",
            description: <span>Defeat <span className="enemy-style">Mitsuharu Fuwa</span> and his allies.</span>
        },
        { 
            name: "The Tactician Attacks",
            description: <span>Defeat <span className="enemy-style">Michitoshi Nagai</span> and <span className="enemy-style">Sekian Tekai</span> to prevent <span className="ally-style">Hideyoshi</span> from being taken out.</span>
        },
        { 
            name: "Join Us, My Friend",
            description: <span>Defeat <span className="enemy-style">Hanbei Takanaka</span>.</span>
        },
        
        // Bonus Objectives
        { 
            type: "bonus",
            name: "Stopping the Saito Army Reinforcements", 
            description: <span>Defeat <span className="enemy-style">Hironari Hineno</span> to prevent the arrival of reinforcements.</span>
        },
        { 
            type: "bonus",
            name: "To Strike From Behind", 
            description: <span>Defeat <span className="enemy-style">Yorimoto Toki</span> and <span className="enemy-style">Naomitsu Takagoshi</span> to prevent <span className="ally-style"> Nobumori Sakuma</span> from being taken out.</span>
        },
        { 
            only: "noh",
            type: "bonus",
            name: "Farewell to the Past", 
            description: <span>Noh must beat <span className="enemy-style">Yoshitatsu Saito</span> with a <span className="place-style">Musou Attack</span>.</span>
        },

        // Special Objectives
        { 
            type: "special",
            name: "A Wavering Heart", 
            description: <span>Defeat the <span className="enemy-style">surrounding troops</span> except for <span className="enemy-style">Ittetsu Inaba</span>.</span>
        },
    ],

    /* rareWeapon: {
        name: "Virtuous",
        description: <span>S Rank all with <span className="ally-style">Toshiie Maeda</span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 4-8, Battle of Mikatagahara (Takeda), using Shingen Takeda'
    } */
}