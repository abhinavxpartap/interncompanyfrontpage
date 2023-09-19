import React, {useState} from 'react';
import {Img} from "../utils/Img";

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleClick = () => {
        const phoneNumber = '919814490141';
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, '_blank');
    }
    return (
        <div className="floatingButton">
            <button className="toggleButton pulse" onClick={toggleDropdown}>
                <div className="ml-[12px] mb-[5px]">
                    {isOpen ? '<' : '>'}
                </div>
            </button>
            {isOpen && (
                <div className="dropdown ml-[7px] pulse">
                    <div className="icon">
                        <a href="tel:+919814490141">
                            <img src="/portfolio/call.svg" alt="none" className="w-[50px]"/>
                        </a>
                    </div>
                    <div className="icon ">
                        <a href="mailto:sahil.sharma@alumeltech.com">

                            <Img src="/portfolio/mail.svg" alt="none" className="w-[50px]"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://wa.me/919814490141" target="_blank" rel="noopener noreferrer">
                            <img src="/portfolio/callbook.svg" alt="none" className="w-[50px]"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="skype:sahillshrm@gmail.com">
                            <img src="/portfolio/skype.svg" alt="none" className="w-[50px]"/>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingButton;
