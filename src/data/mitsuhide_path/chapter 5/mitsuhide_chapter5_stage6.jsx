// import image from 'assets/stages/mitsuhide_chapter5_stage6.webp';

export const mitsuhide_chapter5_stage6 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 6",
    stageName: "Escape From Odaka Castle",
    // stageImage: image,
    objectives: [
        { 
            name: "Meet Motomichi Jinzai", 
            description: <span>Defeat Haruyoshi Kuchiba and Munekatsu Nomi before Motomichi Jinzai is taken out.</span>,
            tips: ``
        },
        { 
            name: "Courtyard Diversion", 
            description: <span>Defeat Hirohide Asonuma, Nobunao Kumagai, and Motohide Akagawa to split up the enemy forces in the courtyard.</span>,
            tips: ``
        },
        { 
            name: "Bringing Down the Defense", 
            description: <span>Defeat Takakage Kobayakawa and the surrounding officers to break through the courtyard.</span>,
            tips: ``
        },
        { 
            name: "Bursting through the Corridor", 
            description: <span>Defeat the archer captains to break through the corridor.</span>,
            tips: ``
        },
        { 
            name: "The Genius's Gambit", 
            description: <span>Defeat the fake Hisanori Moriwaki, Michiyoshi Kuchiba, and Sadatoshi Fukuhara.</span>,
            tips: ``
        },
        { 
            name: "Breaking the Three Arrows", 
            description: <span>Defeat Takakage Kobayakawa, Motoharu Kikkawa, and Terumoto Mori.</span>,
            tips: ``
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Hunted Deer", 
            description: <span>Defeat Fujikane Masuda and Motosuke Hiraga to escape from your imprisonment.</span>,
            tips: `At the start of the stage, just proceed south to the green box area. This will trigger the two officers to come out of the gate and trigger this objective`
        },
        { 
            only: "",
            type: "bonus",
            name: "Rendezvous with Tsunahiro Yonebara", 
            description: <span>Defeat Naoyuki Koi and Narikata Kodama to rescue Tsunahiro Yonebara.</span>,
            tips: `Quickly complete "Courtyard Diversion" and do not wander near the central courtyard. The northwestern gates should open and allow you to approach Tsunahiro if he still has any health left. Keep in mind, when you fight near allies, they start exchanging blows with enemies around them`
        },
        { 
            only: "",
            type: "bonus",
            name: "Rendezvousing with Munenobu Akiage", 
            description: <span>Defeat Takanao Kumagai to rescue Munenobu Akiage.</span>,
            tips: `During "Breaking through the Corridor", you should see a Gate Captain at the southern end of the corridor. Just before the last archer captain. Defeat this guy and go east and north to meet up with another ally. Getting near him should trigger the objective`
        },
        { 
            only: "",
            type: "bonus",
            name: "Watch Your Back", 
            description: <span>Defeat Kunaishoyu Niizato to stop the ambush.</span>,
            tips: `After completing "The Genius's Gambit", the doors to the north of you unlock. Straight north of the "Wooden floored Room" is another large room. Go in to the very back of that room and wait for Nizato to show up to trigger this objective`
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "The Amago Unified", 
            description: <span>Reach the escape point with all your comrades.</span>,
            tips: `This one shows up assuming everyone is still alive. After "The Genius's Gambit" is completed, this should trigger automatically`
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