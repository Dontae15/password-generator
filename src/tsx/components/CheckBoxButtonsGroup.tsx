import React from "react";
import CheckBoxButton from "./CheckBoxButton";

interface CheckBoxButtonsGroupProps {
  checkboxes: Record<string, boolean>;
  onCheckboxChange: (key: string, isChecked: boolean) => void;
}


const CheckBoxButtonsGroup: React.FC<CheckBoxButtonsGroupProps> = ({
  checkboxes,
  onCheckboxChange,
}) => {
  const labels = {
    uppercase: "Include Uppercase Letters",
    lowercase: "Include Lowercase Letters",
    numbers: "Include Numbers",
    symbols: "Include Symbols",
  };

  return (
    <div className="password-specs">
      {Object.keys(labels).map((key) => (
        <div className="spec" key={key}>
          <CheckBoxButton 
          id={key} 
          label={labels[key as keyof typeof labels]} 
          checked={checkboxes[key]}
          onChange={(isChecked) => onCheckboxChange(key, isChecked)} />
          <p className="text-preset-3">{labels[key as keyof typeof labels]}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxButtonsGroup;