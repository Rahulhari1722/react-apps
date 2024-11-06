import React, { useState, useEffect } from 'react';

const Progress = () => {
    const [bar, setBar] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setBar((prevBarValue) => {
                if (prevBarValue >= 100) {
                    clearInterval(interval);
                }
                return Math.min(prevBarValue + 5, 100);
            });
        }, 1000);

        // This is necessary to clean up the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []); // Add an empty dependency array to prevent infinite re-renders

    return (
        <div className='progress-container'>
            <div className="progress" style={{ transform: `translateX(${bar - 100}%)` }}>

            </div>
        </div>
    );
};

export default Progress;