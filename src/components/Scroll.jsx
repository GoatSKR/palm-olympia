import React, { useEffect } from 'react';

const Scroll = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return null; // This component doesn't render anything in the DOM
};

export default Scroll;
