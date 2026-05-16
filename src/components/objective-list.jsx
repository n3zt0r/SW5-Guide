import ObjectiveItem from "./objective-item";
import RareWeapon from "./rare-weapon";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function ObjectiveList({ stage, stageRef }) {
    const [list, setList] = useLocalStorage("SW5", {})

    const { objectives, rareWeapon } = stage;
    const objectivesNumber = objectives.length;

    const handleList = (name, isChecked) => {
        setList((prev) => ({...prev, [name]: isChecked }))
    }
      
    return (
        <div className="objectives-container">
            <h6 className="objectives-number">
                Objectives: 0 / {objectivesNumber}
            </h6>

            <ul className="objectives-list">
                {objectives.map((objective, index) => (
                    <ObjectiveItem
                        key={index}
                        objective={objective}
                        stageRef={stageRef}
                        index={index}
                        handleList={handleList}
                        list={list}
                    />
                ))}
            </ul>

            {rareWeapon &&
                rareWeapon.map((weapon, index) => (
                    <RareWeapon
                        key={index}
                        rareWeapon={weapon}
                        stageRef={stageRef}
                    />
                ))}
        </div>
    );
}
