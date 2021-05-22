import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import './TypingChallengeContainer.css';

const TypingChallengeContainer = ({ words, characters, wpm }) => {
    return (
        <div className="TCC">
            {/*Details*/}
            <div className="DC">
                <ChallengeDetailsCard cardName="Word" cardValue={words} />
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>
            {/*Real part*/}
        </div>
    );
};
export default TypingChallengeContainer;