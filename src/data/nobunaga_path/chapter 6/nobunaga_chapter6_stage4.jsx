export const nobunaga_chapter6_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "Mayhem",
    stageImage: 'assets/stages/nobunaga_chapter6_stage4.webp',
    objectives: [
        { 
            name: "Battle of Takamatsu Castle",
            description: <span>Seizing the High Ground.</span>,
            tips: ''
        },
        { 
            name: "Damming Ashimorigawa River",
            description: <span>Defeat Nobuyoshi Sechika and Ekei Ankokuji so the river can be dammed.</span>,
            tips: ''
        },
        { 
            name: "Levee under Construction",
            description: <span>Defeat Munetada Nanba, Narikata Kodama, and Kagechika Hibata so the levee can be built.</span>,
            tips: ''
        },
        { 
            name: "Reinforcements Arrive",
            description: <span>Defeat Kagenobu Katsura and his allies to prevent the Mori Army's invasion.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Eliminating Obstacles", 
            description: <span>Defeat Mototake Kunishi and Magobei Oda to stop the reinforcements.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "Nuisance Will Not Be Forgiven", 
            description: <span>Defeat Motoyuki Nakashima to prevent the enemy from gathering.</span>,
            tips: 'This guy\'s on the north side of the Boss icon. You can run into him while escorting the engineers westward'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Lord's Grudge", 
            description: <span>Muneharu Shimizu and Munetomo Shimizu are set on retaliating against the Oda Army. Defeat them.</span>,
            tips: 'During "Reinforcements Arrive", these two will appear in the north central area where you did first mission'
        },
        { 
            only: "",
            type: "bonus",
            name: "A Clever Pincer", 
            description: <span>Defeat Motosuke Hirage and Hyobu Kihara to prevent a pincer attack.</span>,
            tips: 'Just after the previous objective, these guys come out of the northeastern garrison'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Seizing the Garrison", 
            description: <span>Defeat Motoharu Kikkawa and Munekatsu Nomi to capture the garrison.</span>,
            tips: 'After completing "Reinforcements Arrive", the south central garrison will open up and allow you to approach these guys'
        },
    ],

    rareWeapon: [{
        name: "Moon's Divine Providence",
        description: <span>S Rank all with <span className="ally-style">Kanbei Kuroda</span> on Hard or greater.</span>,
        tips: 'Other half is at Oda 3-2, Battle of Kannonji Castle, using Oichi'
    }]
}