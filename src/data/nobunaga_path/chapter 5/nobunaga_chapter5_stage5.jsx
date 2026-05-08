export const nobunaga_chapter5_stage5 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 5",
    stageName: "Battle of Kizugawaguchi",
    stageImage: 'assets/stages/nobunaga_chapter5_stage5.webp',
    objectives: [
        { 
            name: "Guarding the Main Camp",
            description: <span>Defeat Nobunao Kumagai and Munekatsu Nomi, and defend the Oda Main Camp.</span>,
            tips: ''
        },
        { 
            name: "Have Hope",
            description: <span>Defend the Oda Main Camp until the iron warships arrive.</span>,
            tips: ''
        },
        { 
            name: "The Time to Strike Back",
            description: <span>Defeat the enemy troops on the Central Battlefield to weaken the Mori Army.</span>,
            tips: ''
        },
        { 
            name: "Saika's Victim",
            description: <span>Defeat Magoichi Saika, and prevent Yoshitaka Kuki from being taken out.</span>,
            tips: ''
        },
        { 
            name: "Another Attack",
            description: <span>Defeat Terumoto Mori and his allies to protect the Oda Main Camp.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Extinction", 
            description: <span>Prevent the transport unit from reaching the Southeastern Garrison.</span>,
            tips: 'After "Have Hope" triggers, you will see Kobayakawa mention a supply troop. In the middle south part of the map, you will see the ring flash when the transport unit appears. Just approach to trigger. If you complete this objective, there\'s a good chance "Looming Menace" will not trigger. If you intentionally fail this objective and let the transport captain safely make it, "Looming Menace" should trigger'
        },
        { 
            only: "",
            type: "bonus",
            name: "With Hanbei", 
            description: <span>Defeat Terumoto Mori and his allies before Hanbei Takenaka's health drops below 50 percent.</span>,
            tips: 'During "Another Attack" you\'ll hear dialogue stating Hanbei\'s condition. Just approach Hanbei during this to trigger the objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "Looming Menace", 
            description: <span>Defeat Rairen Shimotsuna and Raijin Shimotsuna, and prevent a pincer attack.</span>,
            tips: 'If you killed the supply captain, you will likely never trigger this objective. If you did not kill the supply captain, these guys will still be holed up in their garrison until "Another Attack" starts. Once it does, the garrison opens and you can approach them to trigger this one'
        },
        { 
            only: "hanbei_takenaka",
            type: "bonus",
            name: "For My Friends", 
            description: <span>Hanbei Takenaka must defeat one of the enemies closing in on the Oda Main Camp with a Musou Attack.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            type: "special",
            name: "Where There's Smoke", 
            description: <span>Defeat the arson squadron and prevent them from infiltrating the Oda Main Camp.</span>,
            tips: 'At the very beginning of stage, directly west of the Oda Main Camp, you\'ll see fireball soldiers. Approach them to trigger the mission'
        },
    ],

    rareWeapon: {
        name: "Sacred Flame Mortar",
        description: <span>S Rank all with <span className="ally-style">Kazuuji Nakamura</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-2, Match in Eiroku, with Magoichi Saika'
    }
}