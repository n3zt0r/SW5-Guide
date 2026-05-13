// import image from 'assets/stages/mitsuhide_chapter3_stage4.webp'

export const mitsuhide_chapter3_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "Battle of Rokujo",
    // stageImage: image,
    objectives: [
        { 
            name: "Defending Honkokuji", 
            description: <span>Defeat the enemy troops attacking Honkokuji.</span>,
            tips: ''
        },
        { 
            name: "Messenger Dispatch", 
            description: <span>Escort the messengers to the target point.</span>,
            tips: 'The path they take is tricky and goes over other roofs'
        },
        { 
            name: "Covert Aggression", 
            description: <span>Defeat Yoshiharu Rokkaku and his allies, and prevent Yoshiaki Ashikage from being defeated.</span>,
            tips: ''
        },
        { 
            name: "The Shogun's Assault", 
            description: <span>Prevent Tatsuoki Saito and his allies from approaching Yoshiaki Ashikaga.</span>,
            tips: ''
        },
        { 
            name: "Prepare the Fire Attack", 
            description: <span>Defeat the Captains of the Guard in the shopping district to prepare a fire attack.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "mitsuki",
            type: "bonus",
            name: "The Spirited Kunoichi", 
            description: <span>Mitsuki must defeat the enemy troops with a Musou Attack.</span>,
            tips: 'This should trigger right away at beginning of stage when Mitsuki is on your team'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Shogun's Bodyguard", 
            description: <span>Defeat Kagetaka Yamaoka and Sadakage Namazue, and prevent Fujihide Mitsubuchi from being taken out.</span>,
            tips: 'After completing the escort mission, you can continue along the path to the south. This will let you drop down right in front of these guys. You should be able to hear Matsunaga mention some officers being "too valuable to lose". You should then get the trigger for this one'
        },
        { 
            only: "",
            type: "bonus",
            name: "Vengeance for My Father", 
            description: <span>Defeat Tatsuoki Saito.</span>,
            tips: 'Remember the escort mission path? I mentioned dropping down on top of Fujihide Mitsubuchi to defend him in "The Shogun\'s Bodyguard" objective. In this same area, after the fire attack, Tatsuoki Saito will show up again. Approach him to trigger this one'
        },
        { 
            only: "hisahide_matsunaga",
            type: "bonus",
            name: "Purging the Impure", 
            description: <span>Hisahide Matsunaga must defat the enemy troops.</span>,
            tips: 'After you successfully complete "Prepare the Fire Attack", you should hear a Miyoshi soldier panic about the flames. This should trigger some dialogue from Hisahide and this bonus objecdtive'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Inverted Attack", 
            description: <span>Defeat Nagaharu Myoshi and his allies so that Nobunaga Oda and his allies can advance.</span>,
            tips: 'After you complete "Shogun\'s Assault", and Nobunaga shows up, various gates will open. Approach Nobunaga and his group and it should trigger this objective'
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