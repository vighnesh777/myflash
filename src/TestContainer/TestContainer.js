import React from 'react';
import "./TestContainer.css"

const TestContainer = ({
    words, characters, wpm
}) => {
    return (
        <div className="TC">
            <div className="TAC">
                <h1>
                    Try Again Container
                </h1>
            </div>
        </div>
    );

};

export default TestContainer;