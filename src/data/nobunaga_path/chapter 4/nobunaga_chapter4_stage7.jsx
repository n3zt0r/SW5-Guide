export const nobunaga_chapter4_stage7 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 7",
    stageName: "Battle of Mikatagahara (Tokugawa)",
    stageImage: 'assets/stages/nobunaga_chapter4_stage7.webp',
    objectives: [
        { 
            name: "Counterattack",
            description: <span>Defeat Nobutoyo Takeda and his allies, and prevent Yasumasa Sakakibara and his allies from being taken out.</span>,
            tips: ''
        },
        { 
            name: "Protecting the Fierce",
            description: <span>Defeat Motonobu Okabe and Nobutada Anayama to capture the Central Garrison.</span>,
            tips: ''
        },
        { 
            name: "The Tiger's Venomous Fangs",
            description: <span>Defeat the ambush troops in the Central Battlefield.</span>,
            tips: ''
        },
        { 
            name: "Westward Advance",
            description: <span>Defeat Morinobu Nishina and Nobusada Obata to advance toward the Western Mountain Path.</span>,
            tips: ''
        },
        { 
            name: "Rodent-Proof",
            description: <span>Defeat Nobufusa Baba, Masateru Sanada, and Masatane Hara.</span>,
            tips: ''
        },
        { 
            name: "Shiro's Honor",
            description: <span>Defeat Katsuyori Tadeda and the entire cavalry.</span>,
            tips: ''
        },
        
        // Bonus Objectives
        { 
            type: "bonus",
            name: "A Good Retainer's Dilemma", 
            description: <span>Defeat Masatoyo Naito and Nobuzane Kawakubo, and prevent Tadatsugu Sakai from being taken out.</span>,
            tips: ''
        },
        { 
            type: "bonus",
            name: "Prepare for a Fight", 
            description: <span>Defeat Masatsugu Tsuchiya and Masazumi Kosaka to steal the enemy's supplies.</span>,
            tips: ''
        },
        { 
            type: "bonus",
            name: "The Two Ieyasu", 
            description: <span>Defeat the enemy troops to the northeast of the battlefield, and prevent Ieyasu Tokugawa's Kagemusha from being taken out.</span>,
            tips: ''
        },

        // Special Objectives
        { 
            type: "special",
            name: "Shadow Commander", 
            description: <span>Don't let Masakage Yamagata and Shigetsugu Yonekura approach Ieyasu Tokugawa's Kagemusha.</span>,
            tips: ''
        },
    ],

    rareWeapon: {
        name: "Gale Slicer",
        description: <span>S Rank all with <span className="ally-style">Tadakatsu Honda</span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 6-5, Crossing of Iga, with Hanzo Hattori'
    }
}