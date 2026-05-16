import React from "react";
import Chapters from "components/chapters";
import { cleanText } from "helpers/cleanText"

export default function Path({ path }) {
    const { id, name, chapters } = path;
    const pathRef = cleanText(name);

    return (
        <div className="path-container">
            <h2 className="path-title" id={id}>{name} </h2>
            <div className={`path-title path-banner ${pathRef}`}></div>

            {chapters.map((chapter, key) => (
                <Chapters key={key} pathRef={pathRef} chapter={chapter} />
            ))}
        </div>
    );
}
