import React, { useState } from 'react';
import "../components/Flashcard.css";
const Flashcard = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        // <div className="flashcard" onClick={handleFlip}>
        //     {isFlipped ? card.english : card.chinese}
        // </div>
        <div class="card-container" onClick={handleFlip}>
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1>{card.english}</h1>
                    </div>
                    <div className="flip-card-back">
                        <h1>{card.chinese}</h1>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Flashcard;