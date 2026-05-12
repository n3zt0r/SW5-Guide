// import image from 'assets/stages/mitsuhide_chapter2_stage1.webp';

export const mitsuhide_chapter2_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Defense of Echizen",
    // stageImage: image,
    objectives: [
        { 
            name: "Battle Support", 
            description: <span>Defeat Yoshitada Oshio before the peasants are taken out.</span>,
            tips: ""
        },
        { 
            name: "Surprising Reinforcements", 
            description: <span>Defeat Masatsune Henmi and Yoshishige Sawamura before the peasants are taken out.</span>,
            tips: ""
        },
        { 
            name: "Yoshikage's Rescue", 
            description: <span>Defeat Katsuhisa Awaya and Kojiro Awaya, and prevent Yoshikage Asakura from being taken out.</span>,
            tips: ""
        },
        { 
            name: "The Wall in the Way", 
            description: <span>Defeat Yoritsugu Toki and Hidemitsu Mori to drive back the shield soldiers.</span>,
            tips: ""
        },
        { 
            name: "True Form", 
            description: <span>Defeat Nagayori Matsunaga.</span>,
            tips: ""
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Stopping the Engineers", 
            description: <span>Defeat all of the engineer captains.</span>,
            tips: 'After completing "Battle Suppot", some gates will open. Just north of Yashiro Awaya\'s closed gate, a batch of engineers will appear. Approach them to trigger this objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "A Secret Advance", 
            description: <span>Defeat Katsuie Awaya to stop the advance.</span>,
            tips: 'After completing "Battle Support", some gates will open. Go east, then south and approach Katsuie Awaya to trigger this objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "Trust Your Gut", 
            description: <span>Defeat Tadamasa Yuki.</span>,
            tips: 'After the Matsunaga Army shows up, head southeast to this guy\'s location and it should trigger this objectve'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "For The People", 
            description: <span>Defeat Mitsuwaka Awaya, Handayu Tanabe, and Yashiro Awaya, and prevent the peasants from being taken out.</span>,
            tips: 'Approach any of these guys after the Matsunaga Army shows up. It should trigger this objective.Probably easiest to go to southeastern area to pick this and other bonus objectives up at same time'
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