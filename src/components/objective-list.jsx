import ObjectiveItem from "./objective-item";
import RareWeapon from "./rare-weapon";

export default function ObjectiveList({ stage }) {
    const { objectives, rareWeapon } = stage;
    const objectivesNumber = objectives.length;

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
                        index={index}
                    />
                ))}
            </ul>

            {rareWeapon && <RareWeapon rareWeapon={rareWeapon} />}
        </div>
    );
}
