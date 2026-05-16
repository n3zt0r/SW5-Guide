// import image from 'assets/stages/reverie_stage9.webp';

export const reverie_stage9 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 9",
    stageName: "The Great Unifier",
    // stageImage: image,
    objectives: [
        { 
            name: "Hideyoshi in Peril", 
            description: <span>Defeat Motoyasu Mori and his allies, and prevent Hideyoshi Hashiba from being taken out.</span>,
            tips: `Let "The Shogun's Shield" also trigger before defeating any targets`,
        },
        { 
            name: "The Shogun's Shield", 
            description: <span>Defeat Fujihide Mitsubuchi and his allies to invade the Ashikaga Main Camp.</span>,
            tips: ``,
        },
        { 
            name: "The Shogun's Shield", 
            description: <span>Defeat Fujihide Mitsubuchi and his allies to invade the Ashikaga Main Camp.</span>,
            tips: ``,
        },
        { 
            name: "The Battle Begins", 
            description: <span>Defeat Motoharu Kikkawa and his allies to break through the seige.</span>,
            tips: `Defeating 2 of these targets will get Magoichi to come out of his garrison, letting you trigger a bonus objective`,
        },
        { 
            name: "An Unexpected Development", 
            description: <span>Defeat Hanroku Otowa, Shogen Fukukita, and Daizen Funo to escape from the Mountain Path Eastern Garrison.</span>,
            tips: `It's a good idea to switch to your other character when this happens. And give yourself some time to see how the rest of the battlefield develops`,
        },
        { 
            name: "The Mori's Aggression", 
            description: <span>Survive the Mori Army's onslaught by defeating the enemy troops.</span>,
            tips: ``,
        },
        { 
            name: "No Mercy for Imposters", 
            description: <span>Defeat Ieyasu Tokugawa and his allies, and prevent the real Ieyasu Tokugawa and Sena from being taken out.</span>,
            tips: ``,
        },
        { 
            name: "Oda's Greatest Weapon", 
            description: <span>Defeat Magoichi Saika and his allies, and prevent Toshiie Maeda and Katsuiie Shibata from being taken out.</span>,
            tips: ``,
        },
        { 
            name: "Recapturing Shoryuji Castle", 
            description: <span>Defeat Hajime Watanabe and his allies.</span>,
            tips: ``,
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "The Iga's Shadow", 
            description: <span>Prevent Chubei Tomioka and Masayasu Fujibayashi from approaching Hideyoshi Hashiba.</span>,
            tips: `Let the objectives "Hideyoshi in Peril" and "The Shogun's Shield" trigger. Then defeat the 2 targets guarding the gate in front of 1P. Just to the west of 1P, Chubei Tomioka should show up. Approach them to trigger this objective`,
        },
        { 
            only: "",
            type: "bonus",
            name: "The Saika Mercenaries' Target", 
            description: <span>Defeat the Saika Mercenaries' leader, Magoichi Saika.</span>,
            tips: `After defeating 2 targets in "The Battle Begins", Magoichi should come out of his garrison. Approach him to trigger this objective`,
        },
        { 
            only: "",
            type: "bonus",
            name: "The Riflemen's Garrison", 
            description: <span>Defeat Magoroku Saika and Yosaburo Saika to capture the Mountain Path Western Garrison.</span>,
            tips: `Do you remember where the traitors were in "Battle of Yamazaki (Hashiba)? If you do, good for you. After completing "The Battle Begins" and approaching Hisahide Matsunaga, the gates to Magoichi's garrison will open. You should now be able to go to the traitor's location to trigger this objective`,
        },
        { 
            only: "",
            type: "bonus",
            name: "A Key Location", 
            description: <span>Defeat Terumoto Mori, Takaie Shishido, and Nobunao Kumagai to capture the Central Garrison.</span>,
            tips: `After "An Unexpected Development" starts, then "The Mori's Aggression" will also trigger. This, in turn, should open up the north central garrison that has 3 officers in it. Approach them to trigger this objective`,
        },
        { 
            only: "nobunaga_oda",
            type: "bonus",
            name: "Time to Settle the Score", 
            description: <span>Defeat Takakage Kobayakawa and Sandayu Momochi with Musou Attacks.</span>,
            tips: `If you've completed all you can in this stage, approach Shoryuji Castle and face off against Takakage. Sandayu will also appear, and should trigger this objective`,
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "The Ghosts of Aki", 
            description: <span>Defeat Motonari Mori.</span>,
            tips: `This objective is timed. After "An Unexpected Development" starts, then "The Mori's Aggression" will also trigger. Just south of where your player is trapped, Motonari Mori will show up. Approach him to trigger this objective`,
        },
    ],
    
    rareWeapon: [
            {
            name: "Heaven's Dread Star",
            description: <span>S Rank all with <span className="ally-style">Nobunaga Oda</span> on Hard or greater.</span>,
            tips: `Other half is on Akechi 6-2, Battle of Yamazaki, using Mitsuhide Akechi`
        }
    ]
}