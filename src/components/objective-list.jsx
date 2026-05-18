import { useState } from "react";
import ObjectiveItem from "./objective-item";
import RareWeapon from "./rare-weapon";
import { CheckedContext } from "contexts/CheckedContext";
import { useLocalStorage } from "hooks/useLocalStorage";

export default function ObjectiveList({ stage, pathId, chapterId, stageId }) {
    const [checkedObjectives, setCheckedObjectives] = useLocalStorage(
        "SW5",
        {},
    );
    const [count, setCount] = useState(0);
    const { objectives, rareWeapon } = stage;
    const objectivesNumber = objectives.length;

    const handleCountObjectives = (value) => {
        value ? setCount(count + 1) : setCount(count - 1);
    };

    return (
        <div className="objectives-container">
            <CheckedContext.Provider value={{ count, setCount }}>
                <h6 className="objectives-number">
                    Objectives: {count} / {objectivesNumber}
                </h6>
                {rareWeapon && (
                    <h6 className="objectives-number">
                        RareWeapons: {0} / {rareWeapon.length}
                    </h6>
                )}

                <ul className="objectives-list">
                    {objectives.map((objective, index) => (
                        <ObjectiveItem
                            key={index + 1}
                            index={index + 1}
                            objective={objective}
                            pathId={pathId}
                            chapterId={chapterId}
                            stageId={stageId}
                            handleCountObjectives={handleCountObjectives}
                            checkedObjectives={checkedObjectives}
                            setCheckedObjectives={setCheckedObjectives}
                        />
                    ))}
                </ul>

                {rareWeapon &&
                    rareWeapon.map((weapon, index) => (
                        <RareWeapon
                            key={index}
                            index={index}
                            rareWeapon={weapon}
                            pathId={pathId}
                            chapterId={chapterId}
                            stageId={stageId}
                        />
                    ))}
            </CheckedContext.Provider>
        </div>
    );
}
