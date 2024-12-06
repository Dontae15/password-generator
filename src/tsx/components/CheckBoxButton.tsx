import React from "react";

interface CheckBoxButtonProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const CheckBoxButton: React.FC<CheckBoxButtonProps> = ({ id, label, checked, onChange }) => {
  
    return (
        <button
          id={id}
          aria-label={label}
          onClick={() => onChange(!checked)} // Notify the parent of the new state
          style={{
            backgroundColor: checked ? "#A4FFAF" : "",
            border: checked ? "2px solid #A4FFAF" : "2px solid #D9D9D9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem",
            cursor: "pointer",
            position: "relative",
          }}
        >
          {/* Conditionally render the checkmark image */}
          {checked && (
            <img
              src="/assets/images/icon-check.svg"
              alt="Checked"
              style={{
                width: "14px",
                height: "14px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </button>
      );
};

export default CheckBoxButton;
