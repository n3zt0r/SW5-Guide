import React, { useState } from 'react';
import ObjectiveList from './objective-list';

export default function Stage({ stage }) {
    const { stageNumber, stageName, stageImage } = stage;
    const [isChecked, setisChecked] = useState(false)

    const handleChecked = () => {
        setisChecked(!isChecked)
    }

    return (
        <div className="stage-container">
            <div className={`stage-header ${isChecked && "stage-cheked"}`} onClick={handleChecked}>
                <h4 className='stage-number'>{stageNumber}</h4>
                <img src={stageImage} alt={stageName} className="stage-image" />
                <h5 className='stage-title'>{stageName}</h5>
            </div>
            
            <ObjectiveList stage={stage} />
        </div>
    );
}