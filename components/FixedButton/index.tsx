import React from 'react';
import {Img} from "../../utils/Img";

const FixedButton = () => {
    const handleClick = () => {
        const phoneNumber = '';
        const whatsappLink = `https://wa.me/${phoneNumber}`;

        window.open(whatsappLink, '_blank');
    }

    return (
        <button
            className="fixed    bottom-4 z-[1000]  right-4  pulse py-2 px-4  "
            onClick={handleClick}>
            <Img src="/casestudy/whatsapp.svg" alt="" className=" w-[60px]"/>
        </button>

    );
};

export default FixedButton;
