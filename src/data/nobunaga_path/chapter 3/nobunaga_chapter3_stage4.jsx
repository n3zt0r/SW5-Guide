export const nobunaga_chapter3_stage4 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 4",
    stageName: "Invastion of Suruga",
    stageImage: 'assets/stages/nobunaga_chapter3_stage4.webp',
    objectives: [
        { 
            name: "Advancing on the Imagawa",
            description: <span>Capture the garrisons in the east and west to surround the Imagawa Army.</span>,
            tips: ''
        },
        { 
            name: "The Loyal Officer Remains",
            description: <span>Defeat Motonobu Okabe to capture the Southern Garrison.</span>,
            tips: ''
        },
        { 
            name: "One Fell Swoop",
            description: <span>Defeat the nearby enemy troops the surround Imagawa Main Camp.</span>,
            tips: ''
        },
        { 
            name: "The Tokugawa's Looming Crisis",
            description: <span>DefDefeat Kagetsuna Naoe, Tomonobu Saito, and Shigeie Shibata before they infiltrate the Tokugawa Main Campeat.</span>,
            tips: ''
        },
        { 
            name: "The Takeda's Looming Crisis",
            description: <span>Defeat Kagemochi Amakasu and Saneyori Honjo before they infiltrate the Takeda Main Camp.</span>,
            tips: 'The very eastern most character will stay still for the most part, giving you some time'
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Sandayu's Scheme", 
            description: <span>Defeat Tadahisa Suganuma, Ujimoto Katsurayama, and Nobuteru Sena, and make the defect from the Imagawa Army.</span>,
            tips: 'NOTE: Will not appear if Sena is a player character'
        },
        { 
            only: "sena",
            type: "bonus",
            name: "Thinking of Imagawa", 
            description: <span>Sena must defeat Tadahisa Suganuma and his allies, and make them defect from the Imagawa Army.</span>,
            tips: 'Replaces "Sandayu\'s Scheme" when playing as Sena'
        },
        { 
            only: "",
            type: "bonus",
            name: "Dismal End", 
            description: <span>Defeat Ujizane Imagawa, and prevent his rendezvous with Kenshin Uesugi.</span>,
            tips: 'Trigger by hanging around Ujizane when he comes out of the garrison. He\'ll have some dialogue about "getting out of his way", which will trigger Kenshin\'s dialogue about trying to get to him'
        },
        { 
            only: "shingen_takeda",
            type: "bonus",
            name: "A Righteous Man", 
            description: <span>Shingen Takeda must defeat Kenshin Uesugi before his (Shingen's) health drops below 50 percent.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            type: "special",
            name: "Buried Threats", 
            description: <span>Defeat Yataro Onikojima and Nagahide Yasuda, and prevent Nobutada Anayama from being taken out.</span>,
            tips: ''
        },
    ],

    rareWeapon: [{
        name: "Sun Goddess",
        description: <span>S Rank all with <span className="ally-style">Sena</span> on Hard or greater.</span>,
        tips: 'Other half is on Akechi 6-3, Battle of Yamazaki (Hashiba), with Hideyoshi Hashiba'
    }]
}