import React from 'react';
import Tryagain from '../Tryagain/Tryagain';
import "./TestContainer.css"

const TestContainer = ({
    words, characters, wpm
}) => {
    return (
        <div className="TC">
            <div className="TAC">
                <h1>
                    <Tryagain words={words} characters={characters} wpm={wpm} />
                </h1>
            </div>
        </div>
    );

};

export default TestContainer;