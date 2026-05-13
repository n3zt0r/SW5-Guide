export const nobunaga_chapter5_stage6 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 6",
    stageName: "Battle of Arioka Castle",
    stageImage: 'assets/stages/nobunaga_chapter5_stage6.webp',
    objectives: [
        { 
            name: "Laying Siege",
            description: <span>Defeat Yorimichi Nose and Murauji Suita to capture the garrson.</span>,
            tips: ''
        },
        { 
            name: "Bait",
            description: <span>To serve as bait, defeat the enemy troops in the east before the Mori Army arrives.</span>,
            tips: ''
        },
        { 
            name: "Hanbei's Strategy",
            description: <span>Defeat Muratsugu Araki and Shigekata Kinoshita to spread false information.</span>,
            tips: ''
        },
        { 
            name: "Rescuing Kanbei",
            description: <span>Defeat Motokiyo Araki, Niemon Anbe, and Tomomasa Ikeda to rescue Kanbei Kuroda.</span>,
            tips: 'This is the mission that will show up when you do not have Hanbei on your team. Seems this is interchangeable with "Setting An Example'
        },
        { 
            name: "Murashige Araki Escapes",
            description: <span>Prevent Murashige Araki and Michiyoshi Kuchiba from rendezvousing.</span>,
            tips: ''
        },
        { 
            name: "Fighting the Mori",
            description: <span>Defeat Takaie Shishido and his allies to stop the planned siege.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Hanbei's Preparations", 
            description: <span>Defeat Masamoto Kodera and Kunimitsu Shiokawa to prepare for the Mori Army's appearance.</span>,
            tips: 'After defeating 1/2 targets in "Laying Siege", you can approach these guys in the northwest garrison to trigger it'
        },
        { 
            only: "hanbei_takenaka",
            type: "bonus",
            name: "Setting An Example", 
            description: <span>Defeat Motokiyo Araki, Niemon Anbe, and Tomomasa Ikeda to rescue Kanbei Kuroda.</span>,
            tips: 'After "Hanbei\'s Strategy" is completed, you should see the garrison in the southwest area unlock. Approach Kanbei and this should trigger. It seems this Objective is interchangeable with "Saving Kanbei" above. I think you will only see this one when having Hanbei on your team.'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Soldiers of Arioka Castle", 
            description: <span>Convince Ukon Takayama and Kiyohide Nakagawa to defect to the Oda Army by defeating them.</span>,
            tips: 'When Araki makes a run for it, approach the two guys left in the southern garrison to trigger it'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Rear Guard", 
            description: <span>Defeat Hajime Watanabe and Nobunao Kumagai to prevent the appearance of the Mori Army's rear guard.</span>,
            tips: 'After defeating a couple targets for "Fighting the Mori", this should come up on its own I think. But it might trigger, then immediately FAIL because the rear guard shows up so fast. If this happens to you, I recommend trying to defeat both targets just before you defeat 1 target of "Fighting the Mori". This might let you complete the objective in time'
        },
        { 
            only: "hanbei_takenaka",
            type: "bonus",
            name: "My Final Duty", 
            description: <span>Hanbei Takanaka must defeat the enemy troops on the east bridge.</span>,
            tips: 'When "Fighting the Mori" is active, run Hanbei up to the northeastern part of the map where a bridge lays. This should trigger as you approach the bridge. Every single game, it\'s tough losing Hanbei. Love the little guy'
        },

        // Special Objectives
        { 
            type: "special",
            name: "Impregnable", 
            description: <span>Defeat Motoharu Kikkawa.</span>,
            tips: 'Should trigger automatically after defeating all 5 targets in "Fighting the Mori"'
        },
    ],

    rareWeapon: [{
        name: "Sakura Princess",
        description: <span>S Rank all with <span className="ally-style">Hideyoshi Hashiba </span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 2-5, Sunomata Castle, with Hideyoshi Hashiba'
    }]
}