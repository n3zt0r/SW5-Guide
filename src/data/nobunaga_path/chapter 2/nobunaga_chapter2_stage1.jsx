export const nobunaga_chapter2_stage1 = {
    get id() {
        return `${this.stageNumber}: ${this.stageName}`;
    },

    stageNumber: "Stage 1",
    stageName: "Battle of Ino",
    stageImage: "assets/stages/nobunaga_chapter2_stage1.webp",
    objectives: [
        {
            name: "Destroying the Front Line",
            description: (
                <span>
                    Defeat the <span className="enemy-style">enemy troops</span>{" "}
                    to advance the{" "}
                    <span className="ally-style">Nobunaga's Army</span>{" "}
                    frontline.
                </span>
            ),
        },
        {
            name: "Blazing a Trail",
            description: (
                <span>
                    Defeat <span className="enemy-style">Torazo Owaki</span> and{" "}
                    <span className="enemy-style">Heishiro Kanbe</span> to clear
                    the <span className="place-style">back road</span>.
                </span>
            ),
        },
        {
            name: "Striking at the Enemy's Morale",
            description: (
                <span>
                    Defeat the commanding officer,{" "}
                    <span className="enemy-style">Hidesada Hayashi</span>.
                </span>
            ),
        },
        {
            name: "A Sister's Wish",
            description: (
                <span>
                    Defeat <span className="enemy-style">Oichi</span> to clear a
                    path to <span className="place-style">Suemori Castle</span>.
                </span>
            ),
        },
        {
            name: "Demon of a Dead End",
            description: (
                <span>
                    Defeat <span className="enemy-style">Katsuie Shibata</span>.
                </span>
            ),
        },

        // Bonus Objectives
        {
            type: "bonus",
            name: "A Foothold for Victory",
            description: (
                <span>
                    Defeat <span className="enemy-style">Shingo Tsunoda</span>{" "}
                    and <span className="enemy-style">Sukenojo Kamata</span> to
                    capture the{" "}
                    <span className="place-style">
                        Central Western Garrison
                    </span>{" "}
                    and the{" "}
                    <span className="place-style">Northeastern Garrison</span>.
                </span>
            ),
        },
        {
            type: "bonus",
            name: "Toshiie's Assault",
            description: (
                <span>
                    Defeat{" "}
                    <span className="enemy-style">Mimasakanokami Hayashi</span>{" "}
                    to clear the{" "}
                    <span className="place-style">central path</span>.
                </span>
            ),
            tips: 'NOTE: "Toshiie\'s Assault" and "Breaking Through the Center" are interchangeable objectives that are dependent on who you take in to battle. Only one of these missions will trigger on a single playthrough.',
        },
        {
            only: "toshiie_maeda",
            type: "bonus",
            name: "Breaking through the Center",
            description: (
                <span>
                    <span className="ally-style">Toshiie Maeda</span> must
                    defeat the <span className="enemy-style">enemy troops</span>{" "}
                    in the <span className="place-style">Central Garrison</span>{" "}
                    to break through the center of their formation.
                </span>
            ),
            tips: "To trigger, have Toshiie approach the area that contains Kurando Tsuzuki",
        },
        {
            only: "hideyoshi_hashiba",
            type: "bonus",
            name: "Where, Oh Where Is The Back Road?",
            description: (
                <span>
                    <span className="ally-style">Hideyoshi Hashiba</span> much
                    reach the <span className="place-style">backroad</span>.
                </span>
            ),
        },

        // Special Objectives
        {
            type: "special",
            name: "Mighty Spear Mataza",
            description: (
                <span>
                    Defeat <span className="enemy-style">Juzo Hashimoto</span>{" "}
                    and <span className="enemy-style">Sakyonoshin Tomino</span>.
                </span>
            ),
            tips: "Just approach them at central area",
        },
    ],
    rareWeapon: [{
        name: "Virtuous Wrath",
        description: (
            <span>
                S Rank all with{" "}
                <span className="ally-style">Toshiie Maeda</span> on Hard or
                greater.
            </span>
        ),
        tips: "Other half is on Oda 4-8, Battle of Mikatagahara (Takeda), using Shingen Takeda",
    }],
};
