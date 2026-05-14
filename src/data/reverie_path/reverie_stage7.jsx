// import image from 'assets/stages/reverie_stage7.webp';

export const reverie_stage7 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 7",
    stageName: "Nobuyasu's Rebellion",
    // stageImage: image,
    objectives: [
        { 
            name: "Buying Time", 
            description: <span>Defeat the Takeda Army soldiers.</span>,
            tips: ``,
        },
        { 
            name: "Bringing Momentum to the Takeda", 
            description: <span>Defeat Motonobu Okabe, Tomokiyo Imafuku, and Yoshimasa Kiso.</span>,
            tips: ``,
        },
        { 
            name: "Boiling Point", 
            description: <span>Prevent Katsuyori Takeda from approaching Nobuyasu Tokugawa.</span>,
            tips: ``,
        },
        { 
            name: "Non-Lethal Blow", 
            description: <span>Defeat Nobuyasu Tokugawa.</span>,
            tips: ``,
        },
        { 
            name: "Get Serious", 
            description: <span>Defeat Sena.</span>,
            tips: ``,
        },
        { 
            name: "Sena's Wounds", 
            description: <span>Defeat Seibie Machii and his allies, and prevent Sena from being taken out.</span>,
            tips: `Be very careful here. Do not complete this objective until you have everything else done. After this objective is complete, Sandayu will make a run for it. And you have to drop everything and go after him`,
        },

        // Bonus Objectives
        { 
            only: "tadakatsu_honda",
            type: "bonus",
            name: "I Will Stop the Reinforcements", 
            description: <span>Tadakatsu Honda must defeat Mitsukata Nagasaka to stop the Takeda Army reinforcements.</span>,
            tips: `You should trigger this at the very beginning of the stage if Tadakatsu is a playable character`,
        },
        { 
            only: "ieyasu_tokugawa",
            type: "bonus",
            name: "I'll Protect Her", 
            description: <span>=====================================.</span>,
            tips: `During "Sena's Wounds", you'll see the targets gathering around Sena. Approach them and there should be some dialogue. Eventually this objective should trigger. You just have to keep Sena over 50 percent health until the end of the stage. You should get a warning when she dets down to three quarters health. I've listed this as an Ieyasu Only objective because I cannot trigger it in free mode without him. The objective may be limited to story mode only. More testing is needed to know for sure, but I'm not gonna worry with it`,
        },
        { 
            only: "",
            type: "bonus",
            name: "Reinforcements from the Cliff", 
            description: <span>Work with Tadakatsu Honda to stop the Takeda Army reinforcements by defeat Mitsukata Nagasaka.</span>,
            tips: `Some time before you complete "Boiling Point", have a player loop around the southwest and approach the garrison with Mitsukata inside it. This should trigger this objective as long as Tadakatsu is not a playable character`,
        },
        { 
            only: "",
            type: "bonus",
            name: "A Tokugawa Retainer", 
            description: <span>Defeat Chubei Tomioka, and prevent Yasutada Matsudaira from being taken out.</span>,
            tips: `Remember that lone, single yellow dot in the southern garrison? Once you've completed "Sena's Wounds", he will head out from the southern garrison to the next garrison above him. When he arrives, a Momochi officer will appear at the gate and try to kill him. This should trigger this objective. Now....you are able to damage both yellow and red enemies. So very carefully try to fight off the red enemy while keeping the yellow Yasutada from harm.`,
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Reluctant Conquest", 
            description: <span>Defeat Kazumasa Ishikawa and Tadatsugu Ina to capture the Nobuyasu Army Garrison.</span>,
            tips: `Approach these officers on the east side of the central battlefield. During or after "Bringing Momentum to the Takeda", it should trigger this objective. This is also timed`,
        },
    ],
    
    /*
    rareWeapon: [{
        name: "Daikokuten",
        description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
        tips: `Other half is on Reverie 7-1, Annihilation at Okehazama, with Yoshimoto Imagawa`
    }]
    */
}