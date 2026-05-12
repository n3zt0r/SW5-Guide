import image from 'assets/stages/mitsuhide_chapter3_stage2.webp';

export const mitsuhide_chapter3_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "Battle of Kannonji Castle",
    stageImage: image,
    objectives: [
        { 
            name: "A Stepping Stone to Kannonji Castle", 
            description: <span>Defeat Katamori Shindo, Shigemochi Mikumo, and Kimio Fuse to capture the Kannonji Castle fort.</span>,
            tips: ''
        },
        { 
            name: "Seizing Mitsukuri Castle", 
            description: <span>Defeat Tomomichi Iwanari and Shigemasa Yoshida to capture Mitsukuri Castle.</span>,
            tips: ''
        },
        { 
            name: "Attack of the Ninja", 
            description: <span>Defeat Mitsu, and prevent Yoshiaki Ashikaga from being taken out.</span>,
            tips: ''
        },
        { 
            name: "The Mysterious Assassin", 
            description: <span>Defeat Kazuuji Nakamura to dispel the Oda Army's confusion.</span>,
            tips: ''
        },
        { 
            name: "Seizing Wadayama Castle", 
            description: <span>Defeat Nagayasu Miyoshi and Jibunotaifu Tanaka to capture Wadayama Castle.</span>,
            tips: ''
        },
        { 
            name: "Elimination", 
            description: <span>Defeat all of Kazuuji Nakamura's doubles to advance toward Kannonji Castle.</span>,
            tips: ''
        },

        // Bonus Objectives
        { 
            only: "mitsuhide_akechi",
            type: "bonus",
            name: "The Fruits of Labor", 
            description: <span>Mitsuhide Akechi must work with Nobunaga Oda to defeat the enemy troops.</span>,
            tips: 'At the beginning of the stage, you should hear Mitsuhide have some dialogue about meeting up with Nobunaga. Run over there to Nobunaga, trigger some dialogue, and it should trigger the objective'
        },
        { 
            only: "",
            type: "bonus",
            name: "What Must Be Protected", 
            description: <span>Defeat the enemy trooops to rescue Yoshiaki Ashikaga.</span>,
            tips: 'Replaces "A Show of Skill". For this one, do the first objective and wait for Kenshin to show up. After he does, approach Yoshiaki and you should see this trigger'
        },
        { 
            only: "",
            type: "bonus",
            name: "Enemy Attack from the North", 
            description: <span>Defeat Sadahide Gamo and Katahide Gamo.</span>,
            tips: 'These guys will sneak up on you on the northmost part of the map. Some time after you complete "The Mysterious Assassin". Must approach them to trigger. "Seizing Mitsukuri Castle" was still active when I triggered this'
        },
        { 
            only: "",
            type: "bonus",
            name: "Enemy Attack from the Center", 
            description: <span>Defeat Masakatsu MIyoshi and Nagafusa Sinohara.</span>,
            tips: 'These guys will break out of their garrison and head east soon after "The Mysterious Assassin". Same time as the "Attack from the North" guys. "Seizing Mitsukuri Castle" was still active when I triggered this'
        },
        { 
            only: "",
            type: "bonus",
            name: "A Desperate Defense at Mitsukuri Castle", 
            description: <span>Defeat Yoshiharu Rokkaku, Sadatake Hirai, and Sanefusa Ogura to prevent Mitsukuri Castle from being recaptured.</span>,
            tips: 'Once you have captured Mitsukuri Castle, you will Mitsuhide mention hoisting a flag over the castle. This should unlock the central garrison with these 3 inside it. Approach to trigger'
        },
        { 
            only: "",
            type: "bonus",
            name: "The Skilled Men of Rokkaku", 
            description: <span>Defeat Yoshisada Rokkaku, Sadakage Namazue, and Takaharu Goto to assist your allies advance.</span>,
            tips: 'Replaces "For His Protection" ( ↓ )'
        },
        { 
            only: "oichi",
            type: "bonus",
            name: "For His Protection", 
            description: <span>Oichi must defeat Yoshisada Rokkaku and his allies, and prevent Nagamasa Azai from being taken out.</span>,
            tips: 'Replaces "Skilled Men of Rokkaku" ( ↑ ), During or after "Seizing Wadayama Castle", you should hear some banter between Nagamasa and an enemy. This should trigger easily. You will have two targets around Nagamasa, and one to the southeast. It\'s best to keep the other player away because if Oichi doesn\'t get the kills, you fail the mission'
        },

        // Special Objectives
        { 
            only: "oichi",
            type: "special",
            name: "A Show of Skill", 
            description: <span>Oichi must defeat the enemy troops, and prevent Yoshiaki Ashikaga from being taken out.</span>,
            tips: 'Replaces "What Must Be Protected". Have Oichi walk over to Yoshiaki and Kenshin\'s general area. You may or may not have to wait for Kenshin to show up before it will trigger'
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