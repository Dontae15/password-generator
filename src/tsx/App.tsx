import React, { useState } from 'react';
import '../styles/main.scss';
import HoverImageButton from './components/HoverImageButton';
import HoverCopyButton from './components/HoverCopyButton';
import CheckBoxButtonsGroup from './components/CheckBoxButtonsGroup';
import StrengthBar from './components/StrengthBar';
import Slider from './components/slider';
import  generatePassword  from './components/generatePassword'; // Import the password generation logic

const App: React.FC = () => {
  const [passwordLength, setPasswordLength] = useState(6);
  const [checkboxes, setCheckboxes] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [password, setPassword] = useState('');

  // Handle checkbox state updates
  const handleCheckboxChange = (key: string, isChecked: boolean) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [key]: isChecked,
    }));
  };

  const handleGeneratePassword = () => {
    // Get selected criteria
    const selectedCriteria = (Object.keys(checkboxes) as Array<keyof typeof checkboxes>).filter(
        (key) => checkboxes[key] // TypeScript now recognizes `key` as a valid key
      );
  
    // Check if strength is too weak
    if (passwordLength < 8 || selectedCriteria.length < 2) {
      alert("Password strength is too weak to generate a password!");
      return;
    }
  
    // Generate the password
    const newPassword = generatePassword(passwordLength, selectedCriteria);
    setPassword(newPassword);
  };

  return (
    <div className="main-content">
      <h2 className="text-preset-2">Password Generator</h2>
      <div className="generator-container">
        <div className="password-display">
          <h1 className="text-preset-1">{password || ''}</h1>
          <HoverCopyButton
            password={password}
          />
        </div>

        <div className="password-generator">
          <div className="password-length">
            <p className="text-preset-3">Character Length</p>
            <h1 className="text-preset-1">{passwordLength}</h1>
          </div>

          <Slider
            min={6}
            max={16}
            step={1}
            value={passwordLength}
            onChange={setPasswordLength}
          />

          <CheckBoxButtonsGroup
            checkboxes={checkboxes}
            onCheckboxChange={handleCheckboxChange}
          />

          <div className="password-strength">
            <StrengthBar passwordLength={passwordLength} checkboxes={checkboxes} />
            <HoverImageButton
              id="generate-password-btn"
              onClick={handleGeneratePassword}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
