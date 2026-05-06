export const nobunaga_chapter4_stage8 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 8",
    stageName: "Battle of Mikatagahara (Takeda)",
    stageImage: 'assets/stages/nobunaga_chapter4_stage8.webp',
    objectives: [
        { 
            name: "The Takeda Calvary Advances",
            description: <span>Defeat Tadatsugu Sakai, Tadasuku Okabe, and Tadatsugu Matsui to make the calvary advance.</span>,
            tips: ''
        },
        { 
            name: "Heihachiro and the Takeda Calvary",
            description: <span>Work with the cavalry to defeat Tadakatsu Honda.</span>,
            tips: ''
        },
        { 
            name: "Protection",
            description: <span>Defeat Sena to open up Hamamatsu Castle.</span>,
            tips: ''
        },
        { 
            name: "Hanzo's Special Attack",
            description: <span>Put and end to Hanzo Hattori's mysterious attack be defeating all of the Hanzo Hattoris.</span>,
            tips: ''
        },
        { 
            name: "The Men of Mikawa's Siege",
            description: <span>Defeat Tadazane Honda and his allies to break through the enemy's siege.</span>,
            tips: ''
        },
        { 
            name: "The Pride of the Men of Mikawa",
            description: <span>Defeat the ambush troops in the Center Battlefield.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Shadows on the Mountain Path", 
            description: <span>Defat Masanobu Honda and Katsushige Itakura, and stop the enemy retreat.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "The Tokugawa's Foothold", 
            description: <span>Defeat Yasumasa Sakakibara and Kazumasa Ishikawa to capture the garrison.</span>,
            tips: ''
        },
        { 
            only: "katsuyori_takeda",
            type: "bonus",
            name: "Shiro's Desperate Fight", 
            description: <span>Katsuyori Takeda must defeat the enemy troops with a Musou Attack.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "Wrath from on High", 
            description: <span>Defeat all the archers so your allies can advance.</span>,
            tips: 'Trigger by traveling below the cliff in the northeast area, then circle to top of cliff'
        },

        // Special Objectives
        { 
            type: "special",
            name: "Mikawa's Show of Force", 
            description: <span>Defeat Tadayo Okubo Yasukage Amano to protect the Takeda Main Camp.</span>,
            tips: 'Trigger by approaching either of these guys with 1P around the time previous mission starts'
        },
    ],

    rareWeapon: {
        name: "Virtuous Wrath",
        description: <span>S Rank all with <span className="ally-style">Shingen Takeda</span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 2-1, Battle of Ino, with Toshiie Maeda'
    }
}