// import image from 'assets/stages/reverie_stage8.webp';

export const reverie_stage8 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 8",
    stageName: "The Truth of Honnoji",
    // stageImage: image,
    objectives: [
        { 
            name: "Clash of the Three Titans", 
            description: <span>Defeat Yoshimoto Imagawa, Kenshin Uesugi, and Shingen Takeda.</span>,
            tips: ``,
        },
        { 
            name: "Defending the Bridge", 
            description: <span>Stop Motonobu Okabe and his allies from breaking through the central bridge.</span>,
            tips: ``,
        },
        { 
            name: "Alliances", 
            description: <span>Rendezvous with Mitsuhide Akechi.</span>,
            tips: ``,
        },
        { 
            name: "Gathering at Honnoji", 
            description: <span>Defeat Tomonobu Saito and his allies, and prevent Nobutada Oda and his allies from being taken out.</span>,
            tips: `After you complete this objective, about four more will trigger back to back. So be ready`,
        },
        { 
            name: "Escaping Certain Death", 
            description: <span>Defeat the enemy troops.</span>,
            tips: `Timed`,
        },
        { 
            name: "The Three Titans Do Battle", 
            description: <span>Defeat Yoshimoto Imagawa, Kenshin Uesugi, and Shingen Takeda.</span>,
            tips: ``,
        },
        { 
            name: "Chasing Shadows", 
            description: <span>Find and defeat the spy captains controlling the illusions.</span>,
            tips: `Mitsuki will eventually point out all three locations for you if you're having trouble. If you wanna know ahead of time, the locations are: Northwest corner, Southeast corner, Catwalk where archers were located`,
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Battle of Bonds", 
            description: <span>Defeat Shigenaga Honjo and his allies, and prevent Sadakatsu Murai and his allies from being taken out.</span>,
            tips: `Whenever "Gathering at Honnoji" starts, you will see allies coming in from the southwest. Exactly where you met up with Mitsuhide. Go back down there and approach them to trigger this objective`,
        },
        { 
            only: "",
            type: "bonus",
            name: "Escaping the Rain", 
            description: <span>Defeat the archer captains.</span>,
            tips: `These guys show up just after you complete "Gathering at Honnoji". They are located in the central catwalk area. Same place the riflemen were in Oda's Honnoji. Not sure if approaching them is required for triggering objective`,
        },
        { 
            only: "",
            type: "bonus",
            name: "A Demon's Efforts", 
            description: <span>Defeat the enemy troops with a Musou Attack.</span>,
            tips: `After you've completed "Gathering at Honnoji", and at the beginning of "Escaping Certain Death", this should trigger automatically. Also, it's timed`,
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "The Takeda Cavalry Charges Forth", 
            description: <span>Defeat the Takeda Cavalry, Katsuyori Takeda and his allies.</span>,
            tips: `This seems to be the first bonus objective you trigger. It should do so automatically some time after completing "Clash of the Three Titans"`,
        },
    ],
    
    /*
    rareWeapon: [{
        name: "Daikokuten",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: `Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa`
    }]
    */
}