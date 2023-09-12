import React from 'react';

const FixedButton = () => {
    const handleClick = () => {
        console.log(' clicked');
    };

    return (
        <button
            className="fixed bottom-4 z-[10] border-amber-950 text-[14px] font-medium left-4 bg-[#4255C9] text-white py-2 px-4 rounded-[20px] transition-colors duration-300 hover:bg-[#6C6FBF] hover:text-[#ffffff]"
            onClick={handleClick}>
            Talk To Our Expert
        </button>

    );
};

export default FixedButton;
