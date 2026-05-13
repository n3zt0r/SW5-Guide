// import image from 'assets/stages/mitsuhide_chapter5_stage4.webp';

export const mitsuhide_chapter5_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "The Subjugation of Harima",
    // stageImage: image,
    objectives: [
        { 
            name: "An Ambush Out of Nowhere", 
            description: <span>Defeat Masakore Kushihashi and Motosuke Hiraga to rescue Nobutada Oda.</span>,
            tips: ''
        },
        { 
            name: "A Diverted Diversion", 
            description: <span>Defeat Nagahide Nagai and Harutada Miyake to prevent them from interfering.</span>,
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
            description: <span>Defeat Sadanori Ogo and Harusada Bessho to capture Ogo Castle.</span>,
            tips: ''
        },
        { 
            name: "Miki's Lifeline", 
            description: <span>Defeat Yorisada Kanki and the supply unit to prevent the transport of supplies to Miki Castle.</span>,
            tips: 'I completed this mission before Strategic Capture, just fyi'
        },
        { 
            name: "Mori's Rescue", 
            description: <span>Prevent Mototsugu Shishido, Hajime Watanabe, and Hiroshige Katsura from reaching Miki Castle.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "The Shorthanded Main Camp", 
            description: <span>Prevent Kageyuki Kajiwara from infiltrating the Oda Main Camp.</span>,
            tips: 'After completing "A Diverted Diversion", a gate to the west will open. Just above the main camp. Approach Kageyuki there to trigger objective'
        },
        { 
            only: "toshimitsu_saito",
            type: "bonus",
            name: "A Swift Slice", 
            description: <span>Toshimitsu Saito must defeat Norikage Kinugasa and Michiaki Miki.</span>,
            tips: 'After "A Strategic Capture" starts, you\'ll begin to see dialogue from the northwestern fort. "Miki\'s Lifeline" should trigger. After completing that objective, this bonus objective triggered for me. Keep in mind, this mission is timed. And you\'ll also have "Mori\'s Rescue" pop up around this time'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "The Impossible Infiltration", 
            description: <span>Defeat Motoharu Kikkawa and Terumoto Mori.</span>,
            tips: 'During "Mori\'s Rescue", you should see these two show up right at your main camp. Have someone approach them to trigger the special objective'
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