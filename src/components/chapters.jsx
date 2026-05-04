import React from "react";
import Stage from "components/stage";
import { cleanText } from "helpers/cleanText"

export default function Chapters({ chapter, pathId }) {
    const { chapterName, stages } = chapter;
    const chapterRef = cleanText(chapterName)
  
    return (
        <div className="chapters">
            <h3
                className="chapters-title"
                id={`${chapterRef}_${pathId}`}
            >
                {chapterName}
            </h3>

            {stages.map((stage, index) => (
                <Stage key={index} stage={stage} />
            ))}
        </div>
    );
}
