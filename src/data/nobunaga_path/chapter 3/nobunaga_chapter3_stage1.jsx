export const nobunaga_chapter3_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Battle of Northern Omi",
    stageImage: 'assets/stages/nobunaga_chapter3_stage1.webp',
    objectives: [
        { 
            name: "Thwarting the Azai Army Ambush",
            description: <span>Defeat Kiyosada Amenomori and Naotsune Endo to stop the Azai Army's ambush preparations.</span>
        },
        { 
            name: "Hanbei Considers",
            description: <span>Defeat all spear captains to capture the Eastern Garrison.</span>
        },
        { 
            name: "Breaching Yamazakimaru",
            description: <span>Defeat Tsunachika Kaiho and Naoyori Shinjo to open Yamazakimaru gate.</span>
        },
        { 
            name: "Take Out the Azai Officers",
            description: <span>DefeDefeat Sadayuki Atsuji and Ujinao Imamuraat.</span>
        },
        { 
            name: "Deer Hunter",
            description: <span>Defeat Shikanosuke Yamanaka to advance toward the Odani Main Castle Ward.</span>
        },
        { 
            name: "Reunion",
            description: <span>Defeat Mitsuhide Akechi.</span>
        },
        
        // Bonus Objectives
        { 
            type: "bonus",
            name: "Make the First Move", 
            description: <span>Defeat all the siege captains to prevent their attack.</span>,
            tips: 'The third finger from the left has siege captains in front of the locked gate. Approach them to trigger this objective',
        },
        { 
            type: "bonus",
            name: "The Azai Army's Lifeline", 
            description: <span>Defeat Kyotsuna Akao to capture the Western Garrison.</span>,
            tips: 'After completing "Breaching Yamazakimaru", just to the east Akao will show up talking about provisions. It should trigger by itself',
        },
        { 
            type: "bonus",
            name: "Shortcut to the Commander", 
            description: <span>Defeat the enemy troops on the south side of Kyogokumaru.</span>,
            tips: 'During "Take Out the Azai Soldiers", you can take the second finger path all the way north to the locked gate. Just south of Shikanosuke. You\'ll hear some dialogue from Nobunaga, then the mission should trigger. Do not complete this yet. If this objective is completed, the gate will open and the game will discard the "Take Out the Azai Soldiers" objective. Circle back around to the west to complete "Take Out the Azai Soldiers". Then you can return to the area to complete your 200 kills. Do not complete "Deer Hunter" until this objective is complete',
        },
        { 
            only: "nobunaga_oda",
            type: "bonus",
            name: "A Head On Battle", 
            description: <span>Nobunaga Oda must defeat Nagamasa Azai with a Musou Attack.</span>,
            tips: '',
        },

        // Special Objectives
        { 
            type: "special",
            name: "A False Start", 
            description: <span>Defeat Kazumasa Isono and Ujitane Anyoji.</span>,
            tips: 'After you complete "Breaching Yamazakimaru", these guys will come out of their garrison in the southwest. Approach them to trigger this objective',
        },
    ],

    /*
    rareWeapon: {
        name: "Daikokuten's Mallet",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }
    */
}