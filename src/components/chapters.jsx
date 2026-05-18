import React from "react";
import Stage from "components/stage";

export default function Chapters({ chapter, pathId }) {
    const { id: chapterId , name, stages } = chapter;
    const chapterRef = `${pathId}_${chapterId}`;

    return (
        <div className="chapters">
            {name && (
                <h3 className="chapters-title" id={`${chapterRef}`}>
                    {name}
                </h3>
            )}

            {stages.map((stage, index) => (
                <Stage
                    key={index}
                    stage={stage}
                    pathId={pathId}
                    chapterId={chapterId}
                />
            ))}
        </div>
    );
}
