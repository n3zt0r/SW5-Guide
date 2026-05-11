export const nobunaga_chapter6_stage5 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 5",
    stageName: "Crossing of Iga",
    stageImage: 'assets/stages/nobunaga_chapter6_stage5.webp',
    objectives: [
        { 
            name: "Hanroku of Otowa",
            description: <span>Defeat Hanroku Otowa and all the rifle captains to prevent Nobutoshi Honda from being taken out.</span>,
            tips: ''
        },
        { 
            name: "After Ieyasu",
            description: <span>Defeat Hachiemon Yamada and all the spy captains to stop their pursuit.</span>,
            tips: ''
        },
        { 
            name: "New Retreat Point",
            description: <span>Defeat Magodayu Nomura and Dojun Iganozaki to break through Nunobikiguchi Garrison.</span>,
            tips: ''
        },
        { 
            name: "Maruyama Castle's Reinforcements",
            description: <span>Work with Yasumasa Sakakibara to defeat Tarojiro Koyama and Tarozaemon Koyama.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Ambusing Hijiyama Castle", 
            description: <span>Defeat Sakyo Koizumi and Chubei Tomioka to break through Hijiyama Castle.</span>,
            tips: 'This will trigger when Ieyasu passes by (enters?) the west central garrison'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Wanderers of Hioki Shrine", 
            description: <span>Defeat the enemy troops inside Hioki Shrine to stop their pursuit.</span>,
            tips: 'You have to step into the northeastern garrison sometime after Anayama is slain'
        },
        { 
            only: "hanzo_hattori",
            type: "bonus",
            name: "The Demon Hanzo's Keen Senses", 
            description: <span>Hanzo must defeat all the spy captains.</span>,
            tips: 'Have Hanzo go near the northwestern garrison. He\'ll have some dialogue about it being suspicious. Run in and wait for the spy captains to appear to trigger this one'
        },
        { 
            only: "",
            type: "bonus",
            name: "Rescuing Tadatsugu Sakai", 
            description: <span>Defeat all the peasant leaders to prevent Tadatsugu Sakai from being taken out.</span>,
            tips: 'This triggered for me immediately after "Allied Officers of the Western Garrison" and was just east of that objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Allied Officers of the Western Garrison", 
            description: <span>Defeat Ukon Ieki, Daizen Funo, and Masayasu Fujibayashi to prevent Kasumasa Ishikawa and Yasumichi Ishikawa from being taken out.</span>,
            tips: 'These guys will pop up wayyy on the west side where you started the stage at'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Kido of Otowa", 
            description: <span>Defeat Yazaemon Kido and all the rifle captains to prevent the ambush.</span>,
            tips: 'Just after "Maruyama Castle\'s Reinforcements", all the gates will open up. Quickly go south and rush Yazaemon Kido before Ieyasu comes down to fight Momochi'
        },
    ],

    rareWeapon: {
        name: "Gale Slicer",
        description: <span>S Rank all with <span className="ally-style">Hanzo Hattori</span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 4-7, Battle of Mikatagahara, with Tadakatsu Honda'
    }
}