// import image from 'assets/stages/mitsuhide_chapter4_stage4.webp';

export const mitsuhide_chapter4_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "Battle of Tonezaka",
    // stageImage: image,
    objectives: [
        { 
            name: "Clash at Tonezaka", 
            description: <span>Defeat Michikage Asakura and his allies.</span>,
            tips: ''
        },
        { 
            name: "A Steel Defense", 
            description: <span>Defeat the enemy troops surrounding Ichijyodani Castle.</span>,
            tips: ''
        },
        { 
            name: "The Uesugi's Raid", 
            description: <span>Prevent Kagemochi Amakasu and his allies from infiltrating the Oda Main Camp.</span>,
            tips: 'Pay attention. You\'ve got a very brave but very brittle Sadayuki Atsuji next to your camp. He will hold off the two officers that usually come his way for about 5 seconds. Meaning, you need to get in gear and get down there'
        },
        { 
            name: "No Asakura Shall Survive", 
            description: <span>Defeat Kageyuki Asakura and Kageakira Takahashi.</span>,
            tips: ''
        },
        { 
            name: "The God of War's Stratagem", 
            description: <span>Defeat Tomonobu Saito, Nagahide Yasuda, and Kagetsugu Amakasu, and prevent Kazumasu Takigawa and Nobumori Sakuma from being taken out.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "For the Ninja", 
            description: <span>Defeat Tatsuoki Saito and Michitoshi Nagai, and prevent Mitsu from being taken out.</span>,
            tips: 'Replaces "Mitsuki Fights" ( ↓ ). I usually leave "Steel Defense" unfinished until you hear Mitsuki\'s dialogue and the applicable bonus objective triggers'
        },
        { 
            only: "mitsuki",
            type: "bonus",
            name: "Mitsuki Fights", 
            description: <span>Mitsuki must defeat Tatsuoki Saito and Michitoshi Nagai with Musou Attacks.</span>,
            tips: 'Replaces "For the Ninja" ( ↑ ). I usually leave "Steel Defense" unfinished until you hear Mitsuki\'s dialogue and the applicable bonus objective triggers.'
        },
        { 
            only: "mitsuhide_akechi",
            type: "bonus",
            name: "A Necessary Farewell", 
            description: <span>Mitsuhide Akechi must defeat Yoshikage Asakura with a Musou Attack.</span>,
            tips: 'Should trigger automatically if you have Mitsuhide playable'
        },
        { 
            only: "",
            type: "bonus",
            name: "Where the Attack Starts", 
            description: <span>Defeat the enemy troops to capture the Northwestern Garrison.</span>,
            tips: 'After Kenshin shows up, make your way to the area around Kunikiyo Yamaura. Nobunaga will mention it being a perfect place and the objective should trigger'
        },
        { 
            only: "",
            type: "bonus",
            name: "Not Even Gods Are Sacred", 
            description: <span>Defeat Nagaatsu Shibata and Nagachika Kawada to advance the riflemen.</span>,
            tips: 'After completing "The God of War\'s Strategem", two officers will come in from the north center gate. It should trigger whenever they show up automatically'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "With a Traitor by Your Side", 
            description: <span>Escort Kageakira Asakura to the Uesugi Main Camp.</span>,
            tips: 'This guy camps out behind his gate all stage, but finally opens up when you finish "No Asakura Shall Survive". Approach him and he quickly freaks out and defects to you. You should get the trigger then'
        },
    ],
    
    /*
    rareWeapon: {
        name: "Daikokuten",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }
    */
}