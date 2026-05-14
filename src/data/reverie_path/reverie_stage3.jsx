// import image from 'assets/stages/reverie_stage3.webp';

export const reverie_stage3 = {
    get id() {return `${this.stageNumber}: ${this.stageName}`},
    
    stageNumber: "Stage 3",
    stageName: "Iga's Great Uprising",
    // stageImage: image,
    objectives: [
        { 
            name: "Capturing Maruyama Castle", 
            description: <span>Defeat Toshimitsu Saito and Hidemitsu Akechi to capture Maruyama Castle.</span>,
            tips: `The first Bonus Objective comes before this Primary Objective. We do not want to complete this objective right now. Leave Toshimitsu alone and proceed to the 2nd bonus objective. Come back to this objective once you've done 2 things. First, complete the bonus objective "A Ninja Provokes" and all the bonus objectives before it. Secondly, defeat all the enemy officers except for Toshimitsu Saito and Hidemitsu Akechi. Once you've completed these 2 things, complete this primary objective by defeating these two. After you've completed this objective, "Kazuuji's Ambush" will probably already be triggered. Ignore it for now. What we want to do is find Hanzo. If you look on your Log, you should see that directly west of Maruyama Castle are 3 green boxes to search for Hanzo's location. Do so to trigger the bonus objective "Hometown Showdown".`,
        },
        { 
            name: "Capturing Hijiyama Castle", 
            description: <span>Defeat Nagahide Niwa and Kazumasu Takigawa to capture Hijiyama Castle.</span>,
            tips: `After completing the bonus objective "Opening the Hijiyama Castle Gates", proceed inside to trigger this primary objective. Go ahead and defeat both these guys to complete this objective. Afterwards, we want to wait for Hisahide to show up and then go east toward Mitsuki`,
        },
        { 
            name: "Unmasking the Illusion", 
            description: <span>Defeat Mitsuki to stop Hisahide Matsunaga's phantom from disappearing.</span>,
            tips: `This should trigger automatically after defeating Takigawa and Niwa. Go over to Mitsuki and defeat her and defeat Junkei Tsutsui on the way. Again, this objective is timed. Afterwards head north toward Nobunaga's position to trigger some dialogue. Three officers will show up in the northeast. This will trigger another bonus objective, "A Ninja Provokes"`,
        },
        { 
            name: "Kazuuji's Ambush", 
            description: <span>Defeat Kazuuji Nakamura and his allies, and prevent Hisahide Matsunaga from being taken out.</span>,
            tips: `This should have triggered automatically after "A Ninja Provokes" is completed. You should have completed the Primary Objectives "Capturing Hijiyama Castle", "Unmasking the Illusion", and "Capturing Maruyama Castle". You should have completed the Bonus Objectives "Opening the Maruyama Castle Gates", "Opening the Hijiyama Castle Gates", "A Ninja Provokes", and "Hometown Showdown". Now complete this objective. Hisahide should retreat temporarily. Hopefully after a bit, you'll see the message "Hioki Shrine Gate opened", and the bonus objective "Nemesis" will trigger`,
        },
        { 
            name: "Defeat Mitsuhide!", 
            description: <span>Defeat Mitsuhide Akechi.</span>,
            tips: `After Hisahide ambushes Nobunaga, you'll see Mitsuhide rush out of his garrison. Just approach him to trigger this`,
        },

        // Bonus Objectives
        { 
            only: "",
            type: "bonus",
            name: "Opening the Maruyama Castle Gates", 
            description: <span>Escort the fireball squadron to the construction point without defeating the Maruyama Castle Gatekeeper Captain.</span>,
            tips: `Well, this is the first mission you receive. You're going to want to escort Kamonnosuke Taya to the gatekeeper captain that is just north of his position. It's important to let him attack the gatekeeper to get the fire attack cutscene and complete the objective. Afterwards, the gatekeeper captain will flee and the gate to Murayama Castle will open and let you trigger the first primary mission`,
        },
        { 
            only: "",
            type: "bonus",
            name: "Opening the Hijiyama Castle Gates", 
            description: <span>Defeat the surrounding enemy troops without defeating the Hijiyama Castle Gatekeeper.</span>,
            tips: `Hijiyama Castle is the central garrison with a "C" shape around it. It houses the weapon box of this stage also. During "Capturing Maruyama Castle" primary objective, run past Toshimitsu and north of Ujisato Gamo to trigger this bonus objective. It is a timed objective. Be sure you have no contact with the gatekeeper captain. After completing this bonus objective, continue to avoid Toshimitsu. Do NOT complete "Capturing Maruyama Castle" yet. Proceed inside Hijiyama Castle`,
        },
        { 
            only: "",
            type: "bonus",
            name: "A Ninja Provokes", 
            description: <span>Defeat Tsuneoki Ikeda, Yoritaka Hachiya, and Nagamasa Asano.</span>,
            tips: `After you go to the northeastern garrison to taunt Nobunaga, these guys will show up nearby and trigger this bonus objective. Again, it's a timed objective`,
        },
        { 
            only: "",
            type: "bonus",
            name: "Hometown Showdown", 
            description: <span>Defeat Hanzo Hattori.</span>,
            tips: `You should have just completed the primary objective "Capturing Maruyama Castle". And you should be ignoring "Kazuuji's Ambush". Check your log to see the three locations to the west you need to check to find Hanzo. He should show up at the last place you check and trigger this bonus objective. After completing this bonus objective, you should have 3 Primary and 4 Bonus Objectives completed. And 1 Primary triggered but uncompleted. After verifying all that, go towards Kazuuji and defeat his ambush`,
        },

        // Special Objectives
        { 
            only: "",
            type: "special",
            name: "Nemesis", 
            description: <span>Defeat Nobunaga Oda.</span>,
            tips: `If you've been able to follow this guide, you might get this bonus objective to trigger. We needed to get Hisahide in good shape to ambush Nobunaga to get this to trigger. So congrats if you got it on the first try. Don't forget to approach Mitsuhide to trigger the final primary objective`,
        },
    ],
    
    rareWeapon: [
        {
            name: "Harbinger of Disaster",
            description: <span>S Rank all with <span className="ally-style">Sandayu Momochi</span> on Hard or greater.</span>,
            tips: `Other half is on Akechi 5-7, Battle of Shigisan Castle (Matsunaga), using Hisahide Matsunaga`
        }
    ]
}