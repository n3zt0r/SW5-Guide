// import image from 'assets/stages/mitsuhide_chapter6_stage2.webp';

export const mitsuhide_chapter6_stage2 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 2",
    stageName: "Battle of Yamazaki",
    // stageImage: image,
    objectives: [
        {
            name: "Striking Back",
            description: <span>Defeat Hidenaga Hashiba, Kiyohide Nakagawa, and Shigekore Kimura to push forward the front line.</span>,
            tips: ``,
        },
        {
            name: "Advancing the Line",
            description: <span>Work with Sakaoiki Ise and his allies to defeat Kazuuji Nakamura and his allies.</span>,
            tips: ``,
        },
        {
            name: "Traversing the River",
            description: <span>Stop Kanbei Kuroda and his allies from crossing the Enmyoji River.</span>,
            tips: ``,
        },
        {
            name: "Head for the Main Camp",
            description: <span>Defeat the enemy troops around the Hashiba Main Camp.</span>,
            tips: ``,
        },
        {
            name: "Kanbei's Strategy",
            description: <span>Defeat Nagahide Niwa and his allies protecting the Hashiba Main Camp.</span>,
            tips: ``,
        },
        {
            name: "Kazuuji's Resolve",
            description: <span>Defeat Kazuuji Nakamura and Hidetsugu Hashiba to advance towards the Mt. Tenno Summit.</span>,
            tips: ``,
        },

        // Bonus Objectives
        {
            only: "",
            type: "bonus",
            name: "Thwarting the Raid",
            description: <span>Defeat all the spear captains.</span>,
            tips: `At beginning of stage, Mitsuhide will mention Hideyoshi is hiding. Go straight south to the small garrison to the right to find some hidden soldiers there. This should trigger the objective`,
        },
        {
            only: "",
            type: "bonus",
            name: "Challenge from Mt. Tenno",
            description: <span>Defeat Tsuneoki Ikeda and Ukon Takayama.</span>,
            tips: `During "Advancing the Line", after defeating Kuzuuji, you can run past him to the west. Just southwest of Kazuuji's garrison is another small garrison. If you go inside, you'll find two officers in there and it will trigger this objective`,
        },
        {
            only: "mitsuki",
            type: "bonus",
            name: "Mitsuki's Resolve",
            description: <span>Mitsuki must defeat Kazuuji Takamura.</span>,
            tips: `During "Advancing the Line", send Mitsuki to the north where Kazuuji is. It should trigger the objective when he's in her view`,
        },
        {
            only: "",
            type: "bonus",
            name: "Breaking the Trigger",
            description: <span>Defeat all rifle captains.</span>,
            tips: `Ok, once Kanbei and his guys come out, you'll have to act quickly. Once they've started advancing, rifle captains will show up at the two small central garrisons in the south. Have 2P block the north with Yasuie Namikawa. Then try to quickly take care of both groups of riflemen and get the lower group before they cross the river`,
        },
        {
            only: "mitsuhide_akechi",
            type: "bonus",
            name: "The One Who Rules over the Land",
            description: <span>Mitsuhide Akechi must defeat Hideyoshi Hashiba with a Musou Frenzy Attack.</span>,
            tips: `Hideyoshi has 3 life bars. Get him down to the last life bar, and this will finally trigger for Mitsuhide`,
        },
        
        // Special Objectives
        {
            only: "",
            type: "special",
            name: "Revenge",
            description: <span>Defeat Kanbei Kuroda.</span>,
            tips: `You must complete "Kanbei's Strategy". Meaning, both players must leave the main camp. After various dialogue, the gates will open back up. So before you go to Mt. Tenno, quickly take a detour back to your former main camp to trigger the objective`,
        },
    ],

    rareWeapon: [
        {
            name: "Heaven's Dread Star",
            description: <span>S Rank all with <span className="ally-style">Mitsuhide Akechi</span> on Hard or greater.</span>,
            tips: `Other half is on Reverie 1-9, The Great Unifier, using Nobunaga Oda`
        },
    ],
};