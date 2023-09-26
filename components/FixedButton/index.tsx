import React from 'react';
import {Img} from "../../utils/Img";

const FixedButton = () => {
    const handleClick = () => {
        const phoneNumber = '919814490141';
        const whatsappLink = `https://wa.me/${phoneNumber}`;

        window.open(whatsappLink, '_blank');
    }

    return (<>

        <button
            className="fixed bottom-4 z-[1000]  right-2  pulse py-3 px-1  "
            onClick={handleClick}>
            <Img src="/casestudy/whatsapp.svg" alt="" className=" w-[60px]"/>

        </button>
            <div>

            </div>
        </>
    );
};

export default FixedButton;
