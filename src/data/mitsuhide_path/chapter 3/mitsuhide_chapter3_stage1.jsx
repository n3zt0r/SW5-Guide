// import image from 'assets/stages/mitsuhide_chapter3_stage1.webp';

export const mitsuhide_chapter3_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Battle of Northern Omi",
    // stageImage: image,
    objectives: [
        { 
            name: "The Oda's First Kill", 
            description: <span>Defeat Toshiie Maeda, Nobumori Sakuma, and Yoshinari Mori, and prevent Kiyosada Amenomori and Naotsune Endo from being taken out.</span>,
            tips: ''
        },
        { 
            name: "Intelligence Operations", 
            description: <span>Defeat all the spy captains to prevent their advance.</span>,
            tips: ''
        },
        { 
            name: "Buying Time", 
            description: <span>Defeat Hideyoshi Hashiba to advance toward the Oda Main Camp.</span>,
            tips: ''
        },
        { 
            name: "You'll Be Facing Me!", 
            description: <span>Defeat Oichi and Hidekatsu Fukuzumi to capture the Oda Main Camp.</span>,
            tips: ''
        },
        { 
            name: "Plans for a Vacant Castle", 
            description: <span>Defeat Hanbei Takenaka and the captains of the guard to advance.</span>,
            tips: ''
        },
        { 
            name: "Two Who Stand Once More", 
            description: <span>Defeat Toshiie Maeda and Hideyoshi Hashiba.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "The Oda Army Wiped Out", 
            description: <span>Defeat the enemy troops in the Western Garrison.</span>,
            tips: 'Enter the garrison just to the north of Hideyoshi\'s initial position the first time you encounter him. The garrison will not unlock until after you\'ve defeated Oichi and company'
        },
        { 
            only: "",
            type: "bonus",
            name: "The People of Mino", 
            description: <span>Defeat Noh, Ittetsu Inaba, and Bozuken Ujiie, and prevent Toshimitsu Saito from being taken out.</span>,
            tips: 'As you proceed up the very western path, these guys should show up on the parallel path just east of your location'
        },
        { 
            only: "mitsuhide_akechi",
            type: "bonus",
            name: "The Results of Training", 
            description: <span>Mitsuhide Akechi must defeat Nobunaga Oda with a Musou Attack.</span>,
            tips: 'After you get rid of Nobunaga\'s first health bar, they\'ll have some banter between them. Then the objective should trigger'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "The Devil Shibata Marches", 
            description: <span>Defeat Katsuiie Shibata to prevent the cavalry's attack.</span>,
            tips: 'Before completing the first mission, take the suspiciously empty path that goes off to the west. You should see Katsuiie come out of the gate as you get near'
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