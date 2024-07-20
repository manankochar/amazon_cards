import React, { useState } from 'react';

export default function Price({ oldPrice, newPrice }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const baseStyles = {
        backgroundColor: isHovered ? 'darkorange' : 'orange',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease'
    };

    const oldStyle = { textDecorationLine: "line-through" };
    const newStyles = { fontWeight: "bold" };

    return (
        <div
            style={baseStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span style={oldStyle}>
                {oldPrice}
            </span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>
                {newPrice}
            </span>
        </div>
    );
}
