// import image from 'assets/stages/mitsuhide_chapter5_stage5.webp';

export const mitsuhide_chapter5_stage5 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 5",
    stageName: "The Iga's Revolt",
    // stageImage: image,
    objectives: [
        { 
            name: "Breaching Amagoiyama Castle", 
            description: <span>Defeat Seibei Machii, Daizen Funo, and Masayasu Fujibayashi.</span>,
            tips: ''
        },
        { 
            name: "The Spreading Flames", 
            description: <span>Sakyo Koizumi and Mitsutsugu Ueda are commanding the flame archer squadron. Hurry and defeat them.</span>,
            tips: ''
        },
        { 
            name: "Breaching Hijiyama Castle", 
            description: <span>Shogen Fukukita and Tobei Momota are commanding the flame archer squadron. Hurry and defeat them.</span>,
            tips: ''
        },
        { 
            name: "The Iga Army's Trap", 
            description: <span>Defeat all the fireball captains to minimize ally losses.</span>,
            tips: ''
        },
        { 
            name: "Mitsuki Turns Her Back", 
            description: <span>Work with Kazuuji Nakamura to defeat Mitsuki.</span>,
            tips: ''
        },
        { 
            name: "Visions of a Comrade", 
            description: <span>Defeat the phantoms of Shikanosuke Yamanaka and Nagamasa Azai.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Stopping the Spy Captain Attack", 
            description: <span>Defeat all the spy captains to prevent an attack.</span>,
            tips: 'At the very beginning of the stage, some dialogue will mention spy captains showing up in the northeastern garrison. Go there to trigger this objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "Capturing the Western Garrison", 
            description: <span>Defeat Sukezaemon Nakabayashi and Chubei Tomioka to capture the Western Garrison.</span>,
            tips: 'During "Breaching Amagoiyama Castle" you should see troops show up at the northwestern garrison. One of your players will be locked in the eastern garrison. So have the other approach the northwestern garrison to trigger this objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Ninja's Secret Maneuvers", 
            description: <span>Defeat all the spy captains.</span>,
            tips: 'Describing this location is difficult. Do you remember in "Crossing of Iga", where one of Ieyasu\'s officers was surrounded by peasant bandits wanting to rob him? Go to that same location during "The Iga Army\'s Trap". It\'s to the west and slightly north of Ieyasu\'s location. It\'s the small garrison directly south of Hijiyama Castle. You will get a message telling you Otowa and Iga Reinforcements have arrived at various gates. Approach the spy captains coming from the location I described and you\'ll trigger this objective'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Targeting Ieyasu", 
            description: <span>Kamonnosuke Taya and the siege captains are after Ieyasu Tokugawa. Defeat them.</span>,
            tips: `After Mitsuki is done shooting her mouth off, you'll get some dialogue from Kamonnosuke Taya in the very southeastern garrison. Approach him and the siege captains to trigger this objective`
        },
    ],
    
    /*
    rareWeapon: [{
        name: "Daikokuten",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }]
    */
}