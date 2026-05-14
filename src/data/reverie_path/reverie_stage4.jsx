// import image from 'assets/stages/reverie_stage4.webp';

export const reverie_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "Final Battle of Kanegasaki",
    // stageImage: image,
    objectives: [
        { 
            name: "Getting Out of Trouble", 
            description: <span>Create a diversion by defeating Kageakira Takahashi, Naozumi Magara, and Yoshinobu Yamazaki.</span>,
            tips: ``,
        },
        { 
            name: "Raid Preparations", 
            description: <span>Defeat Katsuie Shibata and Oichi to assist Mitsuhide Akechi.</span>,
            tips: ``,
        },
        { 
            name: "All Eyes on Me", 
            description: <span>Draw the enemy's attention by defeating Kageakira Asakura and Nagashige Toda.</span>,
            tips: ``,
        },
        { 
            name: "Showdown with Yoshikage", 
            description: <span>Defeat Yoshikage Asakura.</span>,
            tips: ``,
        },
        { 
            name: "Slaying the Demon Shibata", 
            description: <span>Defeat Katsuie Shibata and the Azai Army officers to attack the enemy main camp.</span>,
            tips: ``,
        },
        { 
            name: "Fleeing the Battlefield", 
            description: <span>Prevent Oichi and Nagamasa Azai from rendezvousing.</span>,
            tips: `Taking out Katsuie Shibata will open up the gate to the west and allow you to catch up with Oichi that way. I'm not sure if the other officers must be defeated also. Either way, it's the alternative path is really long`,
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Rebellion at Odani Castle", 
            description: <span>Defeat Kagetsune Asakura and Kagetake Asakura to rescue Hideyoshi Hashiba.</span>,
            tips: `After defeating one of the targets for primary objective "All Eyes on Me", you should see an ambush spring at your main camp. Hurry over there to trigger this objective`,
        },
        { 
            only: "",
            type: "bonus",
            name: "Taking Advantage", 
            description: <span>Defeat the enemy troops in the Central Garrison to lower the enemy's morale.</span>,
            tips: `Just to the west of Kunisada Mitamura's initial position is a large round, open area. After Mitsuhide shows back up, and "Showdown with Yoshikage" triggers, go there. Nobunaga should yell out and trigger this bonus objective`,
        },
        { 
            only: "noh",
            type: "bonus",
            name: "From a Chrysalis", 
            description: <span>Noh must defeat Hidemura Hori and Masamoto Azai to advance the front line.</span>,
            tips: `After "Showdown with Yoshikage" is completed, the north central gates will open up. This should allow Noh to approach Hori to get this objective to trigger`,
        },
        { 
            only: "",
            type: "bonus",
            name: "Toshiie in Trouble", 
            description: <span>Defeat Naotsune Endo to aid Toshiie Maeda.</span>,
            tips: `Once you defeat two targets of "Slaying the Demon Shibata", you'll notice Endo gets some dialogue. Then he comes out of his garrison and heads for Toshiie. Mitsuki will give you some extra dialogue to try and get your attention too. So go help the guy out to trigger this objective`,
        },
        { 
            only: "noh",
            type: "bonus",
            name: "The Butterfly Soars", 
            description: <span>Noh must defeat Magoichi Saika with a Cooperative Musou Attack.</span>,
            tips: `Once you defeat Nagamasa, Magoichi will show up. He will start traveling north to an escape point. So cut him off with Noh to trigger this objective.`,
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Hanbei's Brilliant Scheme", 
            description: <span>Protect the messengers to execute the plan.</span>,
            tips: `During the "Getting Out of Trouble" objective, Hanbei will send out three messengers. Approach any of them to trigger this objective. The messengers will go to nearby forts and just stand there. You must protect these guys until the time limit expires`,
        },
    ],
    
    rareWeapon: [
        {
            name: "Amenohajiyumi",
            description: <span>S Rank all with <span className="ally-style">Noh</span> on Hard or greater.</span>,
            tips: `Other half is on Akechi 5-8, Battle of Kazuki Castle (Mori), using Motonari Mori`
        }
    ]
}