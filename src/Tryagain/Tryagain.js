import React from 'react';
import "./Tryagain.css"

const Tryagain = ({ words, characters, wpm }) => {
    return (
        <div class="TAC">
            <h1><b>Test Results</b></h1>
            <div className="RC">
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>
            <div>
                <button className="button retry"><i class="fa fa-refresh"></i>Retry</button>
                <button className="button share" onClick={() => { window.open("https://www.facebook.com/sharer/sharer.php?u=myflashtype.herokuapp.com", "facebook-share-dailog", "width=800,height=600"); }}>
                    <i class="fa fa-facebook"></i>Share</button>
            </div>
        </div>
    );
};

export default Tryagain;