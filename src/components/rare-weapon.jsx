import { useState } from "react";
import { CheckedContext } from "contexts/CheckedContext";
import ObjectiveList from "./objective-list";

export default function RareWeapon({ rareWeapon }) {
    const { name, description, tips } = rareWeapon;
    const [ isChecked, setisChecked ] = useState(false);

    const handleChecked = () => {
        setisChecked(!isChecked);
    };

    return (
        <div className={`objectives-list`}>
            <div className={`objective-container ${isChecked && "objective-checked"}`}>
                <div
                    className={`objective-header`}
                    onClick={handleChecked}
                >
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
