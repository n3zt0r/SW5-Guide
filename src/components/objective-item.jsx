import { useState } from "react";

export default function ObjectiveItem({ index, objective }) {
    const { name, description } = objective;
    const [isChecked, setisChecked] = useState(false);

    const handleChecked = () => {
        setisChecked(!isChecked);
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
