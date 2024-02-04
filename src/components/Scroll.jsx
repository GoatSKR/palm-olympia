import React, { useEffect, useState } from 'react';

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled down enough to show the button
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(scrollTop > 100); // Adjust this value as needed
        };

        // Add event listener to detect scroll position
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: Enables smooth scrolling
        });
    };

    return (
        <button
            className={`fixed bottom-8 right-8 bg-white rounded-full shadow-md p-4 text-black text-2xl hover:bg-gray-100 z-50 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};
export default Scroll;
