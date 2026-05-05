import image from 'assets/stages/mitsuhide_chapter1_stage1.webp';

export const mitsuhide_chapter1_stage1 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 1",
    stageName: "Defense of Mino",
    stageImage: image,
    objectives: [
        { 
            name: "Oda Forces Closing In", 
            description: <span>Defeat <span className='enemy-style'>Nagahide Niwa</span> to recapture the <span className='place-style'>Northwestern Garrison</span>.</span> 
        },
        { 
            name: "A Concentration of Hostilities", 
            description: <span>Defeat the <span className='enemy-style'>enemy troops</span> at the <span className='place-style'>Central Square</span>.</span> 
        },
        { 
            name: "Turn the Tides of Battle", 
            description: <span>Defeat <span className='enemy-style'>Toshiie Maeda</span> and <span className='enemy-style'>Tsuneoki Ikeda</span>.</span>
        },
        { 
            name: "Nobunaga's Younger Brother?", 
            description: <span>Defeat <span className='enemy-style'>Ieyasu Tokugawa</span> and <span className='enemy-style'>Hanzo Hattori</span> to invade the <span className='place-style'>Oda Main Camp</span>.</span> 
        },
        { 
            name: "General-Less Main Camp", 
            description: <span>Defeat <span className='enemy-style'>Nobuyuki Oda</span> and <span className='enemy-style'>Oichi</span> to capture the <span className='place-style'>Oda Main Camp</span>.</span> 
        },

        // Bonus Objectives

        { 
            type: "bonus",
            name: "The Master Strategist's Ordeal", 
            description: <span>Work with <span className='ally-style'>Hanbei Takanaka</span> to defeat <span className='enemy-style'>Nagachika Kanamori</span>.</span>,
            tips: "At beginning of the stage, run to the east where Hanbei is located. You should eventually hear dialogue from Hanbei about being spotted. Then this objective should trigger."
        },
        { 
            type: "bonus",
            name: "You Won't Take The Fortress", 
            description: <span>Defeat <span className='enemy-style'>Tadakatsu Honda</span> to keep enemy reinforcements from appearing. </span>,
            tips: "After completing 'Oda Forces Closing In', you will eventually hear some dialogue by Tadakatsu about defending the garrison. Mitsuhide will chime in about reinforcements. Approach Tadakatsu after this to trigger this objective."
        },
        { 
            type: "bonus",
            name: "A Fierce Charge", 
            description: <span>Prevent <span className='enemy-style'>Narimasa Sassa</span> from approaching <span className='ally-style'>Yoshitatsu Saito</span>.</span>,
            tips: "When the objective 'General-less Main Camp' starts, Sassa will appear just to the east of the Oda Main Camp. Approach him to trigger this objective."
        },
        { 
            type: "bonus",
            name: "Removing All Obstacles", 
            description: <span>Defeat <span className='enemy-style'>Masahide Hirate</span> to seize the <span className='place-style'>Southeastern Garrison</span>.</span>,
            tips: "After the objective 'Turning the Tide of Battle' starts, Hanbei will comment about Oda's moves being tricky. And that we need to capture the remaining garrisons and Fuwa will volunteer for the job. You should see a green box appear over the southeastern garrison. Approach the garrison to trigger this objective."
        },
        { 
            only: "mitsuhide_akechi",
            type: "bonus",
            name: "Don't Underestimate A Fool", 
            description: <span><span className='ally-style'>Mitsuhide Akechi</span> must defeat <span className='enemy-style'>Nobunaga Oda</span> with a Musou Attack.</span>,
            tips: "After you complete 'General-less Main Camp', have Mitsuhide approach Nobunaga for a cutscene and this objective."
        },

        // Special Objectives
        { 
            type: "special",
            name: "On Your Guard", 
            description: <span>Prevent <span className='enemy-style'>Katsuiie Shibata</span> from infiltrating the <span className='place-style'>Saito Main Camp</span>.</span>,
            tips: "When 'Nobunaga's Younger Brother' starts, Katsuiie will say he's moving out as well. Intercept him to trigger this objective."
        },
    ],
}