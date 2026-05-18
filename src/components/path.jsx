import React from "react";
import Chapters from "components/chapters";

export default function Path({ path }) {
    const { id, name, chapters } = path;
    const pathId = id;

    return (
        <div className="path-container">
            <h2 className="path-title" id={id}>{name} </h2>
            <div className={`path-title path-banner ${id}`}></div>

            {chapters.map((chapter, key) => (
                <Chapters key={key} pathId={pathId} chapter={chapter} />
            ))}
        </div>
    );
}
