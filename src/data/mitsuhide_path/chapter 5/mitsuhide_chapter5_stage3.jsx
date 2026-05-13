// import image from 'assets/stages/mitsuhide_chapter5_stage3.webp';

export const mitsuhide_chapter5_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Battle of Kozuki Castle (Akechi)",
    // stageImage: image,
    objectives: [
        { 
            name: "The Main Camp as Bait", 
            description: <span>Defeat Michiyoshi Kuchiba, Motosuke Kunishi, and Motosuke Hiraga.</span>,
            tips: ''
        },
        { 
            name: "While the Officers Are Away...", 
            description: <span>Defeat the enemy troops at the Northeastern Garrison.</span>,
            tips: ''
        },
        { 
            name: "Prepare Yourself, Amago Deer", 
            description: <span>Defeat Hiroie Kikkawa and Tadaie Ukita to prevent Shikanosuke Yamanaka from being taken out.</span>,
            tips: ''
        },
        { 
            name: "Enemy Reinforcements Storming In", 
            description: <span>Defeat Morishige Sugihara and his allies to prevent Kazumasu Takigawa and Nagahide Niwa from being taken out.</span>,
            tips: ''
        },
        { 
            name: "Motoharu Interferes", 
            description: <span>Defeat Motoharu Kikkawa, Narinaga Hayashi, and Mototada Kamiyama.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "To Be Called a Rifleman", 
            description: <span>Prevent Naoie Ukita from reaching the target point.</span>,
            tips: 'After completing the first two primary objectives, the gates to the north open. Go through them and approach Ukita to trigger objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "Shikanosuke Serves His Lord", 
            description: <span>Work with Shikanosuke Yamanaka to defeat the enemy troops.</span>,
            tips: 'After the main camp gets overrun, Shikanosuke gets called to be the rear guard. The objective area is the big central battlefield'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "The Unrelenting Mori Army", 
            description: <span>Prevent Hajime Watanabe and Motonaga Masuda from approaching Kazumasu Takigawa and Nagahide Niwa.</span>,
            tips: 'After "Enemy Reinforcements Storming In" is completed, and "Motoharu Interferes" starts, you\'ll see two officers show up at the south central gate. They are fast moving, so you will need speed to intercept them before they jump down the cliff and encounter your group'
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