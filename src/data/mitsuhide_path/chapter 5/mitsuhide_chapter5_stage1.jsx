// import image from 'assets/stages/mitsuhide_chapter5_stage1.webp';

export const mitsuhide_chapter5_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Invasion of Tanba",
    // stageImage: image,
    objectives: [
        { 
            name: "Capturing the Southeast", 
            description: <span>Defeat Masatsuna Shiga and Mitsuyoshi Hokabe.</span>,
            tips: ''
        },
        { 
            name: "Guardians of the Garrison", 
            description: <span>Defeat Hideharu Hatano.</span>,
            tips: ''
        },
        { 
            name: "A Call for Reinforcements", 
            description: <span>Defeat the guard captains to capture the garrison.</span>,
            tips: ''
        },
        { 
            name: "Hatano's Trap", 
            description: <span>Defeat Hideharu Hatano and his allies to rescue Mitsuki.</span>,
            tips: ''
        },
        { 
            name: "Capturing the Center", 
            description: <span>Defeat Mitsunaga Adachi and his allies. Timed.</span>,
            tips: ''
        },
        { 
            name: "Final Battle with the Blue Demon of Tanba", 
            description: <span>Defeat Norinari Momii.</span>,
            tips: ''
        },
        { 
            name: "A Quiet Determination", 
            description: <span>Defeat Tadaie Akai and Yukiie Akai.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Scouts Detected", 
            description: <span>Prevent the messenger from reaching the escape point.</span>,
            tips: 'At beginning of stage, turn straight around and run north. There\'s a messenger here that will trigger the objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "Those Without Power", 
            description: <span>Defeat the peasants to prevent the enemy from transporting their provisions.</span>,
            tips: 'After completing "Guardians of the Garrison", the south area should open up. You\'ll notice the two southwestern garrisons are empty. Go inside either of them to find the peasants and trigger this objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Akai Army's Strategy", 
            description: <span>Defeat Tokiie Akai to prevent the arrival of enemy reinforcements.</span>,
            tips: 'After Shikanosuke shows up, a the whole mid-line of gates will open. Approach Tokiie Akai in the westernmost garrison of the mid-line to trigger this objective. And remember the main mission, "Capturing the Center", is a timed mission'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "A Shining Spear in the Back", 
            description: <span>Defeat Nobumasa Sakai and Suruganokami Kimura.</span>,
            tips: 'After completing "A Quiet Determination", the path to the north central garrison should be open. Just approach these guys to trigger the objective. And how about that name? That\'s a six syllable first name. With "kami" in it. I don\'t know what the rest means, but having "god" in your name is a set up for lifelong failure'
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