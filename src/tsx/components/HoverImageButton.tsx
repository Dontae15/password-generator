import React, { useState } from 'react';

interface HoverImageButtonProps {
    id?: string;
    onClick?: () => void;
}

const HoverImageButton: React.FC<HoverImageButtonProps> = ({ id, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const defaultImage = 'public/assets/images/icon-arrow-right.svg';
    const hoverImage = 'public/assets/images/icon-arrow-right-green.svg'

    return (
        <button id={id}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <p className="text-preset-3">GENERATE</p>
            <img src={isHovered ? hoverImage : defaultImage} alt="generate password"/>
        </button>
    );
};

export default HoverImageButton;