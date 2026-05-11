export const nobunaga_chapter6_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "Conquest of Kai",
    stageImage: 'assets/stages/nobunaga_chapter6_stage2.webp',
    objectives: [
        { 
            name: "The Beginnings of Betrayal",
            description: <span>Defeat the enemy troops to send the enemy into a state of panic.</span>,
            tips: ''
        },
        { 
            name: "The Last of the Takeda Cavalry",
            description: <span>Defeat the Takeda Cavalry.</span>,
            tips: ''
        },
        { 
            name: "To Shinpu Castle!",
            description: <span>Defeat Masasada Oyamada and Masayuki Oyamada to open the Shinpu Castle gate.</span>,
            tips: ''
        },
        { 
            name: "Castle Ruins",
            description: <span>Defeat Morinobu Nishina and Masanao Hoshina to capture Shinpu Castle.</span>,
            tips: ''
        },
        { 
            name: "The Takeda Struggle",
            description: <span>Defeat Tomoharu Komiyama and Sadamitsu Kanemaru to advance toward Mt. Tenmoku.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "The Takeda's Foothold", 
            description: <span>Defeat Nobukado Takeda and Yoritoyo Shiwa in order to capture the garrisons near Shinpu Castle.</span>,
            tips: 'Just approach either of these guys while you\'re taking out the cavalry captains'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Takeda Buy Some Time", 
            description: <span>Defend the Oda Main Camp by defeating the enemy troops surrounding the main camp.</span>,
            tips: 'Before completing "Castle Ruins", make 2P go sit at your main camp. This should allow you to catch this mission and deal with it quickly. The right Gate puts out the most peons'
        },
        { 
            only: "hanzo_hattori",
            type: "bonus",
            name: "For My Lord", 
            description: <span>Defeat the enemy troops at Mt. Tenmoku.</span>,
            tips: 'Have Hanzo escort Nobutada and this should pop up before Tsuchiya\'s garrison'
        },
        { 
            only: "",
            type: "bonus",
            name: "A Guide to Treachery", 
            description: <span>Escort Nobutada Anayama to the Mt. Tenmaru summit.</span>,
            tips: ''
        },
        { 
            only: "",
            type: "bonus",
            name: "Almost at the Summit", 
            description: <span>Defeat Nobutoyo Takeda, Mitsukata Nagasaka, and Tomohide Okuma to open a path to Mt. Tenmaru summit.</span>,
            tips: 'You USUALLY have to complete "The Takeda Struggle" before this mission will trigger. Coming around from the back side USUALLY will not trigger it. The only exception I have found is if you go up the back way and finish the escort mission. Then backtrack until you hear Nobunaga talk about "suspicious garrisons". Then you can jump down from the back cliff and trigger it'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "The General Who Killed a Thousand Men", 
            description: <span>Defeat Masatsune Tsuchiya.</span>,
            tips: 'Nobutada Anayama will lead you straight to him to trigger this mission. This should be around the time Nobushige defects'
        },
    ],

    rareWeapon: {
        name: "Divine Thunder",
        description: <span>S Rank all with <span className="ally-style">Yasuke</span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 3-2, Battle of Anegawa, with Mitsuki'
    }
}