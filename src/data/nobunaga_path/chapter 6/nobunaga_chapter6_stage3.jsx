export const nobunaga_chapter6_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "The Incident",
    stageImage: 'assets/stages/nobunaga_chapter6_stage3.webp',
    objectives: [
        { 
            name: "The Last Battle",
            description: <span>Defeat Katsusada Shibata, Masachika Matsuda, and Yoshikiyo Kimura to defend Honnoji.</span>,
            tips: ''
        },
        { 
            name: "The Iga's Resentment",
            description: <span>Defeat the spy captains who infiltrated Honnoji.</span>,
            tips: ''
        },
        { 
            name: "Nobutada's Haste",
            description: <span>Work with Nobutada Oda to defeat Dengo Fujita and Kunitsugu Yasuda.</span>,
            tips: ''
        },
        { 
            name: "Nobunaga and Sandayu",
            description: <span>Defeat all the Sandayu Momochis to force the Iga Army to withdraw.</span>,
            tips: ''
        },
        { 
            name: "Time to Settle the Score",
            description: <span>Defeat Mitsuhide Akechi.</span>,
            tips: ''
        },
        { 
            name: "Mitsuhide's Subjects",
            description: <span>Defeat Toshimitsu Saito and his allies.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "The Riflemen in the Corridor", 
            description: <span>Defeat all the rifle captains to recapture the corridor.</span>,
            tips: 'On 2P side, you can see the small corridor area in the central part of the east map. Approach any of them to trigger it'
        },
        { 
            only: "",
            type: "bonus",
            name: "I Won't Let You Stop Me", 
            description: <span>Capture the barracks outside Honnoji to stop the arrival of enemy reinforcements.</span>,
            tips: 'You should see this after "Mitsuhide\'s Subjects" starts'
        },
        { 
            only: "",
            type: "bonus",
            name: "An Insurmountable Difference in Power", 
            description: <span>Defeat all the spear captains.</span>,
            tips: 'You should see these guys pop up after "Mitsuhide\'s Subjects" starts. I switched to 1P Nobunaga and had him encounter one of the spear captains. That prompted some dialogue about him "not letting them have their way". Then the objective triggered. Again, timed'
        },
        { 
            only: "nobunaga_oda",
            type: "bonus",
            name: "The Demon King's Pride", 
            description: <span>Nobunaga Oda must achieve victory with more than 50 percent of his health remaining.</span>,
            tips: 'Interim Save is your friend. Just remember kids, when you load a Interim Save, it deletes itself'
        },
        { 
            only: "yasuke",
            type: "bonus",
            name: "Repaying Lord Nobunaga", 
            description: <span>Yasuke must defeat the enemy troops with a Musou Attack.</span>,
            tips: 'This triggered for me after Mitsuhide retreats, and I had 2P Yasuke go to the very southmost path. I think just switching to Yasuke after Mitsuhide retreats will trigger it. Also timed'
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Taking Advantage of the Confusion", 
            description: <span>Toshimitsu Saito, Hidemitsu Akechi, and Sakaoki Ise have stormed Honnoji. Defeat them.</span>,
            tips: 'Tricky cause they are split up. Toshimitsu is in the northwest, and the others in the southeast. This is also another timed mission'
        },
    ],

    rareWeapon: [{
        name: "The Great Serpent Slayer",
        description: <span>S Rank all with <span className="ally-style">Nobunaga Oda</span> on Hard or greater.</span>,
        tips: 'Other half is on Akechi 2-3, Joint Struggle with the Uesugi, using Kenshin Uesugi'
    }]
}