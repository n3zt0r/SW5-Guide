import React from "react";
import ObjectiveList from "./objective-list";
import { normalizeText } from "helpers/normalizeText";

export default function Stage({ stage, pathId, chapterId }) {
    const { id: stageId, stageNumber, stageName, stageImage } = stage;
    const stageRef = `${pathId}_${chapterId}_${normalizeText(stageId)}`;

    return (
        <div className="stage-container" id={stageRef}>
            <div className="stage-header">
                <h4 className="stage-number">{stageNumber}</h4>
                <img src={stageImage} alt={stageName} className="stage-image" />
                <h5 className="stage-title">{stageName}</h5>
            </div>

            <ObjectiveList
                stage={stage}
                pathId={pathId}
                chapterId={chapterId}
                stageId={stageId}
            />
        </div>
    );
}
