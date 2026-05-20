import { useState } from "react";
import { CheckedContext } from "contexts/CheckedContext";

export default function ObjectiveItem({
    index,
    objective,
    checkedList,
    handleCount
}) {
    const { name, description } = objective;
    const [isChecked, setChecked] = useState(checkedList?.["objectives"]?.[index] || false);

    const handleChecked = () => {
        handleCount(!isChecked, "objectives", index);
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
                        {index + 1}. {name}
                    </p>

                    {objective.type && ( // Bonus OR Special type indicator if type is provided
                        <span
                            className={`objective-type objective-${objective.type}`}
                        ></span>
                    )}
                </div>

                <p className="objective-description">{description}</p>
                {objective.tips && ( // Tips section if tips are provided
                    <p className="objective-tips">{objective.tips}</p>
                )}
            </div>

            {objective.only && ( // Only section for specific characters
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
