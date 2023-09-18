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
            <button className="toggleButton pulse" onClick={toggleDropdown}>
                {isOpen ? '<' : '>'}
            </button>
            {isOpen && (
                <div className="dropdown pulse">
                    <div className="icon ">
                        <Img src="/portfolio/call.svg" alt="none" className="w-[50px]"/>
                    </div>
                    <div className="icon ">
                        <Img src="/portfolio/mail.svg" alt="none" className="w-[50px]"/>
                    </div>
                    <div className="icon ">
                        <Img src="/portfolio/callbook.svg" alt="none" className="w-[50px]"/>
                    </div>
                    <div className="icon ">
                        <Img src="/portfolio/skype.svg" alt="none" className="w-[50px]"/>
                    </div>

                </div>
            )}
        </div>
    );
};

export default FloatingButton;
