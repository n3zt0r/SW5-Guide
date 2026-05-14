// import image from 'assets/stages/mitsuhide_chapter6_stage1.webp';

export const mitsuhide_chapter6_stage1 = {
    get id() {
        return `${this.stageNumber}: ${this.stageName}`;
    },

    stageNumber: "Stage 1",
    stageName: "The Incident at Honnoji",
    // stageImage: image,
    objectives: [
        {
            name: "Siege at Honnoji",
            description: <span>Defeat the enemy troops to lay siege to Honnoji.</span>,
            tips: ``,
        },
        {
            name: "The One to Slay Nobunaga Will Be...",
            description: <span>Defeat <span className="hostile-style">Sandayu Momochi</span>.</span>,
            tips: ``,
        },
        {
            name: "Holding the Line",
            description: <span>Defeat Shinsuke Mori and his allies to prevent Hidemitsu Akechi and Kunitsugu Yasuda from being taken out.</span>,
            tips: ``,
        },
        {
            name: "Enduring Boldness",
            description: <span>Defeat Nobunaga Oda.</span>,
            tips: ``,
        },
        {
            name: "Striking with All One's Might",
            description: <span>Defeat Yasuke and his allies.</span>,
            tips: ``,
        },
        {
            name: "Fighting until the Very Last",
            description: <span>Defeat Mitsuki.</span>,
            tips: ``,
        },

        // Bonus Objectives
        {
            only: "",
            type: "bonus",
            name: "Explosive Gunpowder",
            description: <span>Defeat all the cannon captains.</span>,
            tips: `After "Holding the Line" starts, you will see Yasuke start with some dialogue. Then the cannon captains will show up in two positions. One just north of Sandayu and the falling tower's initial position, the other just south of Sandayu and the falling tower's initial position. Approach either to trigger objective. This was the second bonus objective I ran into`,
        },
        {
            only: "",
            type: "bonus",
            name: "The Enemy of My Enemy Is Also My Enemy",
            description: <span>Defeat all the spy captains.</span>,
            tips: `After Sandayu shows up, Nobunaga will mention he has to fall back. After that, you will see an Iga spy captain show up just south of Sandayu's initial location. They will also show up in other locations. Approach any of them to trigger the objective. This is also the first bonus objective I ran into`,
        },
        {
            only: "",
            type: "bonus",
            name: "No One Can Stop Me",
            description: <span>Defeat Nobutada Oda and his allies.</span>,
            tips: `When Nobunaga shows up for the first time, in the tower area, you'll hear dialogue from Yasuda about gathering reinforcements. This will make Nobutada show up on the southern most path. Approach him and his allies to trigger this objective`,
        },
        {
            only: "",
            type: "bonus",
            name: "A Sharpened Blade",
            description: <span>Defeat Nobunaga Oda.</span>,
            tips: `After you take down one health bar from Nobunaga, Mitsuhide will try to talk some more smack and this objective should trigger. It is timed at one minute`,
        },

        // Special Objectives
        {
            only: "",
            type: "special",
            name: "Preparing for a New Era",
            description: <span>Conserve your military strength by claiming victory without allowing your allied officers to be defeated.</span>,
            tips: `Triggers automatically after completing "Striking with All One's Might" IF none of your allies have died so far`,
        },
    ],

    /*
    rareWeapon: [
        {
            name: "Daikokuten",
            description: <span>S Rank all with <span className="ally-style">Ieyasu Tokugawa</span> on Hard or greater.</span>,
            tips: `Other half is on Reverie 1-1, Annihilation at Okehazama, with Yoshimoto Imagawa`
        }
    ],
    */
};