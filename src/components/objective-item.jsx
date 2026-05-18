import { useState } from "react";
import { normalizeText } from "helpers/normalizeText"

export default function ObjectiveItem({
    index,
    objective,
    pathId,
    chapterId,
    stageId,
    handleCountObjectives,
    checkedObjectives,
    setCheckedObjectives
}) {
    const newStageId = normalizeText(stageId);

    const { name, description } = objective;
    const [isChecked, setChecked] = useState(
        checkedObjectives?.[pathId]?.[chapterId]?.[newStageId]?.[index] || false,
    );

    const handleChecked = () => {
        const newList = {...checkedObjectives}
        
        newList[pathId] ??= {}
        newList[pathId][chapterId] ??= {}
        newList[pathId][chapterId][newStageId] ??= []
        newList[pathId][chapterId][newStageId][index] = !isChecked

        handleCountObjectives(!isChecked);
        setCheckedObjectives((prev) => ({ ...prev, ...newList }));
        setChecked(!isChecked);
    };

    return (
        <div
            className={`objective-container ${isChecked && "objective-checked"}`}
            onClick={handleChecked}
        >
            <div className="objective-header">
                <div className="objective-title">
                    <p className="objective-name">
                        {index}. {name}
                    </p>

                    {objective.type && (
                        <span
                            className={`objective-type objective-${objective.type}`}
                        ></span>
                    )}
                </div>

                <p className="objective-description">{description}</p>
                {objective.tips && (
                    <p className="objective-tips">{objective.tips}</p>
                )}
            </div>

            {/* Only section for specific characters */}
            {objective.only && (
                <div className={`objective-only`}>
                    <img
                        src={`../src/assets/characters/${objective.only}.webp`}
                        alt={objective.only}
                        className="objective-image-only"
                    />
                </div>
            )}
        </div>
    );
}
