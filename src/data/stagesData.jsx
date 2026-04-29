import { nobunaga_chapter1_stage1 } from "data/nobunaga_path/chapter 1/nobunaga_chapter1_stage1";
import { nobunaga_chapter1_stage2 } from "data/nobunaga_path/chapter 1/nobunaga_chapter1_stage2";
import { nobunaga_chapter1_stage3 } from "data/nobunaga_path/chapter 1/nobunaga_chapter1_stage3";
import { nobunaga_chapter1_stage4 } from "data/nobunaga_path/chapter 1/nobunaga_chapter1_stage4";
import { nobunaga_chapter1_stage5 } from "data/nobunaga_path/chapter 1/nobunaga_chapter1_stage5";

import { mitsuhide_chapter1_stage1 } from "data/mitsuhide_path/chapter 1/mitsuhide_chapter1_stage1";
import { mitsuhide_chapter1_stage2 } from "data/mitsuhide_path/chapter 1/mitsuhide_chapter1_stage2";
import { mitsuhide_chapter1_stage3 } from "data/mitsuhide_path/chapter 1/mitsuhide_chapter1_stage3";
import { mitsuhide_chapter1_stage4 } from "data/mitsuhide_path/chapter 1/mitsuhide_chapter1_stage4";

export const stagesData = [
    {
        pathName: "Nobunaga's Path",
        chapters: [
            {
                chapterName: "Chapter 1", // Chapter 1 of Nobunaga's Path
                stages: [
                    {...nobunaga_chapter1_stage1},
                    {...nobunaga_chapter1_stage2},
                    {...nobunaga_chapter1_stage3},
                    {...nobunaga_chapter1_stage4},
                    {...nobunaga_chapter1_stage5}
                ]
            }
        ]

    },
    {
        pathName: "Mitsuhide's Path",
        chapters: [
            {
                chapterName: "Chapter 1", // Chapter 1 of Mitsuhide's Path
                stages: [
                    {...mitsuhide_chapter1_stage1},
                    {...mitsuhide_chapter1_stage2},
                    {...mitsuhide_chapter1_stage3},
                    {...mitsuhide_chapter1_stage4}
                ]
            }
        ]

    }
]