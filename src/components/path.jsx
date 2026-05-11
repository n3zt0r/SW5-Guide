import React from "react";
import Chapters from "components/chapters";
import { cleanText } from "helpers/cleanText"

export default function Path({ path }) {
    const { pathName, chapters } = path;
    const pathClassName = cleanText(pathName);

    return (
        <div className="path-container">
            <h2 className="path-title" id={pathClassName}>{pathName} </h2>
            <div className={`path-title path-banner ${pathClassName}`}></div>

            {chapters.map((chapter, key) => (
                <Chapters key={key} pathId={pathClassName} chapter={chapter} />
            ))}
        </div>
    );
}
