import { useState } from "react";
import { setNestedValues } from "helpers/setNestedValue";
import { CheckedContext } from "contexts/CheckedContext";
import ObjectiveList from "./objective-list";

export default function RareWeapon({
    index,
    rareWeapon,
    pathId,
    chapterId,
    newStageId,
    checkedObjectives,
    setCheckedObjectives,
    handleCountRareWeapons,
}) {
    const { name, description, tips } = rareWeapon;
    const [isChecked, setChecked] = useState(
        checkedObjectives?.[pathId]?.[chapterId]?.[newStageId]?.[
            "rareWeapons"
        ]?.[index] || false,
    );

    const handleChecked = () => {
        const newList = setNestedValues(
            checkedObjectives,
            pathId,
            chapterId,
            newStageId,
            "rareWeapons",
            index,
            !isChecked,
        );

        setCheckedObjectives((prev) => ({ ...prev, ...newList }));
        handleCountRareWeapons(!isChecked);
        setChecked(!isChecked);
    };

    return (
        <div className={`objectives-list`}>
            <div
                className={`objective-container ${isChecked && "objective-checked"}`}
            >
                <div className={`objective-header`} onClick={handleChecked}>
                    <p className="objective-name objective-title">
                        Rare Weapon: {name}
                    </p>
                    <p className="objective-description">{description}</p>
                    {tips && <p className="objective-tips">{tips}</p>}
                </div>
            </div>
        </div>
    );
}
