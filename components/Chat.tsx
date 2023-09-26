import React, { useEffect } from 'react';

const TawkToChat: React.FC = () => {
    useEffect(() => {
        const s1 = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];

        s1.async = true;
        s1.src = 'https://embed.tawk.to/65126e8d0f2b18434fda99c0/1hb7vvmrb';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode?.insertBefore(s1, s0);

        return () => {
            s1.remove();
        };
    }, []);

    return null;
};

export default TawkToChat;
