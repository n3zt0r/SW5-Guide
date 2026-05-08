export const nobunaga_chapter6_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Battle of Takatenjin Castle",
    stageImage: 'assets/stages/nobunaga_chapter6_stage1.webp',
    objectives: [
        { 
            name: "A Threat to the Main Camp",
            description: <span>Defeat.</span>,
            tips: ''
        },
        { 
            name: "Capturing the Nogasaka Garrison",
            description: <span>Defeat the enemy troops to capture the Nogasaka Garrison.</span>,
            tips: ''
        },
        { 
            name: "The Enemy Closes in on Higamine Garrison",
            description: <span>Defeat Mitsukata Nagasaka and Tomohide Okuma, and stop them from reaching the Hidamine Garrison.</span>,
            tips: ''
        },
        { 
            name: "For Okabe",
            description: <span>Defeat Nobukado Takeda and his allies before Motonobu Okabe readies his forces.</span>,
            tips: ''
        },
        { 
            name: "The Cavalry at Takatenjin Castle",
            description: <span>Defeat all the Takeda Cavalry Captains at Takatenjin Castle.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Archers on the Cliff", 
            description: <span>Defeat all the archer captains on the cliff so your allies can advance.</span>,
            tips: 'While doing this mission, be aware of the targets from "A Threat to the Main Camp". If they get past you to the main camp, you fail that mission'
        },
        { 
            only: "",
            type: "bonus",
            name: "Whoever is Running the Show", 
            description: <span>Defeat Nobumori Ema.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "The Enemy with the Upper Hand", 
            description: <span>Defeat Masatoshi Hoshina and Mitsusuna Akiyama to defend the main camp.</span>,
            tips: ''
        },
        { 
            only: "ieyasu_tokugawa",
            type: "bonus",
            name: "Tokugawa and Nobutada's United Front", 
            description: <span>Enemy troops are attacking the main camp. Work with Nobutada Oda to defeat them.</span>,
            tips: 'This happens right after "The Enemy with the Upper Hand" when you have Ieyasu in team'
        },
            
        // Special Objectives
        { 
            only: "ieyasu_tokugawa",
            type: "special",
            name: "Settling the Score with Okabe", 
            description: <span>Defeat Motonobu Okabe with a Musou Attack.</span>,
            tips: 'If you get him down to a third health on his last health bar, he\'ll start dialogue with Ieyasu and Nobunaga. The Ieyasu dialogue is a bit cringe. For Nobunaga, he just talks some smack'
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