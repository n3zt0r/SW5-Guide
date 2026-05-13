export const nobunaga_chapter5_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "Battle of Tetorigawa",
    stageImage: 'assets/stages/nobunaga_chapter5_stage4.webp',
    objectives: [
        { 
            name: "Gonroku's March North",
            description: <span>Defeat the enemy trooops at the Northwestern Garrison to capture the garrison.</span>,
            tips: ''
        },
        { 
            name: "The God of War's Commandments",
            description: <span>Defeat Kunikiyo Yamaura, Chikanori Suibara, and Yoshitsuna Takenomata, and prevent Hideyoshi Hashiba from being taken out.</span>,
            tips: ''
        },
        { 
            name: "Onikojima Strikes",
            description: <span>Defeat Yataro Onikojima and oshihide Shida to capture the Northern Garrison.</span>,
            tips: ''
        },
        { 
            name: "In Pursuit of Righteousness",
            description: <span>Defeat Kagehiro Kitajo and Shigeie Shibata to protect the Oda Main Camp.</span>,
            tips: ''
        },
        { 
            name: "Hold the Northern Garrison",
            description: <span>Prevent Tomonobu Saito and Nagazane Irobe from reaching the Northern Garrison.</span>,
            tips: ''
        },
        { 
            name: "Onwards to the Uesugi Main Camp",
            description: <span>Defeat Shigenaga Honjo, Nagatsu Shibata, and Takahiro Kitajo to advance toward Matto Castle.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "To Bring Down a God", 
            description: <span>Defeat Nagahide Yasuda and Hidetsuna Honjo, and prevent Hidemasa Hori from being taken out .</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "The Ikki Brotherhood's Desperate Fight", 
            description: <span>Defeat Raijin Shimotsuna and all the warrior monks.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "Ladies First", 
            description: <span>Defeat Kagemochi Amakasu and Nagachika Kawada, and prevent Oichi from being taken out.</span>,
            tips: 'Try to do this before finishing "Onwards to the Uesugi Main Camp" to get it to trigger'
        },
        { 
            only: "katsuie_shibata",
            type: "bonus",
            name: "Beauty and the Gonruko", 
            description: <span>Hurry and defeat Shigenaga Honjo, Nagaatsu Shibata, and Takahiro Kitajo.</span>,
            tips: 'Triggers when Katsuiie is playable. Same mission as "Onward" but with a 3 min time limit. Before completing this, have 2P approach Nagachika Kawada\'s team near Oichi. This will trigger the bonus objective "Ladies First"'
        },
        { 
            only: "toshiie_maeda",
            type: "bonus",
            name: "For Lord Nobunaga", 
            description: <span>Toshiie Maeda must defeat Kenshin Uesugi with a Musou Frenzy Attack.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            type: "special",
            name: "Attack on Mato Castle Western Garrison", 
            description: <span>Defeat Kagenaga Sanponji and Nobuyoshi Iwai to open the Mato Castle Western Garrison Gate.</span>,
            tips: 'Should see this trigger directly after "Ladies First" and "Onwards" have finished'
        },
    ],

    rareWeapon: [{
        name: "Demon's Revolt",
        description: <span>S Rank all with <span className="ally-style">Katsuie Shibata</span> on Hard or greater.</span>,
        tips: 'Other half is on Akechi 1-4, Battle of Akechi Castle, with Toshimitsu Saito'
    }]
}