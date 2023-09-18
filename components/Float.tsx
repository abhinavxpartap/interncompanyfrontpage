// components/FloatingButton.js
import React, {useState} from 'react';
import {Img} from "../utils/Img";

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="floatingButton">
            <button className="toggleButton" onClick={toggleDropdown}>
                {isOpen ? '<' : '>'}
            </button>
            {isOpen && (
                <div className="dropdown">
                    <div className="icon ">
                        <Img src="/portfolio/social.svg" alt="none" className="w-[50px]"/>
                    </div>
                    <div className="icon ">
                        <Img src="/portfolio/social.svg" alt="none" className="w-[50px]"/>
                    </div>
                    <div className="icon ">
                        <Img src="/portfolio/social.svg" alt="none" className="w-[50px]"/>
                    </div>
                    <div className="icon ">
                        <Img src="/portfolio/social.svg" alt="none" className="w-[50px]"/>
                    </div>

                </div>
            )}
        </div>
    );
};

export default FloatingButton;
