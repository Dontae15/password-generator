import React from 'react';


interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min, max, step = 1, value, onChange }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="slider-container">
      {/* Background Track */}
      <div className="slider-track"></div>
      {/* Filled Progress Bar */}
      <div
        className="slider-track-filled"
        style={{
          width: `${percentage}%`, // Adjust width based on value
        }}
      ></div>
      {/* Slider Input */}
      <input
        type="range"
        min={6}
        max={16}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-input"
      />
    </div>
  );
};

export default Slider;