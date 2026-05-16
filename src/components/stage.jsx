import React from 'react';
import ObjectiveList from './objective-list';
import { cleanText } from "helpers/cleanText"

export default function Stage({ stage, chapterRef }) {
    const { id, stageNumber, stageName, stageImage } = stage;
    const stageRef = `${chapterRef}_${cleanText(id)}`

      return (
        <div className="stage-container" id={stageRef}>
            <div className="stage-header">
                <h4 className='stage-number'>{stageNumber}</h4>
                <img src={stageImage} alt={stageName} className="stage-image" />
                <h5 className='stage-title'>{stageName}</h5>
            </div>
            
            <ObjectiveList stage={stage} stageRef={stageRef} />
        </div>
    );
}