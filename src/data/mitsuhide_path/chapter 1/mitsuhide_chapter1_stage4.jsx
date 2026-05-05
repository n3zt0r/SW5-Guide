export const mitsuhide_chapter1_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "Battle of Akechi Castle",
    stageImage: "assets/stages/mitsuhide_chapter1_stage4.webp",
    objectives: [
        { 
            name: "Yoshitatsu's Influence", 
            description: <span><span className="enemy-style">Michikatsu Inoue</span> and his allies are after <span className="place-style">Akechi Castle</span>. Defeat them.</span>,
            tips: 'Make not of where Masanari Nonomura is located'
        },
        { 
            name: "The Counterattack Begins", 
            description: <span>Defeat <span className="enemy-style">Mataichi Sengoku</span>, <span className="enemy-style">Shigenori Takenaka</span>, and <span className="enemy-style">Masahide Osawa</span> to capture the garrison.</span>
        },
        { 
            name: "Former Friends", 
            description: <span>Defeat <span className="enemy-style">Hanbei Takanaka</span> to advance toward the <span className="place-style">Yoshiatsu Main Camp</span>.</span>
        },
        {
            only: "mitsuhide_akechi", 
            name: "Premonition", 
            description: <span><span className="ally-style">Mitsuhide Akechi</span> must reach <span className="place-style">Akechi Castle</span>.</span>
        },
        {
            name: "A Long Way", 
            description: <span>Defeat <span className="enemy-style">Ittetsu Inaba</span> and his allies to open a path to <span className="place-style">Akechi Castle</span>.</span>,
            tips: 'If you happen to complete "For Uncle" before "A Long Way", then the game will discard "A Long Way" objective. Best to complete them in order'
        },
        {
            name: "For Uncle", 
            description: <span>Defeat <span className="enemy-style">Nobuchika Kishi</span> and <span className="enemy-style">Tadayoshi Sato</span> to open <span className="place-style">Akechi Castle</span> gate.</span>
        },
        {
            name: "The Sad Strategist", 
            description: <span>Defeat <span className="enemy-style">Hanbei Takanaka</span> to reach the <span className="place-style">escape point</span>.</span>
        },

        // Bonus Objectives
        { 
            type: "bonus",
            name: "Surprising Supplies", 
            description: <span>Don't allow any of the <span className="enemy-style">supply soldiers</span> to reach the <span className="place-style">Eastern Barracks</span>.</span>,
            tips: 'At the start of "The Counterattack Begins", you\'ll see dialogue from supply soldiers pop up. Two supply captains will appear just north of the southwestern main camp. They will try to make it to where Masanari Nonomura was in the first objective, at the easternmost part of the map. Approach them to trigger this objective'
        },
        { 
            type: "bonus",
            name: "The Obstruction", 
            description: <span>Defeat all the <span className="enemy-style">shield soldiers</span> to advance.</span>,
            tips: 'After you encounter Yoshitatsu Saito, you\'ll see many troops pop up. Just northwest of Masanari Nonomura\'s initial location, you\'ll see a gate. The shield soldiers are in front of this gate. You can also go to your start menu and look at officer info to see their location. Approach them to trigger this objective'
        },
        { 
            type: "bonus",
            name: "Yoshitatsu's Troubles", 
            description: <span>Defeat <span className="enemy-style">Hironari Hineno</span> and <span className="enemy-style">Michitoshi Nagai</span>.</span>,
            tips: 'During "A Long Way", these guys are initially out of reach on the southeastern side of Akechi Castle. Whenever you see a way to them, just approach them to trigger this objective'
        },
 
        // Special Objectives
        { 
            type: "special",
            name: "Yoshiatsu's Reinforcements", 
            description: <span>Defeat <span className="enemy-style">Yorimoto Toki</span> and <span className="enemy-style">Mondo Hayashi</span>.</span>,
            tips: 'After Mitsuhide makes it inside the castle, you will eventually hear some dialogue from Yorimoto Toki. They will appear just west of Masanari Nonomura\'s initial location. Approach either of them to trigger the objective'
        },
    ],

    // Rare Weapon
    rareWeapon: {
        name: "Demon's Revolt",
        description: <span>S Rank all with <span className="ally-style">Toshimitsu Saito</span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 5-4, Battle of Tetorigawa, with Katsuiie.'
    }
}