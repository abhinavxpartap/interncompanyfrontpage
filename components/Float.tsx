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
              <div className="ml-[12px] mb-[5px]">
                  {isOpen ? '<' : '>'}
              </div>
            </button>
            {isOpen && (
                <div className="dropdown ml-[7px] pulse">
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
