// import image from 'assets/stages/reverie_stage6.webp';

export const reverie_stage6 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 6",
    stageName: "Final Battle of Kozuki Castle",
    // stageImage: image,
    objectives: [
        { 
            name: "To the Castle", 
            description: <span>Defeat Motosuke Kunishi and Takakage Kobayakawa to capture the Northern Garrison and the Southern Garrison.</span>,
            tips: ``,
        },
        { 
            name: "Dominance", 
            description: <span>Defeat the enemy troops to advance.</span>,
            tips: ``,
        },
        { 
            name: "To Save A Friend", 
            description: <span>Defeat all the rifle captains, and prevent Mitsuhide Akechi from being taken out.</span>,
            tips: ``,
        },
        { 
            name: "Eyewitness", 
            description: <span>Defeat Hajime Watanabe and Narinaga Hayashi, and prevent the peasants from being defeated.</span>,
            tips: `This happens directly north of the large staircase if you want to camp someone there`,
        },
        { 
            name: "Trap", 
            description: <span>Defeat Terumoto Mori and his allies to assist Mitsuhide Akechi's advance.</span>,
            tips: ``,
        },
        { 
            name: "Two Arrows", 
            description: <span>Defeat Motoharu Kikkawa and Takakage Kobayakawa.</span>,
            tips: ``,
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "The Amago's Bond", 
            description: <span>Defeat Michiyoshi Kuchiba, and prevent Michihisa Amago from being taken out.</span>,
            tips: `If you completed "Eyewitness", the gates to the north central garrison should open. Go inside to trigger this objective`,
        },
        { 
            only: "",
            type: "bonus",
            name: "Death from Above", 
            description: <span>Defeat all the archer captains on the cliff to assist your allies' advance.</span>,
            tips: `After "Eyewitness" is completed, Takakage opens up the gate at the south central area. This gate will trap you. This will then open the northern gate where you saved Michihisa. Send the other player west through that gate, then south. You should be above where you fought the rifle captains in "To Save A Friend". You should find archer captains here and the objective should trigger. If you try to break through Terumoto, Ukita will show up in the northwest corner and march for Kozuki Castle`,
        },
        { 
            only: "shikanosuke_yamanaka",
            type: "bonus",
            name: "Vows Made Under the Moon", 
            description: <span>Shikanosuke Yamanaka must defeat Motonari Mori before Mitsuhide Akechi's health drops below 50 percent.</span>,
            tips: ``,
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Indomitable Spirit", 
            description: <span>Prevent Naoie Ukita and Tadaie Ukita from invading Kozuki Castle.</span>,
            tips: `During "Trap", let the untrapped player trigger and complete "Death from Above". Then have them Wait in the northwest corner of the map. Then switch to your trapped player and complete "Trap". This should now have you in the perfect position to intercept the Ukita officers and trigger this objective`,
        },
    ],
    
    rareWeapon: [{
        name: "Heavenly Twin Blade",
        description: <span>S Rank all with <span className="ally-style">Shikanosuke Yamanaka</span> on Hard or greater.</span>,
        tips: `Other half is in Oda 5-7, The Nobuyasu Affair, with Ieyasu Tokugawa`
    }]
}