// import image from 'assets/stages/mitsuhide_chapter5_stage2.webp';

export const mitsuhide_chapter5_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "Battle of Shigisan Castle",
    // stageImage: image,
    objectives: [
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
            tips: 'Not sure why this one is numbered like this. But I did not start this objective until "The Matsunaga Army Gets Serious" was completed. So don\'t worry if it doesn\'t pop up first'
        },
        { 
            name: "The Matsunaga Army Gets Serious", 
            description: <span>Defeat Muneyoshi Yagyu, Tomokiyo Ebina, Hideshige Kawarabayashi, and Kunitaka Oka.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Stopping the Matsunaga Army Reinforcements", 
            description: <span>Defeat Hidemitsu Mori.</span>,
            tips: 'As you progress with 2P during "Path to the Southern Gate", you should see Hidemitsu Mori show up in the southwest garrison. Approach him to trigger the objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "A Message Interrupted", 
            description: <span>Defeat Yoshihisa Mori to stop the message from reaching the Southwestern Garrison.</span>,
            tips: 'After defeating 2 targets during "The Matsunaga Army Gets Serious", this guy will show up near the initial starting position of P2'
        },
        { 
            only: "",
            type: "bonus",
            name: "Fake Messenger Knocking at the Southern Gate", 
            description: <span>Now that he has defected, escort Yoshihisa Mori to the South Gate.</span>,
            tips: 'The only real resistance you should encounter is 2 fireball captains appearing near Mitsuhide\'s position'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "The Same Boat", 
            description: <span>Defeat Tadamasa Yuki and Tadataka Okuda.</span>,
            tips: 'As 2P moves north, you\'ll see these two guys holed up in a garrison to your right. It has a yellow X facing you, so defeat the guard captain and enter the garrison to trigger objective'
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