// import image from 'assets/stages/mitsuhide_chapter2_stage2.webp';

export const mitsuhide_chapter2_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "Battle of Gassantoda Castle",
    // stageImage: image,
    objectives: [
        { 
            name: "The Defecting Scout", 
            description: <span>Prevent Hisasuke Mitoya, Morikiyo Akana, and Tamekiyo Misawa's infiltration of the Tertiary Ward.</span>,
            tips: ''
        },
        { 
            name: "Mori's Arrow", 
            description: <span>Defeat all the archers.</span>,
            tips: ''
        },
        { 
            name: "A Recommendation to Surrender", 
            description: <span>Prevent Tsunahiro Yonebara from approaching Hisanobu Ushio.</span>,
            tips: 'This objective will trigger when you have 2 archer targets left in the "Mori\'s Arrow" objective'
        },
        { 
            name: "Mori's Scheme", 
            description: <span>Prevent Takakage Kobayakawa, Sadatoshi Fukuhara, and Nobunao Kumagai from reaching the retreat point.</span>,
            tips: ''
        },
        { 
            name: "The Amago Unite", 
            description: <span>Don't allow the allied army officers to be defeated.</span>,
            tips: ''
        },
        { 
            name: "Critical Provisions", 
            description: <span>Escort Hisakane Uyama to the Tertiary Ward to procure provisions.</span>,
            tips: 'This objective happens just after "The Amago Unite", stretching your two players all over the map to cover everything. But you should notice the gate in the northwest has also been unlocked'
        },

        // Bonus Objectives
        { 
            only: "shikanosuke_yamanaka",
            type: "bonus",
            name: "The Center of Attention", 
            description: <span>Shikanosuke Yamanaka must defeat the enemy troops to draw the enemy's attention.</span>,
            tips: 'This appears when you play as Shikanosuke at the beginning of the stage. Straightforward'
        },
        { 
            only: "shikanosuke_yamanaka",
            type: "bonus",
            name: "The Wolf of Iwami", 
            description: <span>Shikanosuke Yamanaka must defeat Masakazu Shinagawa.</span>,
            tips: 'After defeating 2 targets in "The Defecting Scout", Masakazu Shinagawa will show up. Have Shikanosuke approach him to trigger objective. His location is just north of Tamekiyo Misawa from the "Defecting Scout" objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "Rescuing Hidehisa", 
            description: <span>Defeat Motosuki Kunishi and Motozumi Katsura, and prevent Hidehisa Amago from being defeated.</span>,
            tips: 'This one can be tricky. At the beginning of "Mori\'s Scheme", the three garrisons will open and you have to defeat the three generals before they retreat. At the same time, these two will head out toward Hidehisa. I camped 2P on Nobunao Kumagai. Then with 1P run straight north from Hidehisa. Run through the two officers, take out Takakage, then go further west and take out Sadatoshi Fukuhara. Then retrace your steps and take the two officers down. When you\'re ready, have 2P take out Nobunao'
        },
        { 
            only: "",
            type: "bonus",
            name: "Targeting the Commander", 
            description: <span>Defeat Takasuke Miyoshi and Michiyoshi Kuchiba.</span>,
            tips: 'At around the 2 minute mark during "The Amago Unite", two officers will appear at the far eastern gate, just south of your ally Takanori Onishi. Approach them to trigger this objective. Just to recap, "The Amago Unite", "Critical Provisions", "The Mori\'s Valor", and this one, "Targeting the Commander", will all be active at the same time. Good luck'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "The Mori's Valor", 
            description: <span>Defeat Motoharu Kikkawa.</span>,
            tips: 'During "The Amago Unite" and "Critical Provisions", the northwest gate holding the Kikkawas will unlock. Approach them to trigger this objective'
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