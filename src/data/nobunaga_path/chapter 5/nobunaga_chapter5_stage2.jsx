export const nobunaga_chapter5_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "Battle of Shigisan Castle",
    stageImage: 'assets/stages/nobunaga_chapter5_stage2.webp',
    objectives: [
        { 
            name: "Hisahide's Invitation",
            description: <span>Defeat Hisahide Matsunaga.</span>,
            tips: ''
        },
        { 
            name: "Path to the Southern Gate",
            description: <span>Advance toward the South Gate to infiltrate Shigisan Castle.</span>,
            tips: ''
        },
        { 
            name: "Silencing the Matsunaga Army",
            description: <span>Infiltrate the Northern Garrison, and draw attention by defeating the enemy troops.</span>,
            tips: ''
        },
        { 
            name: "Nobutada in Trouble",
            description: <span>Defeat Ieyasu Shidei, Kunimitsu Shiokawa, and Hidekatsu Yamaguchi to rescue Nobutada Oda.</span>,
            tips: ''
        },
        { 
            name: "A Storehouse under Fire",
            description: <span>Prevent the fireball captains from reaching the storehouse to protect your allies' provisions.</span>,
            tips: ''
        },
        { 
            name: "The Guards at the Castle Gates",
            description: <span>Defeat Masanobu Honda and Hisamichi Matsunaga to advance into Shigisan Castle.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            type: "bonus",
            name: "A Rapid Rescue", 
            description: <span>Defeat Ieyasu Shidei and his allies with at least 50 percent of Nobutada Oda's health remaining.</span>,
            tips: ''
        },
        { 
            type: "bonus",
            name: "A Message Interrupted", 
            description: <span>Defeat Yoshihisa Mori to stop the message from reaching the Southwestern Garrison.</span>,
            tips: 'Some time after rescuing Nobutada Oda, this guy will show up near 2P\'s initial starting position'
        },
        { 
            type: "bonus",
            name: "Fake Messenger Knocking at the Southern Gate", 
            description: <span>Now that he has defected, escort Yoshihisa Mori to the South Gate.</span>,
            tips: 'Only real resistance you should have are 2 fireball captains that appear near Mitsuhide\'s position'
        },

        // Special Objectives
        { 
            type: "special",
            name: "The Same Boat", 
            description: <span>Defeat Tadamasa Yuki and Tadataka Okuda.</span>,
            tips: 'As 2P moves north, you\'ll see these two guys holed up in a garrison to your right. It has a yellow X facing you, so defeat the guard captain and enter the garrison to trigger objective'
        },
    ],

    /*
    rareWeapon: {
        name: "Daikokuten's Mallet",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: 'Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa'
    }
    */
}