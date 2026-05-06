export const nobunaga_chapter4_stage6 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 6",
    stageName: "Battle of Odani Castle",
    stageImage: 'assets/stages/nobunaga_chapter4_stage6.webp',
    objectives: [
        { 
            name: "Blood-Stained Yamazakimaru",
            description: <span>Defeat the enemy troops to set fire to Yamazakimaru.</span>,
            tips: ''
        },
        { 
            name: "Capturing the Southern Garrison",
            description: <span>Defeat Kunishada Mitamura to capture the Southern Garrison.</span>,
            tips: ''
        },
        { 
            name: "Breaking Through the Southern Lines",
            description: <span>Defeat Ujitane An'yoji and Hidetoshi Onogi to clear a path.</span>,
            tips: ''
        },
        { 
            name: "Momochi's Plan",
            description: <span>Defeat Naoyori Nakajima and Naochika Nakajima while protecting the fireball captains.</span>,
            tips: ''
        },
        { 
            name: "He Who Stands in the Way",
            description: <span>Defeat Oichi and her allies to capture Ozuku Garrison.</span>,
            tips: ''
        },
        { 
            name: "The Guardians of Kingomaru",
            description: <span>Defeat Katsuiie Shibata and the shield soldiers to capture Kingomaru.</span>,
            tips: ''
        },
        { 
            name: "Mitsuhide in Peril",
            description: <span>Defeat Kazumasa Isono and his allies before they approach Mitsuhide Akechi.</span>,
            tips: 'This will trigger after 3 of the 4 targets in "He Who Stands in the Way" are defeated. Defeating 4/4 will also trigger "Massacre at Kyogokumaru". If you leave Oichi undefeated, complete "Mitsuhide in Peril", then circle back to finish Oichi, it might make your life easier'
        },
        { 
            name: "The Massacre at Kyogokumaru",
            description: <span>Defeat Tsunachika Kaiho and his allies to set fire to Kyogokumaru.</span>,
            tips: ''
        },
        { 
            name: "Unwavering Resolve",
            description: <span>Defeat Oichi and Katsuiie Shibata.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            type: "bonus",
            name: "Hidden in the Garrison", 
            description: <span>Defeat the spy captains hiding in the garrison.</span>,
            tips: 'After the first mission and fire scene, Nobunaga will mention a strange garrison. It\'s straight above 2P\'s starting position. Use 1P to get there and spy captains will show up to trigger this objective'
        },
        { 
            type: "bonus",
            name: "Allied Reinforcements Arrive", 
            description: <span>Defeat the enemy troops in the External Ward so the allied reinforcements can be brought in.</span>,
            tips: 'Trigger by entering the southeastern garrison. Which is a little ways south of Katsuiie Shibata\'s starting position'
        },
        { 
            type: "bonus",
            name: "Rendezvous with Nobunaga", 
            description: <span>Defeat Katsumoto Katagiri and the spear captains to rendezvous with Nobunaga earlier than planned.</span>,
            tips: 'After you do "Guardians of Kingomaru", run to the area north of where "Mitsuki\'s Progress" was located. You should see Katagiri and his spear captains, which should trigger this objective. Alternatively, you could leave Oichi alive, finish "Nobunaga in Danger", then walk right up to Katagiri'
        },
        { 
            type: "bonus",
            name: "The Swift Arrows of the Azai", 
            description: <span>Defeat the archer captains to capture Nakamaru.</span>,
            tips: 'Along the trail that is east of "Massacre at Kyogokumaru", there\'s a weapon box. Just south of the weapon box is a small block of archers. After completing the massacre, this will trigger when approaching the archers. I have not been able to trigger this before completing the massacre'
        },

        // Special Objectives
        { 
            type: "special",
            name: "Mitsuki's Progress", 
            description: <span>Defeat Masamoto Azai and Kiyotsuna Akao while protecting the spy captains.</span>,
            tips: 'During "Breaking Through the Southern Lines" and "Momochi\'s Plan", you\'ll get some dialogue from Mitsuki indicating a garrison she wants to take down. Her spy captains will show up nearby. Approach the garrison to trigger the objective'
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