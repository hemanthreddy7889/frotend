// QuizQuestions.js
import '../css/QuizQuestions.css'
import React from 'react';
import Question from './Question';

const QuizQuestions = ({ questions, onOptionSelect }) => {
    return (
        <div className="quiz-questions">
            {questions.map(question => (
                <Question
                    key={question.id}
                    id={question.id}
                    category={question.category}
                    question={question.question}
                    option1={question.option1}
                    option2={question.option2}
                    option3={question.option3}
                    option4={question.option4}
                    onOptionSelect={onOptionSelect}
                />
            ))}
        </div>
    );
};

export default QuizQuestions;
