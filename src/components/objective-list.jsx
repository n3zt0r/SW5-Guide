import { useContext, useState } from "react";
import ObjectiveItem from "./objective-item";
import RareWeapon from "./rare-weapon";
import { CheckedContext } from "contexts/CheckedContext";
import { countTrueByPath } from "helpers/countTrueByPath";
import { normalizeText } from "helpers/normalizeText";
import { setNestedValues } from "helpers/setNestedValue";

export default function ObjectiveList({ stage, pathId, chapterId, stageId }) {
    const { checkedObjectives, setCheckedObjectives } =
        useContext(CheckedContext);
    const { objectives, rareWeapon } = stage;

    const newStageId = normalizeText(stageId);
    const checkedList = checkedObjectives?.[pathId]?.[chapterId]?.[
        newStageId
    ] || {
        objectives: [],
        rareWeapons: [],
    };

    const [count, setCount] = useState({
        objectives: countTrueByPath(checkedList, "objectives"),
        rareWeapons: countTrueByPath(checkedList, "rareWeapons"),
    });

    const handleCount = (value, arg, index) => {
        value
            ? setCount((prev) => ({ ...prev, [arg]: prev[arg] + 1 }))
            : setCount((prev) => ({ ...prev, [arg]: prev[arg] - 1 }));
        
        const newList = setNestedValues(checkedObjectives, pathId, chapterId, newStageId, arg, index, value);
        setCheckedObjectives((prev) => ({ ...prev, ...newList }));
    };

    return (
        <div className="objectives-container">
                <h6 className="objectives-number">
                    Objectives: {count.objectives} / {objectives.length}
                </h6>
                {rareWeapon && (
                    <h6 className="objectives-number">
                        RareWeapons: {count.rareWeapons} / {rareWeapon.length}
                    </h6>
                )}

                <ul className="objectives-list">
                    {objectives.map((objective, index) => (
                        <ObjectiveItem
                            key={index}
                            index={index}
                            objective={objective}
                            checkedList={checkedList}
                            handleCount={handleCount}
                        />
                    ))}
                </ul>

                {rareWeapon &&
                    rareWeapon.map((weapon, index) => (
                        <RareWeapon
                            key={index}
                            index={index}
                            weapon={weapon}
                            checkedList={checkedList}
                            handleCount={handleCount}
                        />
                    ))}
        </div>
    );
}
