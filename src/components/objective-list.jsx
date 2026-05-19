import { useContext, useState } from "react";
import ObjectiveItem from "./objective-item";
import RareWeapon from "./rare-weapon";
import { CheckedContext } from "contexts/CheckedContext";
import { countTrueByPath } from "helpers/countTrueByPath";
import { normalizeText } from "helpers/normalizeText";

export default function ObjectiveList({ stage, pathId, chapterId, stageId }) {
    const newStageId = normalizeText(stageId);
    const { checkedObjectives, setCheckedObjectives } = useContext(CheckedContext)
    const [ countObjectives, setCountObjectives ] = useState(countTrueByPath(checkedObjectives, pathId, chapterId, newStageId, "objectives"));
    const [ countRareWeapons, setRareWeapons ] = useState(countTrueByPath(checkedObjectives, pathId, chapterId, newStageId, "rareWeapons"));
  
    const { objectives, rareWeapon } = stage;
    const objectivesNumber = objectives.length;

    const handleCountObjectives = (value) => {
        value ? setCountObjectives(countObjectives + 1) : setCountObjectives(countObjectives - 1);
    };

    const handleCountRareWeapons = (value) => {
        value ? setRareWeapons(countRareWeapons + 1) : setRareWeapons(countRareWeapons - 1);
    };

    return (
        <div className="objectives-container">
            <CheckedContext.Provider value={{ countObjectives, setCountObjectives }}>
                <h6 className="objectives-number">
                    Objectives: {countObjectives} / {objectivesNumber}
                </h6>
                {rareWeapon && (
                    <h6 className="objectives-number">
                        RareWeapons: {countRareWeapons} / {rareWeapon.length}
                    </h6>
                )}

                <ul className="objectives-list">
                    {objectives.map((objective, index) => (
                        <ObjectiveItem
                            key={index}
                            index={index}
                            objective={objective}
                            pathId={pathId}
                            chapterId={chapterId}
                            stageId={stageId}
                            newStageId={newStageId}
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
                            newStageId={newStageId}
                            handleCountRareWeapons={handleCountRareWeapons}
                            checkedObjectives={checkedObjectives}
                            setCheckedObjectives={setCheckedObjectives}
                        />
                    ))}
            </CheckedContext.Provider>
        </div>
    );
}
