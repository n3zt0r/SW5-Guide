export const nobunaga_chapter5_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "The Subjugation of Harima",
    stageImage: 'assets/stages/nobunaga_chapter5_stage3.webp',
    objectives: [
        { 
            name: "An Ambush Out of Nowhere",
            description: <span>Defeat Masakore Kushihashi and Motosuke Hiraga to rescue Nobutada Oda.</span>,
            tips: ''
        },
        { 
            name: "Reinforcements Flooding In",
            description: <span>Defeat Tomoyuki Bessho and Hyobu Kihara to ready your forces.</span>,
            tips: ''
        },
        { 
            name: "The Devoted Oda Army",
            description: <span>Defeat Motoyasu Shiji and Yasuaki Miki to prevent Tamezumi Reizei from being taken out.</span>,
            tips: ''
        },
        { 
            name: "In Hot Pursuit",
            description: <span>Defeat Yoriharu Uozumi, Ichisuke Tsumura, and Fujikane Masuda to assist Hideyoshi Hashiba.</span>,
            tips: ''
        },
        { 
            name: "A Strategic Capture",
            description: <span>Defeat Sadamori Ogo and Harusada Bessho to capture Ogo Castle.</span>,
            tips: ''
        },
        { 
            name: "Miki's Lifeline",
            description: <span>Defeat Yorisada Kanki and the supply unit to prevent the transport of supplies to Miki Castle.</span>,
            tips: ''
        },
        { 
            name: "Mori's Rescue",
            description: <span>Prevent Mototsugu Shishido, Hojime Watanabe, and Hiroshige Katsura from reaching Miki Castle.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            type: "bonus",
            name: "The Shorthanded Main Camp ", 
            description: <span>Prevent Kageyuki Kajiwara from infiltrating the Oda Main Camp.</span>,
            tips: ''
        },
        { 
            type: "bonus",
            name: "Swarming Shadows", 
            description: <span>Defeat the spy captains slowing down Kazuuji Nakamura.</span>,
            tips: 'They show up in northeaster garrison around the same time as "Miki\'s Lifeline" starts'
        },

        // Special Objectives
        { 
            type: "special",
            name: "The Impossible Infiltration", 
            description: <span>Defeat Motoharu Kikkawa and Terumoto Mori.</span>,
            tips: 'These guys will show up just north of the Oda Main Camp soon after "Mori\'s Rescue".'
        },
    ],

    /*
    rareWeapon: [{
        name: "Daikokuten's Mallet",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }]
    */
}