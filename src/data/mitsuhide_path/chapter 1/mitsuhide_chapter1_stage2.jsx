export const mitsuhide_chapter1_stage2 = {
    id: "mitsuhide_chapter1_stage2",
    stageNumber: "Stage 2",
    stageName: "Turmoil on Mt. Inaba",
    stageImage: "assets/stages/mitsuhide_chapter1_stage2.webp",
    objectives: [
        { 
            name: "Breaking through the Siege", 
            description: <span>Defeat the <span className='enemy-style'>enemy troops</span> to break through their siege.</span>,
            isCompleted: false
        },
        { 
            name: "Caged Butterfly", 
            description: <span>Defeat <span className='enemy-style'>Dochin Takegoshi</span> to assist <span className="ally-style">Noh</span>'s advance.</span>,
            isCompleted: false
        },
        { 
            name: "The Spider's Web", 
            description: <span>Defeat <span className='enemy-style'>Michitoshi Nagai</span> and <span className='enemy-style'>Morinari Ando</span>.</span>,
            isCompleted: false
        },
        { 
            name: "Toshimitsu's Resolve", 
            description: <span>Defeat <span className='enemy-style'>Toshimitsu Saito</span>.</span> ,
            isCompleted: false
        },
        { 
            name: "In the Depths of-Darkness", 
            description: <span>Defeat <span className='enemy-style'>Ittetsu Inaba</span> and <span className='enemy-style'>Bokuzen Ujiie</span> to open the <span className="place-style">Wooden-floored Room</span>.</span> ,
            isCompleted: false
        },

        // Bonus Objectives
        { 
            only: "mitsuhide_akechi",
            type: "bonus",
            name: "The Earnest Mitsuhide", 
            description: <span><span className='ally-style'>Mitsuhide Akechi</span> must defeat the <span className='enemy-style'>enemy troops</span> with a Musou Attack.</span>,
            tips: 'After completing "Toshimitsu\'s Resolve", you will head north in to another open room. This room is creatively called "The Wooden floored Room". The gate will close behind you, locking you in. This objective will then trigger',
            isCompleted: false
        },
        { 
            type: "bonus",
            name: "The Strategist behind the Pincer", 
            description: <span>Defeat <span className='enemy-style'>Hironari Hineno</span>.</span>,
            tips: 'After making it out of the "Wooden floored Room", you can go east to a large room in the center of the map. It has a large cooking fire in the middle of it. Mitsuhide</span> will comment on feeling someting suspicious coming from this room. Hang out inside the room until Hironari comes out and this objective triggers',
            isCompleted: false
        },

        // Special Objectives
        { 
            type: "special",
            name: "A Genius General Lurks Beneath", 
            description: <span>Defeat <span className='enemy-style'>Hanbei Takanaka</span>.</span>,
            tips: 'After completing "The Spider\'s Thread", a secret door will open out onto a courtyard in the north. On the eastern side of this courtyard is a room with a yellow X in front of it. Defeat the gatekeeper found here and approach Hanbei inside to trigger the objective',
            isCompleted: false
        },
    ],
}