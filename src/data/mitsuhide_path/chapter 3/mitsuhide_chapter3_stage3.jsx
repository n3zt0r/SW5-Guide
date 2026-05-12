// import image from 'assets/stages/mitsuhide_chapter3_stage3.webp'

export const mitsuhide_chapter3_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Revival of the Amago Clan",
    // stageImage: image,
    objectives: [
        { 
            name: "To Hananodan", 
            description: <span>Defeat Hiroshige Katsura and Motosuke Kunishi to capture Hananodan.</span>,
            tips: ''
        },
        { 
            name: "Katsuhisa in Peril", 
            description: <span>Don't let Takashige Amano and the spearmen approach Katsuhisa Amago.</span>,
            tips: ''
        },
        { 
            name: "Clearing Out the Back Road", 
            description: <span>Escort the engineers to the Main Ward.</span>,
            tips: ''
        },
        { 
            name: "A Blade That Won't Hit True", 
            description: <span>Defeat Motoharu Kikkawa and his allies.</span>,
            tips: ''
        },
        { 
            name: "Aiding a Retreat", 
            description: <span>Defeat Hajime Watanabe and HirohideAsonuma, and prevent Hidetsuna Yokomichi and Takamitsu Yokomichi from being taken out.</span>,
            tips: ''
        },
        { 
            name: "A Rain of Arrows", 
            description: <span>Defeat Takakage Kobayakawa and his allies to lower the drawbridge.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Striking from the Rear", 
            description: <span>Defeat the enemy troops in the Okomoriguchi Garrison.</span>,
            tips: 'During the first objective, enter the garrison that\'s just to the east of 2P starting position. It has a backward L guard gate'
        },
        { 
            only: "",
            type: "bonus",
            name: "Ambush", 
            description: <span>Take out all the spy captains.</span>,
            tips: 'After taking out a two or three targets of "A Blade Won\'t Hit True" (or maybe just Kikkawa), you\'ll see four officers pop up just east and north of Katsuhisa Amago. Saito will then mention ninjas in a garrison east of Katsuhisa\'s location. Go there to trigger and defeat them'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Those Who Long for the Amago", 
            description: <span>Defeat Narihide Kodama, Narikata Kodama, and Morishige Sugihara, and prevent the peasants from being taken out.</span>,
            tips: 'After finishing off Kikkawa and his allies, you\'ll see a whopping 5 officers appear all over the map. Two are for the main objectives, and the other three are for this objective. If you have an exceedingly fast character, you could kill these 3 too fast before the bonus objective triggers. So be sure at least one of them is still alive, and wait for the Peasants to start doing their dialogue. After that, approach one of the three and this bonus objective should then trigger'
        },
    ],
    
    /*
    rareWeapon: {
        name: "Daikokuten",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }
    */
}