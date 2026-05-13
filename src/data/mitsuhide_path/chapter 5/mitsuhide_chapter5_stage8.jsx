// import image from 'assets/stages/mitsuhide_chapter5_stage8.webp';

export const mitsuhide_chapter5_stage8 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 8",
    stageName: "Battle of Kozuki Castle (Mori)",
    // stageImage: image,
    objectives: [
        { 
            name: "Invasion of Kozuki Castle", 
            description: <span>Defeat Ujihisa Amago and his allies protecting the castle.</span>,
            tips: ``
        },
        { 
            name: "Conserving Strength", 
            description: <span>Defeat the surrounding enemy troops to rescue Motosuke Hiraga and Michiyoshi Kuchiba.</span>,
            tips: ``
        },
        { 
            name: "Crushing Antlers", 
            description: <span>Defeat Shikanosuke Yamanaka.</span>,
            tips: `I activated this by having Motonari slip around the north and into the garrison where Shikanosuke is located. This also triggered "Without Supplies" bonus objective soon after`
        },
        { 
            name: "Like a Moth to the Flame", 
            description: <span>Defeat Nobumori Sakuma and his allies.</span>,
            tips: ``
        },
        { 
            name: "How the Oda Abandoned the Amago", 
            description: <span>Don't let the Oda Army officers reach the escape point.</span>,
            tips: ``
        },
        { 
            name: "A Rude Awakening", 
            description: <span>Defeat Katsuhisa Amago before Shikanosuke Yamanaka arrives.</span>,
            tips: ``
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Without Supplies", 
            description: <span>Prevent the supply captains from reaching the Northeastern Garrison.</span>,
            tips: `During the first few primary objectives, Mitsuhide will send out a supply captain from their main camp in the east. You must prevent this supply captain from reaching Shikanosuke's initial starting position inside the Northeastern Garrison`
        },
        { 
            only: "",
            type: "bonus",
            name: "They Enemy from the South", 
            description: <span>Defeat Fujikata Hosokawa before he can advance.</span>,
            tips: `Some time after completing "Conserving Strength", you will pick up some dialogue from Kikkawa. He says something like, "When will the Amago learn to stop wasting our time?". After this, you will hear Motonari give dialgue about guarding the south. Some gates open in the south central region, and you should be able to approach Hosokawa to trigger this objective. There's also a time limit of one minute on this`
        },
        { 
            only: "motonari_mori",
            type: "bonus",
            name: "A Fated Ending", 
            description: <span>Motonari Mori must defeat Shikanosuke Yamanaka with a Musou Attack.</span>,
            tips: ``
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Do or Die", 
            description: <span>Defeat Mitsuhide Akechi and Hideyoshi Hashiba before they can retreat.</span>,
            tips: `This one can be tricky. After defeating Kazumasa and Niwa at the escape point, Hideyoshi will show up and Mitsuhide will come out of the garrison. Approach them to trigger the objective. If you complete "How the Oda Abandoned the Amago" first, you may have trouble reaching them in time. I had 2P Wait in the Oda Main Camp to keep the upper 2 targets busy. Then I used 1P to search and destroy Mitsuhide and HIdeyoshi`
        },
    ],
    
    rareWeapon: [
        {
            name: "Amenohajiyumi",
            description: <span>S Rank all with <span className="ally-style">Motonari Mori</span> on Hard or greater.</span>,
            tips: `Other half is on Reverie 1-4, Final Battle of Kanegasaki, using Noh`
        },
        {
            name: "Evil's Demise",
            description: <span>S Rank all with <span className="ally-style">Takakage Kobayakawa</span> on Hard or greater.</span>,
            tips: `Other half is on Reverie 1-5, Final Battle of Odani Castle, using Nagamasa Azai`
        },
    ]
}