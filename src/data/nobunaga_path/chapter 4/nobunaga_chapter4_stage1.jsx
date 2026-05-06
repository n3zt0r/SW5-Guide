export const nobunaga_chapter4_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Battle of Kanegasaki",
    stageImage: 'assets/stages/nobunaga_chapter4_stage1.webp',
    objectives: [
        { 
            name: "Battle of Kanegasaki",
            description: <span>Defeat Kagemasa Maeba and Yoshitsugu Maeba to push forward the front line.</span>,
            tips: ''
        },
        { 
            name: "Controlling Kanegasaki Castle",
            description: <span>Defeat Kagetsune Asakura, Kagetake Asakura, and Kageatsu Togano to capture Kanegasaki Castle.</span>,
            tips: ''
        },
        { 
            name: "The Moving Battlefield",
            description: <span>Naoyori Shinjo and his allies are after Nobunaga Oda. Defeat them.</span>,
            tips: ''
        },
        { 
            name: "A Blocked Retreat",
            description: <span>Defeat Kageakira Asakura and Naotsune Endo to capture the Northern Garrison.</span>,
            tips: 'Once Nobunaga makes it to the Northern Garrison, this triggers'
        },
        { 
            name: "A Parting of Siblings",
            description: <span>Defeat Oichi and Katsuiie Shibata.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Conquering the Fort", 
            description: <span>Defeat Kagekata Uozumi and Yoshiie Yamazaki to capture Tezutsuyama Castle.</span>,
            tips: 'Trigger by approaching these guys during "Controlling Kanegasaki Castle" mission'
        },
        { 
            only: "",
            type: "bonus",
            name: "A Broken Pact", 
            description: <span>Defeat Yoshikage Asakura.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "Friends in Need", 
            description: <span>Defeat Tsunachika Kaiho and his allies, and prevent Nagahide Niwa and his allies from being taken out.</span>,
            tips: 'This triggered for me after defeating 2 of the 4 targets in "The Moving Battlefield"'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Kindness of Acquaintances", 
            description: <span>Convince Mototsuna Kutsuki to defect to the Oda Army by defeating him.</span>,
            tips: 'Seems to trigger when you go near him, or when Nobunaga is in Northern Garrison'
        },

        // Special Objectives
        { 
            type: "special",
            name: "Nagamasa's Decision", 
            description: <span>Defeat Nagamasa Azai.</span>,
            tips: 'Trigger by just approaching him as early as during "A Moving Battlefield"'
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