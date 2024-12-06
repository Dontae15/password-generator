import React from "react";

interface StrengthBarProps {
  passwordLength: number; // Length of the password
  checkboxes: Record<string, boolean>; // State of all checkboxes
}

const StrengthBar: React.FC<StrengthBarProps> = ({
  passwordLength,
  checkboxes,
}) => {
  // Calculate the number of selected checkboxes
  const selectedCriteria = Object.values(checkboxes).filter((checked) => checked)
    .length;

  // Determine the password strength
  const calculateStrength = (): { label: string; strength: number } => {
    if (passwordLength >= 12 && selectedCriteria === 4) {
      return { label: "Strong", strength: 4 };
    } else if (passwordLength >= 10 && selectedCriteria >= 3) {
      return { label: "Medium", strength: 3 };
    } else if (passwordLength >= 8 && selectedCriteria >= 2) {
      return { label: "Weak", strength: 2 };
    } else {
      return { label: "Too Weak!", strength: 1 };
    }
  };

  const { label, strength } = calculateStrength();

  return (
    <div className="strength-bar-container">
      {/* Strength Label */}
      <p className="strength-label">Strength</p>

      {/* Strength Bar */}
      <div className="strength-bar">
        <p className="text-preset-2">{label}</p>
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className={`bar ${strength >= bar ? "filled" : ""}`}
            style={{
              backgroundColor: strength >= bar ? getStrengthColor(strength) : "",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Helper function to determine bar color based on strength
const getStrengthColor = (strength: number): string => {
  switch (strength) {
    case 4:
      return "#A4FFAF"; // Strong (Green)
    case 3:
      return "#F8CD65"; // Medium (Yellow)
    case 2:
      return "#FB7C58"; // Weak (Orange)
    case 1:
    default:
      return "#F64A4A"; // Too Weak! (Red)
  }
};

export default StrengthBar;
