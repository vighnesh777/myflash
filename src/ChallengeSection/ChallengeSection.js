import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import "./ChallengeSection.css"

const ChallengeSection = () => {
    return (
        <div className="CSC">
            <h1 data-aos="fade-down" className="CSH">
                Take a speed test now!
            </h1>
            <TestContainer words={4} characters={78} wpm={45} />
        </div>

    );
}

export default ChallengeSection;