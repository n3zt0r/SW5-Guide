import React from "react";
import Chapters from "components/chapters";

export default function Path({ path }) {
    const { pathName, chapters } = path;
    const pathClassName = pathName.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "");

    return (
        <div className="path-container">
            <h2 className="path-title">{pathName} </h2>
            <div className={"path-title " + pathClassName}></div>

            {chapters.map((chapter, key) => (
                <Chapters key={key} chapter={chapter} />
            ))}
        </div>
    );
}
