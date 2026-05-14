// import image from 'assets/stages/reverie_stage2.webp';

export const reverie_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "Match in Eiroku",
    // stageImage: image,
    objectives: [
        { 
            name: "A Little Test", 
            description: <span>To win the first match, defeat the Ashikaga Army troops.</span>,
            tips: ``,
        },
        { 
            name: "Caught Up", 
            description: <span>To win the second match, defeat Nagamasa Azai and his allies.</span>,
            tips: ``,
        },
        { 
            name: "Find That Ninja!", 
            description: <span>To win the third match, find and defeat Mitsuki and Kazzuji Nakamura.</span>,
            tips: ``,
        },
        { 
            name: "Uninvited Guests", 
            description: <span>Strike down Hisahide Matsunaga and Hisamichi Matsunaga for their sudden intrusion.</span>,
            tips: ``,
        },
        { 
            name: "Introducing the Vice-Shogun", 
            description: <span>Terumoto Mori and Motoharu Kikkawa are acting under Motonari Mori's orders. Defeat them.</span>,
            tips: `Will not appear if you are playing as Motonari Mori`,
        },
        { 
            name: "Taking Care of the Vice-Shogun", 
            description: <span>Katsuyori Takeda, Masakage Yamagata, and Masanobu Kosaka are acting under Shingen Takeda's orders. Defeat them.</span>,
            tips: `Will not appear if you are playing as Shingen Takeda`,
        },
        { 
            name: "An Audience with the Vice-Shogun", 
            description: <span>Ieyasu Tokugawa, Hanzo Hatorri, and Tadakatsu Honda are acting under Yoshimoto Imagawa's orders. Defeat them.</span>,
            tips: `Will not appear is you are playing as Yoshimoto`,
        },
        { 
            name: "To the Vice-Shogun", 
            description: <span>Toshimitsu Saito and his allies are acting under Kenshin Uesugi's orders. Defeat them.</span>,
            tips: `Will not appear if you are playing as Kenshin`,
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Battle Flow", 
            description: <span>Defeat Mitsuhide Akechi, Nagamasa Azai, and Yoshikage Asakura consecutively.</span>,
            tips: `During "Caught Up" head south towards on of the named officers to trigger this objective. "Consecutively" just means one after the other in any order`,
        },
        { 
            only: "",
            type: "bonus",
            name: "An Offering for the Shogun", 
            description: <span>Defeat the thieves, and prevent the supply unit from being taken out.</span>,
            tips: `During "Caught Up", after you defeat 3 targets, Wanderer Leaders will show up directly north of Yoshiaki Ashikaga. Approach them to trigger this objective. They will be the only yellow enemies on the map`,
        },
        { 
            only: "",
            type: "bonus",
            name: "Self-Preservation", 
            description: <span>Defeat Hisahide Matsunaga without allowing Yoshiaki Ashikaga's health to drop below 50 percent.</span>,
            tips: `This objective triggered by intercepting Hisahide before he enters Yoshiaki's main camp. After completing "Find That Ninja!" and "Uninvited Guests" started. You can plan ahead by having 2P waiting at main camp, while 1P lands killing blows on Mitsuki and Kazzuji`,
        },
        { 
            only: "",
            type: "bonus",
            name: "In the Heat of the Moment", 
            description: <span>Defeat the Miyoshi Triumvirate, and prevent Yoshiaki Ashikaga from being taken out.</span>,
            tips: `After taking out one of the main generals that oppose the Vice-Shogun, Miyoshi will show up in the northwestern corner and make a run for Yoshiaki. Approach them to trigger this objective`,
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Unparalleled Power", 
            description: <span>Put those enemy officers in their place by defeating them with a Musou Attack.</span>,
            tips: `After "Uninvited Guests" is completed, the main officers will show up around the map. Mori, Imagawa, Uesugi, or Takeda will show up, depending on who you picked for the stage. This should trigger automatically after they do. They will then start to send out their underlings. Finish any five of them with a Musou Attack to complete this objective`,
        },
    ],
    
    rareWeapon: [
        {
            name: "Sacred Flame Mortar",
            description: <span>S Rank all with <span className="ally-style">Magoichi Saika</span> on Hard or greater.</span>,
            tips: `Other half is on Oda 5-5, Battle of Kizugawaguchi, with Kazuuji Nakamura`
        }
    ]
}