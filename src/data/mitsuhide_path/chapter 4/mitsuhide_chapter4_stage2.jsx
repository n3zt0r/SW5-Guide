// import image from 'assets/stages/mitsuhide_chapter4_stage2.webp';

export const mitsuhide_chapter4_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "The Scorching of Mt. Hei",
    // stageImage: image,
    objectives: [
        { 
            name: "The Path to the Blaze", 
            description: <span>Defeat Morishige Tsuchibashi, Genzo Matsuda, and Yoshitsugu Kitsunejima to execute a fire attack.</span>,
            tips: ''
        },
        { 
            name: "Fire Attack Preparations", 
            description: <span>Defeat the enemy troops surrounding the Northwestern Temple to execute a fire attack.</span>,
            tips: ''
        },
        { 
            name: "The Saika Mercenary's Blockade", 
            description: <span>Defeat Yoshimasa Oka, Shigetaka Tsuchibashi, and Shigeharu Tsuchibashi to execute a fire attack.</span>,
            tips: ''
        },
        { 
            name: "The Uesugi's Vanguard", 
            description: <span>Defeat Kagemochi Amakasu and his allies to execute a fire attack.</span>,
            tips: ''
        },
        { 
            name: "Looming Danger", 
            description: <span>Defeat Akinaga Irobe and Nagazane Irobe to protect the Oda Main Camp.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Try Harder!", 
            description: <span>Defeat the enemy troops surrounding the Northeastern Temple to weaken the Sanmon Mercenaries.</span>,
            tips: 'After completing "The Path to the Blaze" in the east, have 2P follow Sandayu Momochi into the large garrison in the north. You should get some of his dialogue, then this objective should trigger'
        },
        { 
            only: "",
            type: "bonus",
            name: "Suspicious Movements", 
            description: <span>Defeat the fireball soldier squadron and prevent an ambush.</span>,
            tips: 'After dong "Fire Attack Preparations" in the west, go into the northwest most garrison. You should see fireball captains piling in soon. The objective should trigger soon after'
        },
        { 
            only: "nobunaga_oda",
            type: "bonus",
            name: "Sworn Foe", 
            description: <span>Nobunaga Oda must defeat Magoichi Saika before his health drops below 50 percent.</span>,
            tips: 'Replaces "Incoming Bullett". After "The Path to the Blaze" and "Fire Attack Preparedness" have been completed, Magoichi should appear just north of Sandayu Momochi. Have Nobunaga approach him to trigger'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Saika Merenary's Pride", 
            description: <span>Defeat Saburo Kurimura and Yosaburo Sakai, and prevent an attack on the Oda Army.</span>,
            tips: 'After all the fires have been set, the two guys in the south central garrison will finally come out.Approach them to trigger this one'
        },
        { 
            only: "mitsuhide_akechi",
            type: "bonus",
            name: "Proof of Conviction", 
            description: <span>Mitsuhide Akechi must defeat Kenshin Uesugi with a Musou Attack.</span>,
            tips: 'Just southwest of Sandayu and the Northeastern Garrison, there\'s a small area locked behind 2 gates. After all the fires have been set, you should see these gates unlock and dialogue from Kenshin. Approach him with Mitsuhide and wait a full minute for them to politely smack talk each other. Then should trigger. Make sure the rest of the map is clear before completing this'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Incoming Bullett", 
            description: <span>Don't let Magoichi Saika approach Nobunaga Oda.</span>,
            tips: 'Replaces "Sworn Foe". After "The Path to the Blaze" and "Fire Attack Preparedness" have been completed, Magoichi should appear just north of Sandayu Momochi. Approach him to trigger it'
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