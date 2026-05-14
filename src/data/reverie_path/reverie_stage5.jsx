// import image from 'assets/stages/reverie_stage5.webp';

export const reverie_stage5 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 5",
    stageName: "Final Battle of Odani Castle",
    // stageImage: image,
    objectives: [
        { 
            name: "Raid on Kyogokumaru", 
            description: <span>Defeat Hideyoshi Hashiba and Hanbei Takenaka to prevent Hisamasa Azai from being taken out.</span>,
            tips: ``,
        },
        { 
            name: "The Oda's Arsonist", 
            description: <span>Defeat Sandayu Momochi and stop him from setting fire to Fukujumaru.</span>,
            tips: ``,
        },
        { 
            name: "Mitsuhide's Defeat", 
            description: <span>Defeat Mitsuhide Akechi.</span>,
            tips: ``,
        },
        { 
            name: "Asakura Army Reinforcements", 
            description: <span>Defeat Hisahide Matsunaga and his allies, and prevent the Asakura Army reinforcements from being taken out.</span>,
            tips: ``,
        },
        { 
            name: "Toshimitsu's Ambush", 
            description: <span>Toshimitsu Saito and Ittetsu Inaba are plotting to attack your allies. Defeat them.</span>,
            tips: ``,
        },
        { 
            name: "The Koga Ninja Ambush", 
            description: <span>Defeat Mitsuki and Kazuuji Nakamura to prevent the Odani Castle Main Ward from falling.</span>,
            tips: ``,
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Fighting with FIre", 
            description: <span>Defeat the fireball captains to prevent Kunisada Mitamura from being taken out.</span>,
            tips: `At beginning of stage, have 2P head directly west. Dialogue should catch up, and you should hear Katsuie saying we have to do something to help our allies. This should trigger this bonus objective`,
        },
        { 
            only: "oichi",
            type: "bonus",
            name: "Spirit Rally", 
            description: <span>Oichi must defeat the enemy troops to rally your allies.</span>,
            tips: `West of 2P starting position, you can see Kunisada Mitamura. Further west still is the area Oichi needs to approach during "Raid on Kyogokumaru". You should get some dialogue from her and this bonus objective should trigger`,
        },
        { 
            only: "yoshikage_asakura",
            type: "bonus",
            name: "What Is Strength", 
            description: <span>Yoshikage Asakura must defeat Mitsuhide Akechi.</span>,
            tips: `After completing "The Oda's Arsonist", Mitsuhide will come out of the locked gate in the south. When you have Yoshikage in your team, have him go that direction and the objective should trigger`,
        },
        { 
            only: "katsuie_shibata",
            type: "bonus",
            name: "Against Toshiie", 
            description: <span>Katsuie Shibata must defeat Toshiie Maeda.</span>,
            tips: `After "Toshimitsu's Ambush" has started, Toshiie should show up in the southeastern area. Approach him with Katsuie. Katsuie's asks him, "Be a good man and take two steps to the left would you?". I liked that one`,
        },
        { 
            only: "",
            type: "bonus",
            name: "Just outside the Oda Main Camp", 
            description: <span>Defeat all the spear captains protecting the Oda Army Main Camp.</span>,
            tips: `During "The Koga Ninja's Ambush", you'll hear some dialogue from a spear captain. It shows him in the area directly west from the garrison we just got locked up in. It's also just north of the Oda Main Camp. When you get free, approach them to trigger this objective`,
        },
        { 
            only: "nagamasa_azai",
            type: "bonus",
            name: "A Foe to Vanquish", 
            description: <span>Nagamasa Azai must defeat Nobunaga Oda with a Musou Attack.</span>,
            tips: `After completing "The Koga Ninja Ambush", the gates to the Oda main camp should open. Approach Nobunaga and this objective should trigger`,
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Azai Army Reinforcements", 
            description: <span>Defeat Narimasa Sassa and Morinari Ando, and prevent Hidetoshi Onogi from being taken out.</span>,
            tips: `After Toshiie shows up in the southeast, other officers will appear in the south central area as well. Yoshikage should mention hurrying to their aid, and you should have it triggered then`,
        },
    ],
    
    rareWeapon: [{
        name: "Evil's Demise",
        description: <span>S Rank all with <span className="ally-style">Nagamasa Azai</span> on Hard or greater.</span>,
        tips: `Other half is on Akechi 5-8, Battle of Kozuki Castle (Mori), with Takakage Kobayakawa`
    }]
}