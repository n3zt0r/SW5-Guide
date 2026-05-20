import { useState } from "react";
import { CheckedContext } from "contexts/CheckedContext";

export default function RareWeapon({
    index,
    weapon,
    checkedList,
    handleCount
}) {
    const { name, description, tips } = weapon;
    const [isChecked, setChecked] = useState(checkedList?.["rareWeapons"]?.[index] || false);

    const handleChecked = () => {
        handleCount(!isChecked, "rareWeapons", index);
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
