// import image from 'assets/stages/mitsuhide_chapter5_stage7.webp';

export const mitsuhide_chapter5_stage7 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 7",
    stageName: "Battle of Shigisan Castle (Matsunaga)",
    // stageImage: image,
    objectives: [
        { 
            name: "Sweeping the Front Line", 
            description: <span>Shikanosuke Yamanaka and his allies have taken up their position on the front line. Defeat them.</span>,
            tips: ``
        },
        { 
            name: "Fire Is My Forte", 
            description: <span>Escort the fireball soldiers to the Eastern Garrison.</span>,
            tips: ``
        },
        { 
            name: "A Golden Opportunity", 
            description: <span>Defeat Nobutada Oda before the drawbridge is lowered.</span>,
            tips: ``
        },
        { 
            name: "Till the Gates Open", 
            description: <span>Defeat the enemy troops surrounding Kataoka Castle.</span>,
            tips: ``
        },
        { 
            name: "Impenetrable Gates", 
            description: <span>Defeat HIdeyoshi Hashiba and his allies.</span>,
            tips: ``
        },
        { 
            name: "Shigiyama Castle Sealed Tight", 
            description: <span>Defeat Toshimitsu Saito, Nagachika Kanamori, and Yoritaka Hachiya.</span>,
            tips: ``
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "The Concealed Oda Ninja", 
            description: <span>Defeat Kazuujji Nakamura before he can advance.</span>,
            tips: `During the first objective, you'll hear Kazzuji's dialogue. He'll appear at the the northeastern side, north of the Eastern Garrison. Run up there to him to trigger the objective`
        },
        { 
            only: "",
            type: "bonus",
            name: "Boosting Morale", 
            description: <span>Defeat Hanbei Takanaka to stop the reinforcements.</span>,
            tips: `After completing "A Golden Opportunity", cross the bridge and approach Hanbei to trigger this objective`
        },
        { 
            only: "",
            type: "bonus",
            name: "Punishment Most Foul", 
            description: <span>Defeat Yoshihisa Mori and Shigenobu Matsukura.</span>,
            tips: `After defeating Hideyoshi and company, Nobunaga will comment on how stubborn Hisahide is and send out his rear guard. After this, two officers will pop up out of two different gates. One is the garrison you firebombed earlier. The other is northwest of Nobutada's position earlier. Approach either one to start this objective`
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Elevated Spectacle", 
            description: <span>Defeat Sandayu Momochi.</span>,
            tips: `After the Akechi surprise attack shows up, you can find this guy hiding out in the tiny southwestern most garrison. Approach him to trigger it`
        },
    ],
    
    rareWeapon: [{
        name: "Harbinger of Disaster",
        description: <span>S Rank all with <span className="ally-style">Hisahide Matsunaga</span> on Hard or greater.</span>,
        tips: `Other half is on Reverie 1-3, Iga's Great Uprising, using Sandayu Momochi`
    }]
}