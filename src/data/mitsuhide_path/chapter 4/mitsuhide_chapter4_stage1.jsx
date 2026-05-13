// import image from 'assets/stages/mitsuhide_chapter4_stage1.webp';

export const mitsuhide_chapter4_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Battle of Kanegasaki",
    // stageImage: image,
    objectives: [
        { 
            name: "Making a Way Out", 
            description: <span>Defeat the enemy troops so that Nobunaga Oda and Noh can retreat.</span>,
            tips: ''
        },
        { 
            name: "Clear a Path to Safety", 
            description: <span>Defeat Kageakira Asakura and Kagetada Asakura so that Nobunaga Oda and Noh can retreat.</span>,
            tips: ''
        },
        { 
            name: "A Sister's Decision", 
            description: <span>Defeat Oichi and Katsuiie Shibata so that Nobunaga Oda and Noh can retreat.</span>,
            tips: ''
        },
        { 
            name: "Yoshikage Marches Forth", 
            description: <span>Defeat Yoshikage Asakura.</span>,
            tips: ''
        },
        { 
            name: "The Asakura's Ambush", 
            description: <span>Defeat Kageyoshi Asakura, Kagechika Torii, and Nagahide Toda.</span>,
            tips: ''
        },
        { 
            name: "The Azai's Attack", 
            description: <span>Defeat Masamoto Azai and his allies to open the Azai Main Camp gate.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Those Hiding in the Shadows", 
            description: <span>Defeat the spy captains.</span>,
            tips: 'At beginning of stage go directly west from Kiyotsuna Akao. You should encounter some spy captains that will trigger this objective. Mitsuki also points out this area in her dialogue'
        },
        { 
            only: "",
            type: "bonus",
            name: "Securing the Defensive Garrison", 
            description: <span>Defeat Kunisada Mitamura to capture the Western Garrison.</span>,
            tips: 'After Nobunaga and Noh retreat, head directly south from where you fought Oichi and approach Kunisada in the next garrison to trigger this objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "Though Not Yet United", 
            description: <span>Convince Hidemura Hori and Naofusa Higuchi to defect to the Oda Army by defeating him.</span>,
            tips: 'After "The Azai\'s Attack" starts, Hanbei will mention these two officers in the south region. Just approach them to trigger the objective'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Leave No One Behind", 
            description: <span>Defeat Yoshiie Yamazaki and his allies, and prevent Kazumasu Takigawa from being taken out.</span>,
            tips: 'You can see Kazumasu isolated in the area just northeast of "Though Not Yet United". Scamper up that way and approach to trigger this objective'
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