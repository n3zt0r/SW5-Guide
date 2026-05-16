import React from "react";
import Stage from "components/stage";
import { cleanText } from "helpers/cleanText";

export default function Chapters({ chapter, pathRef }) {
    const { name, stages } = chapter;
    const chapterRef = `${pathRef}_${cleanText(name)}`;

    return (
        <div className="chapters">
        {name &&
            <h3 className="chapters-title" id={`${chapterRef}`}>
                {name}
            </h3>
        }

            {stages.map((stage, index) => (
                <Stage key={index} stage={stage} chapterRef={chapterRef} />
            ))}
        </div>
    );
}
