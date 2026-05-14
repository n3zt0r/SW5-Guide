// import image from 'assets/stages/mitsuhide_chapter6_stage3.webp';

export const mitsuhide_chapter6_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Battle of Yamazaki (Hashiba)",
    // stageImage: image,
    objectives: [
        {
            name: "Crossing the River",
            description: <span>Defeat the enemy troops surrounding the Southern Garrison so you can cross the river.</span>,
            tips: ``,
        },
        {
            name: "Capturing Mt. Tenno",
            description: <span>Defeat Sadayuki Atsuji and Masachika Matsuda to capture the garrison at the foot of Mt. Tenno.</span>,
            tips: ``,
        },
        {
            name: "The Akechi Army Strikes",
            description: <span>Defeat Toshimitsu Saito, Katsusada Shibata, and Kaneaki Mimaki.</span>,
            tips: `You must defeat the other two before Toshimitsu will come out of his garrison`,
        },
        {
            name: "A Loyal Retainer's Resolve",
            description: <span>Defeat Toshimitsu Saito to escape from Shoryuji Castle.</span>,
            tips: `Be careful, this is timed`,
        },
        {
            name: "Inferior Numbers",
            description: <span>Prevent Hirotada Tsumaki and his allies from infiltrating the Hashiba Main Camp.</span>,
            tips: ``,
        },
        {
            name: "Turning the Tables",
            description: <span>Defeat Toshimune Saito and Sakaoki Ise to call in the drum corps.</span>,
            tips: ``,
        },
        {
            name: "The Last Barrier",
            description: <span>Defeat Dengo Fujita, Mitsutada Akechi, and Mitsuki.</span>,
            tips: ``,
        },

        // Bonus Objectives
        {
            only: "",
            type: "bonus",
            name: "Hiding in the Shadows",
            description: <span>Defeat Shigetomo Mizoo and Sadatsura Shinji.</span>,
            tips: `After completing "Crossing the River", the gate in the southeast should open. Travel east to the yellow X and defeat the guard captain to get inside the southeastern garrison. This objective should trigger when you're inside`,
        },
        {
            only: "kanbei_kuroda",
            type: "bonus",
            name: "Precautionary Measures",
            description: <span>Kanbei Kuroda must defeat Yasuie Namikawa and Morinao Suwa to capture the garrison.</span>,
            tips: `Just northeast of 2P starting position is your ally, Yoshiharu Horio. He's surrounded by the two enemies named above. Have Kanbei approach the area to trigger this objective`,
        },
        {
            only: "",
            type: "bonus",
            name: "Raining Lead",
            description: <span>Defeat all the rifle captains.</span>,
            tips: `There's a small garrison with a locked gate that is north of "Hiding in the Shadows" objective. If you enter, Kazzuji will mention that going any further is dangerous because of the riflemen up here. On the other side of the gate, just east of Toshimitsu Saito's garrison, you'll see troops appear when you complete "The Akechi Army Strikes". Approach these troops to trigger this objective`,
        },
        {
            only: "",
            type: "bonus",
            name: "Traitors",
            description: <span>Defeat Kiyohide Nakagawa and Ukon Takayama.</span>,
            tips: `Once you and Hideyoshi enter the castle complex in the northeast, some cowards at the main camp will cause trouble. You can have someone camp at these cowards, specifically Ukon Takayama, and use the other player to complete "The Akechi Army Strikes" and head to Mitsuhide's castle complex. Once you are in the complex, some things will happen. Then the cowards will show up in Ukon Takayama's former position. This time as enemies. Approach them, and the dialogue will take some time to catch up. But eventually, it will trigger this objective. If you do complete it this way, remember that "A Loyal Retainer's Resolve" has a time limit`,
        },
        {
            only: "kazuuji_nakamura",
            type: "bonus",
            name: "Division",
            description: <span>Kazuuji Nakamura must defeat Mitsuki.</span>,
            tips: `During "The Last Barrier" objective, have Kazzuji approach Mitsuki to trigger this objective`,
        },

        // Special Objectives
        {
            only: "hideyoshi_hashiba",
            type: "special",
            name: "Courage",
            description: <span>Hideyoshi Hashiba must defeat Mitsuhide Akechi with a Musou Frenzy Attack.</span>,
            tips: ``,
        },
    ],

    rareWeapon: [
        {
            name: "Sun Goddess",
            description: <span>S Rank all with <span className="ally-style">Hideyoshi Hashiba</span> on Hard or greater.</span>,
            tips: `Other half is on Oda 3-4, Invasion of Suruga, with Sena`
        },
    ],
};