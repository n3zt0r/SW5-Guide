export const nobunaga_chapter2_stage2 = {
    get id() {
        return `${this.stageNumber}: ${this.stageName}`;
    },

    stageNumber: "Stage 2",
    stageName: "Battle of Okehazama",
    stageImage: "assets/stages/nobunaga_chapter2_stage2.webp",
    objectives: [
        {
            name: "Ambush on Dengakuhazama",
            description: (
                <span>
                    Defeat <span className="enemy-style">Tadatsugu Sakai</span>,{" "}
                    <span className="enemy-style">Ienari Ishikawa</span>, and{" "}
                    <span className="enemy-style">Tadazane Honda</span> to
                    ambush <span className="place-style">Dengakuhazama</span>.
                </span>
            ),
        },
        {
            name: "The Anticipated Ambush",
            description: (
                <span>
                    Defeat <span className="enemy-style">Hanzo Hattori</span>{" "}
                    and his allies.
                </span>
            ),
        },
        {
            name: "The Leader of the Tokugawa Clan",
            description: (
                <span>
                    Defeat <span className="enemy-style">Ieyasu Tokugawa</span>.
                </span>
            ),
        },
        {
            name: "The Comeback",
            description: (
                <span>
                    Defeat <span className="enemy-style">Sena</span> and her
                    allies to prevent{" "}
                    <span className="ally-style">Katsuiie</span>,{" "}
                    <span className="ally-style">Hideyoshi</span>, and{" "}
                    <span className="ally-style">Oichi</span> from being taken
                    out.
                </span>
            ),
        },
        {
            name: "Fools Don't Know When To Quit",
            description: (
                <span>
                    Attack the <span className="enemy-style">enemy troops</span>{" "}
                    until the preparations are complete.
                </span>
            ),
        },
        {
            name: "The Tokugawa Clan's Path",
            description: (
                <span>
                    Defeat <span className="enemy-style">Sena</span>.
                </span>
            ),
        },

        // Bonus Objectives
        {
            type: "bonus",
            name: "Reclaiming the Garrison",
            description: (
                <span>
                    Defeat <span className="enemy-style">Naomori Ii</span> and{" "}
                    <span className="enemy-style">Yasutomo Ashina</span> to
                    recapture <span className="place-style">Washizu</span> and{" "}
                    <span className="place-style">Marune Garrison</span>.
                </span>
            ),
        },
        {
            type: "bonus",
            name: "The Tokugawa Army Supply Soldiers",
            description: (
                <span>
                    Defeat all the{" "}
                    <span className="enemy-style">Supply Captains</span> to cut
                    off the <span className="ally-style">Imagawa Army</span>'s
                    supply line.
                </span>
            ),
        },
        {
            only: "nobunaga_oda",
            type: "bonus",
            name: "The Successor of Samonji",
            description: (
                <span>
                    <span className="ally-style">Nobunaga Oda</span> must defeat{" "}
                    <span className="enemy-style">Yoshimoto Imagawa</span> with
                    a <span className="place-style">Musou Attack</span>.
                </span>
            ),
        },

        // Special Objectives
        {
            type: "special",
            name: "To Command the Imagawa",
            description: (
                <span>
                    Defeat <span className="enemy-style">Motonobu Otake</span>.
                </span>
            ),
            tips: "Triggers when Southwestern Garrison opens after Ieyasu's defeat",
        },
    ],

    /* rareWeapon: [{
        name: "Virtuous",
        description: <span>S Rank all with <span className="ally-style">Toshiie Maeda</span> on Hard or greater.</span>,
        tips: 'Other half is on Oda 4-8, Battle of Mikatagahara (Takeda), using Shingen Takeda'
    }] */
};
