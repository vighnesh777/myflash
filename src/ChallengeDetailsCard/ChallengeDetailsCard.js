import React from 'react';
import './ChallengeDetailsCard.css'


const ChallengeDetailsCard = ({ cardName, cardValue }) => {
    return (
        <div className="DCC">
            <div className="CN">
                {cardName}
            </div>
            <div className="CV">
                {cardValue}
            </div>
        </div>
    );
};


export default ChallengeDetailsCard;