import '../css/Question.css';
import React, { useState } from 'react';

const Question = ({ id, category, question, option1, option2, option3, option4, onOptionSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onOptionSelect(id,option);

    };

    return (
        <div className="question">
            <h3>{question}</h3>
            <ul>
                <li onClick={() => handleOptionClick(option1)} className={selectedOption === option1 ? 'selected' : ''}>{option1}</li>
                <li onClick={() => handleOptionClick(option2)} className={selectedOption === option2 ? 'selected' : ''}>{option2}</li>
                <li onClick={() => handleOptionClick(option3)} className={selectedOption === option3 ? 'selected' : ''}>{option3}</li>
                <li onClick={() => handleOptionClick(option4)} className={selectedOption === option4 ? 'selected' : ''}>{option4}</li>
            </ul>
            <p>Selected Option: {selectedOption}</p>
        </div>
    );
};

export default Question;
