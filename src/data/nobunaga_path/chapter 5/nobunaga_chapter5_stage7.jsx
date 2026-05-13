export const nobunaga_chapter5_stage7 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 7",
    stageName: "The Nobuyasu Affair",
    stageImage: 'assets/stages/nobunaga_chapter5_stage7.webp',
    objectives: [
        { 
            name: "The Strongest Cavalry",
            description: <span>Defeat the entire Takeda Cavalry so Ieyasu can advance.</span>,
            tips: ''
        },
        { 
            name: "The Path to Discord",
            description: <span>Defeat Nobusada Obata and his allies, and capture the garrison.</span>,
            tips: ''
        },
        { 
            name: "Seeds of Doubt",
            description: <span>Defeat Tsuneharu Yonekizu and Yasutada Matsudaira, and drive a wedge between the Nobuyasu Army and the Takeda Army.</span>,
            tips: ''
        },
        { 
            name: "The Moment of Truth",
            description: <span>==========================================================================================.</span>,
            tips: ''
        },
        { 
            name: "Katsuyori Flees",
            description: <span>Defeat Katsuyori Takeda, and prevent him from reaching the escape point.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Returning Home", 
            description: <span>Defeat Shigetsugu Honda and Chikayoshi Hiraiwa, and make them defect.</span>,
            tips: 'Break open the northern garrison with a yellow X below it. Approaching them will trigger it'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Heart That Wavers", 
            description: <span>Defeat Kazumasa Ishikawa before Tadayo Okubo's health drops below 50 percent.</span>,
            tips: 'This should trigger around the time "Moment of Truth" does. Okubo makes a comment about being between a rock and a hard place'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Takeda's Pride", 
            description: <span>Defeat Tomoharu Komiyama and his allies, and wipe out the Takeda Army.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            type: "special",
            name: "The Iga in Shadow", 
            description: <span>Defeat Masayasu Fujibayashi, Yazaemon Kido, and Mitsutsugu Ueda, and prevent the supply of weapons.</span>,
            tips: 'During "The Moment of Truth", you\'ll hear Hanzo mention Iga Ninja. If you Pause and look at the Log, you\'ll see a green square outlined in the east. Go there to trigger this one'
        },
    ],

    rareWeapon: [{
        name: "Heavenly Twin Blade",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is in Reverie 1-6, Final Battle of Kozuki Castle, with Shikanosuke Yamanaka'
    }]
}