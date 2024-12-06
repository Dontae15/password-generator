import React, { useState } from 'react';

interface  HoverCopyButtonProps {
    password: string;
}

const HoverCopyButton: React.FC<HoverCopyButtonProps> = ({ password }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleCopyToClipboard = () => {
        if (!password) {
            alert('No password to copy!')
            return
        }

        navigator.clipboard.writeText(password).then(
            () => {
                alert('Password copied to clipboard!');
            }, 
            (err) => {
                console.log('Failed to copy:', err)
            }
        )
    }

    return (
        <button id="copy-btn"
            onClick={handleCopyToClipboard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={isHovered ? 'public/assets/images/icon-copy-white.svg' : 'public/assets/images/icon-copy.svg'} alt="copy password"/>
        </button>
    );
}

export default HoverCopyButton;